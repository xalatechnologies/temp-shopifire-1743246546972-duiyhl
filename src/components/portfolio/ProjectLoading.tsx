
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ProjectLoading = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Loading project details...</h2>
      <Button onClick={() => navigate("/portfolio")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
      </Button>
    </div>
  );
};

export default ProjectLoading;
