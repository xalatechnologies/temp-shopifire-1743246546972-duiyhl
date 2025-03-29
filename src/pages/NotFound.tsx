
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Gamepad2, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-fifa-darkblue">
      <div className="text-center px-4">
        <div className="flex justify-center mb-6">
          <Gamepad2 className="h-16 w-16 text-fifa-green" />
        </div>
        <h1 className="text-7xl font-bold mb-4 text-white">404</h1>
        <p className="text-2xl text-white/80 mb-6">Match Not Found</p>
        <p className="text-lg text-white/60 max-w-md mx-auto mb-8">
          Looks like this page is out of bounds. The referee has called for a restart from the home page.
        </p>
        <Button 
          size="lg"
          className="bg-fifa-green hover:bg-fifa-green/90 text-black font-medium"
          asChild
        >
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
