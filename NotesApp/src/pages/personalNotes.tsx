import NotesList from "@/redux/NoteList";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { NotebookPen, Home, User } from "lucide-react";

const PersonalNotes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-red-300 to-orange-300 flex flex-col">
      {/* ===== Navbar ===== */}
      <nav className="w-full bg-white/90 backdrop-blur-md shadow-md border-b border-pink-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <NotebookPen className="w-6 h-6 text-pink-600" />
          <span className="text-xl font-bold text-gray-800">Notes App</span>
        </div>
        <div className="flex gap-3">
          <button
            className="flex items-center gap-1 text-gray-700 hover:text-pink-600"
            onClick={() => navigate("/")}
          >
            <Home className="w-4 h-4" /> Home
          </button>
          <button
            className="flex items-center gap-1 text-gray-700 hover:text-pink-600"
            onClick={() => navigate("/profile")}
          >
            <User className="w-4 h-4" /> Profile
          </button>
        </div>
      </nav>

      {/* ===== Main Content ===== */}
      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* ===== Page Header ===== */}
          <Card className="shadow-xl border border-pink-300 bg-white/80 backdrop-blur-md rounded-2xl">
            <CardHeader className="text-center py-8 px-6">
              <CardTitle className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
                Personal Notes
              </CardTitle>
              <CardDescription className="text-lg text-gray-700 max-w-2xl mx-auto">
                View, add, edit, and manage all your personal notes in one place.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* ===== Notes List Only ===== */}
          <Card className="shadow-lg border border-orange-300 bg-white rounded-xl">
            <CardHeader className="border-b border-orange-200 px-6 py-4">
              <CardTitle className="text-2xl font-semibold text-orange-700">
                Your Notes
              </CardTitle>
              <CardDescription className="text-orange-500">
                Add new notes, edit existing ones, or delete them as needed.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 py-6 overflow-y-auto max-h-[700px]">
              <NotesList />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PersonalNotes;
