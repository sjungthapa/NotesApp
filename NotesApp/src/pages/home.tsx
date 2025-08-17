import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { NotebookPen, School, Briefcase, User } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const goToPersonalNotes = () => navigate("/personalNotes");
  const goToSchoolNotes = () => navigate("/schoolNotes");
  const goToWorkNotes = () => navigate("/workNotes");
  const goToProfile = () => navigate("/profile");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300">
      <Card className="w-full max-w-md shadow-xl rounded-2xl bg-white/90 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800">
            Notes App 📝
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-center text-gray-600 mb-4">
            Welcome to the Notes App! Choose a section below:
          </p>

          <Button
            onClick={goToPersonalNotes}
            className="w-full flex items-center justify-center gap-2 rounded-full"
          >
            <NotebookPen className="w-4 h-4" />
            Personal Notes
          </Button>

          <Button
            onClick={goToWorkNotes}
            className="w-full flex items-center justify-center gap-2 rounded-full"
            variant="secondary"
          >
            <Briefcase className="w-4 h-4" />
            Work Notes
          </Button>

          <Button
            onClick={goToSchoolNotes}
            className="w-full flex items-center justify-center gap-2 rounded-full"
            variant="outline"
          >
            <School className="w-4 h-4" />
            School Notes
          </Button>

          <Button
            onClick={goToProfile}
            className="w-full flex items-center justify-center gap-2 rounded-full"
            variant="destructive"
          >
            <User className="w-4 h-4" />
            Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
