import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Note } from './NoteTypes';


interface NoteSliceState {
  notes: Note[];
}


const initialState: NoteSliceState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState, 
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const { id, title, content } = action.payload;
      const existingNote = state.notes.find(note => note.id === id);
      if (existingNote) {
        existingNote.title = title;
        existingNote.content = content;
      }
    },
  },
});

export const { addNote, deleteNote, editNote } = notesSlice.actions;

export default notesSlice.reducer;