import NoteEditor from "@/redux/NoteEditor";
import NotesList from "@/redux/NoteList";


const personalNotes = () => {
  return (
    <div>
      <h1>Personal Notes</h1>
      <p>Here you can manage your personal notes.</p>
      <NoteEditor />
        <NotesList />
      
    </div>
  );
}   

export default personalNotes;