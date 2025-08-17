import { useState } from "react";
import { useAuth } from "../contextAPI/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle } from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!name.trim() || !email.trim()) {
      setError("Please fill in both name and email.");
      return;
    }

    setError("");
    login({ id: "1", name, email });
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300">
      <Card className="w-full max-w-md shadow-xl rounded-2xl bg-white/90 backdrop-blur-md p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">
            Login
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {error && (
            <div className="flex items-center gap-2 text-red-600 bg-red-100 p-2 rounded-md text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{error}</span>
            </div>
          )}

          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          <Button
            onClick={handleLogin}
            className="w-full rounded-full"
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
