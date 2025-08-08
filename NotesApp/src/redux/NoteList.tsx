import { useAppSelector, useAppDispatch } from './hook';
import { deleteNote } from './NoteSlice';
import type { Note } from './NoteTypes';
import { useState } from 'react';
import NoteEditor from './NoteEditor';

const NotesList: React.FC = () => {
  const notes = useAppSelector(state => state.notes.notes);
  const dispatch = useAppDispatch();
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  return (
    <div className="space-y-4">
      <NoteEditor
        existingNote={editingNote || undefined}
        onSave={() => setEditingNote(null)}
      />
      <hr />
      {notes.map(note => (
        <div key={note.id} className="border p-4 rounded">
          <h3 className="text-lg font-bold">{note.title}</h3>
          <p>{note.content}</p>
          <div className="space-x-2 mt-2">
            <button onClick={() => setEditingNote(note)} className="text-blue-500">
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteNote(note.id))}
              className="text-red-500"
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