
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { getPortfolioItemById } from "@/data/portfolio";

// Import the new component files
import ProjectHeader from "@/components/portfolio/ProjectHeader";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
import ProjectMainContent from "@/components/portfolio/ProjectMainContent";
import ProjectSidebar from "@/components/portfolio/ProjectSidebar";
import ProjectLoading from "@/components/portfolio/ProjectLoading";

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const project = id ? getPortfolioItemById(parseInt(id)) : undefined;
  
  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Shopify Development Case Study`;
    } else if (id) {
      toast({
        title: "Project Not Found",
        description: "The requested project couldn't be found.",
        variant: "destructive"
      });
      navigate("/portfolio");
    }
  }, [id, project, navigate, toast]);
  
  if (!project) {
    return <ProjectLoading />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <ProjectHeader project={project} />
        <ProjectGallery project={project} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <ProjectMainContent project={project} />
          <ProjectSidebar project={project} />
        </div>
      </div>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default PortfolioDetail;
