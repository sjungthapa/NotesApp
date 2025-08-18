import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Note } from "./NoteTypes";

interface NoteSliceState {
  notes: Note[];
}

const initialState: NoteSliceState = {
  notes: [],
};


const saveNotesToLocalStorage = (notes: Note[], userId: string) => {
  localStorage.setItem(`notes_${userId}`, JSON.stringify(notes));
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {

    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
      saveNotesToLocalStorage(state.notes, action.payload.userId); 
    },

    // ✅ Delete Note
    deleteNote: (state, action: PayloadAction<string>) => {
      const noteToDelete = state.notes.find(note => note.id === action.payload);
      state.notes = state.notes.filter(note => note.id !== action.payload);

      if (noteToDelete) {
        saveNotesToLocalStorage(state.notes, noteToDelete.userId); 
      }
    },

    editNote: (state, action: PayloadAction<Note>) => {
      const { id, title, content } = action.payload;
      const existingNote = state.notes.find(note => note.id === id);
      if (existingNote) {
        existingNote.title = title;
        existingNote.content = content;
        saveNotesToLocalStorage(state.notes, existingNote.userId); 
      }
    },


    loadNotesForUser: (state, action: PayloadAction<string>) => {
      const userId = action.payload;
      const storedNotes = localStorage.getItem(`notes_${userId}`);
      state.notes = storedNotes ? JSON.parse(storedNotes) : [];
    },


    clearNotes: (state) => {
      state.notes = [];
    },
  },
});


export const {
  addNote,
  deleteNote,
  editNote,
  loadNotesForUser,
  clearNotes,
} = notesSlice.actions;

export default notesSlice.reducer;
