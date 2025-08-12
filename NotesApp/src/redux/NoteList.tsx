import { useAppSelector, useAppDispatch } from './hook';
import { deleteNote } from './NoteSlice';
import type { Note } from './NoteTypes';
import { useState } from 'react';
import NoteEditor from './NoteEditor';
import '../App.css'

const NotesList: React.FC = () => {
  const notes = useAppSelector(state => state.notes.notes);
  const dispatch = useAppDispatch();
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  return (
    <div className="notes-list-container">
      <NoteEditor
        existingNote={editingNote || undefined}
        onSave={() => setEditingNote(null)}
      />
      <hr className="divider" />
      {notes.map(note => (
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