
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Globe, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { PortfolioItem } from "@/data/portfolio/types";

interface ProjectHeaderProps {
  project: PortfolioItem;
}

const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      {/* Back navigation */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Button variant="outline" size="sm" asChild>
          <Link to="/portfolio" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>
      </motion.div>
      
      {/* Project header */}
      <motion.div 
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
          <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
          <Badge
            className={cn(
              "text-sm py-1 px-3 h-7",
              project.status === "completed" ? "bg-fifa-green text-black" : 
              project.status === "ongoing" ? "bg-fifa-blue" : 
              "bg-fifa-gold text-black"
            )}
          >
            {project.status === "completed" ? "Completed" : 
            project.status === "ongoing" ? "In Progress" : 
            "Upcoming"}
          </Badge>
        </div>
        
        <div className="flex flex-wrap gap-4 text-sm text-foreground/70 mb-6">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2" />
            {project.completionDate}
          </div>
          <div className="flex items-center">
            <Tag size={16} className="mr-2" />
            {project.industry}
          </div>
          {project.clientName && (
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              {project.clientName}
            </div>
          )}
          {project.clientWebsite && (
            <div className="flex items-center">
              <Globe size={16} className="mr-2" />
              <a 
                href={project.clientWebsite} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fifa-blue hover:text-fifa-blue/80 underline transition-colors"
              >
                Visit Website
              </a>
            </div>
          )}
        </div>
        
        <p className="text-lg max-w-3xl">{project.description}</p>
      </motion.div>
    </>
  );
};

export default ProjectHeader;
