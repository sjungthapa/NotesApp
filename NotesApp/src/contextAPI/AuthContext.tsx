import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { loadNotesForUser, clearNotes } from '../redux/NoteSlice';

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const dispatch = useDispatch(); // ✅ Redux dispatch

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    dispatch(loadNotesForUser(userData.id)); // ✅ Load notes for this user
  };

  const logout = () => {
  if (user) {
    localStorage.removeItem(`notes_${user.id}`); // remove notes from localStorage
  }
  setUser(null);
  localStorage.removeItem('user');
  dispatch(clearNotes()); // clear Redux notes state
};

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      dispatch(loadNotesForUser(parsedUser.id)); // ✅ Load notes on refresh
    }
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
