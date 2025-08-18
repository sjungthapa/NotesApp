import { nanoid } from '@reduxjs/toolkit';
import { useState, useEffect } from 'react';
import { useAppDispatch } from './hook';
import { addNote, editNote } from './NoteSlice';
import type { Note } from './NoteTypes';
import { useAuth } from '../contextAPI/AuthContext';

interface NoteEditorProps {
  existingNote?: Note;
  onSave?: () => void;
  category: 'personal' | 'work' | 'school'; // ✅ make sure this is passed in
}

const NoteEditor: React.FC<NoteEditorProps> = ({ existingNote, onSave, category }) => {
  const dispatch = useAppDispatch();
  const { user } = useAuth();
  const [title, setTitle] = useState(existingNote?.title || '');
  const [content, setContent] = useState(existingNote?.content || '');

  useEffect(() => {
    if (existingNote) {
      setTitle(existingNote.title);
      setContent(existingNote.content);
    }
  }, [existingNote]);

  const handleSave = () => {

    if (!user) return;

    if (existingNote) {
      dispatch(editNote({ ...existingNote, title, content }));
    } else {
      const newNote: Note = {
        id: nanoid(),
        title,
        content,
        createdAt: new Date().toISOString(),
        category, 
        userId: user.id,
      };
      dispatch(addNote(newNote));
    }

    onSave?.();
    setTitle('');
    setContent('');
  };

  return (
    <div className="p-4 border rounded space-y-2">
      <input
        className="w-full border p-2"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        className="w-full border p-2"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Write your note..."
      />
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {existingNote ? 'Update' : 'Add'}
      </button>
    </div>
  );
};

export default NoteEditor;
