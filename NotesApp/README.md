# Notes App

A modern, full-featured notes application with category organization, user authentication, and persistent storage.

## Features

- **User Authentication**: Secure login with session persistence
- **Categorized Notes**: Personal, Work, and School categories
- **CRUD Operations**: Create, read, update, and delete notes
- **Responsive Design**: Works on all device sizes
- **Persistent Storage**: Notes saved per user in localStorage
- **Modern UI**: Clean interface with gradient backgrounds

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **Authentication**: Context API

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sjungthapa/NotesApp.git
```
2. Install dependencies:
```
npm install
npm install react@^18.2.0 react-dom@^18.2.0
npm install react-router-dom@^6.22.3
npm install @reduxjs/toolkit@^2.2.0 react-redux@^9.1.0
npm install tailwindcss@^3.4.0 postcss@^8.4.38 autoprefixer@^10.4.19
npm install lucide-react@^0.375.0
```
3. Start the development server:
```
npm run dev
```
4. Open your browser at:
```
http://localhost:5173/
```
## Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   └── NoteEditor.tsx
├── contextAPI/          # Authentication context
│   ├── AuthContext.tsx
│   └── Profile.tsx
├── pages/               # Application views
│   ├── home.tsx
│   ├── personalNotes.tsx
│   ├── workNotes.tsx
│   ├── schoolNotes.tsx
│   └── login.tsx
├── redux/               # State management
│   ├── NoteSlice.ts
│   ├── NoteTypes.ts
│   ├── NoteList.tsx
│   ├── hook.ts
│   └── store.tsx
├── App.css              # Custom styles
├── index.css            # Global styles
└── main.tsx             # Application entry point
```
## Core Components
### Authentication System
1. AuthContext.tsx: Manages user authentication state

2. login.tsx: Login form with validation

3. Profile.tsx: User profile with logout functionality
### State Management
1. NoteSlice.ts: Redux slice for CRUD operations

2. NoteTypes.ts: Type definitions for notes

3. NoteList.tsx: Displays and manages notes

### UI Components
1. button.tsx: Customizable button with variants

2. card.tsx: Flexible card component

3. input.tsx: Styled input field with validation

## Usage
### Login Page:
1. Enter your name and email

2. Click "Login" to access the app

### Home Screen:
1. Choose a note category: Personal, Work, or School
### Notes View:
1. Add new notes using the editor

2. Edit existing notes by clicking "Edit"

3. Delete notes with the "Delete" button

### Profile:
1. View your account details

2. Logout when finished

