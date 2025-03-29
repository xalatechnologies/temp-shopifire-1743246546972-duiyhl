
import { motion } from "framer-motion";
import { Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { PortfolioItem } from "@/data/portfolio/types";

interface ProjectSidebarProps {
  project: PortfolioItem;
}

const ProjectSidebar = ({ project }: ProjectSidebarProps) => {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Technologies Used */}
      <motion.div variants={fadeIn} className="bg-card/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <Badge key={i} variant="outline" className="bg-white/5">
              {tech}
            </Badge>
          ))}
        </div>
      </motion.div>
      
      {/* Conversion Impact */}
      <motion.div variants={fadeIn} className="bg-card/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Conversion Impact</h3>
        {project.conversionRate > 0 ? (
          <>
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center">
                <Star className="h-5 w-5 text-fifa-gold mr-2" />
                Rating
              </span>
              <span className="font-bold">{project.conversionRate}/{project.maxConversion}</span>
            </div>
            <Progress 
              value={(project.conversionRate / project.maxConversion) * 100} 
              className="h-2 mb-4 bg-muted"
              indicatorClassName={cn(
                project.conversionRate >= 4.5 ? "bg-fifa-green" : 
                project.conversionRate >= 3.5 ? "bg-fifa-blue" : 
                "bg-fifa-gold"
              )}
            />
            <p className="text-sm text-foreground/70">
              {project.status === "completed" 
                ? "Based on actual performance metrics after launch" 
                : "Based on preliminary testing and projections"}
            </p>
          </>
        ) : (
          <div className="flex items-center text-foreground/70">
            <Clock className="h-5 w-5 mr-2" />
            Not yet measured
          </div>
        )}
      </motion.div>
      
      {/* Project Status */}
      <motion.div variants={fadeIn} className="bg-card/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Project Status</h3>
        <div className="flex items-center mb-3">
          <div 
            className={cn(
              "w-3 h-3 rounded-full mr-2",
              project.status === "completed" ? "bg-fifa-green" : 
              project.status === "ongoing" ? "bg-fifa-blue" : 
              "bg-fifa-gold"
            )}
          ></div>
          <span className="font-medium">
            {project.status === "completed" ? "Completed" : 
            project.status === "ongoing" ? "In Progress" : 
            "Upcoming"}
          </span>
        </div>
        <p className="text-sm text-foreground/70">
          {project.status === "completed" 
            ? `Completed in ${project.completionDate}` 
            : project.status === "ongoing"
            ? "Currently in active development"
            : `Scheduled to begin in ${project.completionDate}`}
        </p>
      </motion.div>
      
      {/* Call to Action */}
      <motion.div variants={fadeIn}>
        <Button 
          size="lg" 
          className="w-full bg-fifa-green hover:bg-fifa-green/90 text-black mb-3"
        >
          <Link to="/contact" className="flex items-center justify-center">
            Start Your Project
          </Link>
        </Button>
        
        {project.clientWebsite && (
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full"
            asChild
          >
            <a 
              href={project.clientWebsite} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectSidebar;
