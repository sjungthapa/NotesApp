import { useAppSelector, useAppDispatch } from './hook';
import { deleteNote } from './NoteSlice';
import type { Note } from './NoteTypes';
import { useState } from 'react';
import NoteEditor from './NoteEditor';
import '../App.css';
import { useAuth } from '../contextAPI/AuthContext';

interface NotesListProps {
  category: 'personal' | 'work' | 'school'; // ✅ Accept category as prop
}

const NotesList: React.FC<NotesListProps> = ({ category }) => {
  const notes = useAppSelector(state => state.notes.notes);
  const dispatch = useAppDispatch();
  const { user } = useAuth();
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  // ✅ Only show notes from the given category
  const filteredNotes = notes.filter(
    note => note.category === category && note.userId === user?.id
  );

  return (
    <div className="notes-list-container">
      <NoteEditor
        existingNote={editingNote || undefined}
        onSave={() => setEditingNote(null)}
        category={category} // ✅ Pass category to editor
      />
      <hr className="divider" />
      {filteredNotes.map(note => (
        <div key={note.id} className="note-card">
          <h3 className="note-title">{note.title}</h3>
          <p className="note-content">{note.content}</p>
          <div className="note-actions">
            <button onClick={() => setEditingNote(note)} className="edit-button">
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteNote(note.id))}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
