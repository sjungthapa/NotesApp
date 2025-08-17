import { useAuth } from "../contextAPI/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, User, Home } from "lucide-react";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300">
        <Card className="w-full max-w-md shadow-xl rounded-2xl bg-white/90 backdrop-blur-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-center text-gray-800">
              Not Logged In
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <p className="text-gray-600">Please log in to continue.</p>
            <Button
              onClick={() => navigate("/login")}
              className="w-full rounded-full"
            >
              Go to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300">
      <Card className="w-full max-w-md shadow-xl rounded-2xl bg-white/90 backdrop-blur-md">
        <CardHeader className="flex flex-col items-center">
          <User className="w-12 h-12 text-purple-600 mb-2" />
          <CardTitle className="text-2xl font-bold text-gray-800">
            Welcome, {user.name}!
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <Button
            variant="destructive"
            className="w-full flex items-center justify-center gap-2 rounded-full"
            onClick={logout}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 rounded-full"
            onClick={() => navigate("/")}
          >
            <Home className="w-4 h-4" />
            Go to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
