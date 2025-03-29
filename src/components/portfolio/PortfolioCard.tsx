import { Calendar, Eye, ExternalLink, Heart, Monitor, Tag, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { PortfolioItem } from "@/data/portfolio/types";

interface PortfolioCardProps {
  project: PortfolioItem;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

export const PortfolioCard = ({ project, index }: PortfolioCardProps) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      key={project.id} 
      className="h-full flex" // Changed to flex and removed fixed height for better alignment
    >
      <div className="relative w-full rounded-lg flex flex-col shadow-lg">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={1}
        />
        
        <div className="relative h-52 overflow-hidden rounded-t-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex justify-between items-center">
              <Badge
                className={`
                  ${project.status === "completed" ? "bg-fifa-green text-black" : 
                    project.status === "ongoing" ? "bg-fifa-blue" : 
                    "bg-fifa-gold text-black"}
                `}
              >
                {project.status === "completed" ? "Completed" : 
                 project.status === "ongoing" ? "In Progress" : 
                 "Upcoming"}
              </Badge>
              <span className="text-white text-sm font-medium flex items-center gap-1.5">
                <Tag size={14} />
                {project.industry}
              </span>
            </div>
          </div>
        </div>
        
        <div className="p-5 rounded-b-lg bg-background/50 backdrop-blur-sm flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-2 group-hover:text-fifa-green transition-colors line-clamp-1">{project.title}</h3>
          
          <p className="text-sm text-foreground/60 mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex justify-between text-sm text-foreground/70 mb-4">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>{project.completionDate}</span>
            </div>
            {project.status === "completed" && (
              <div className="flex items-center">
                <Heart size={14} className="mr-1 text-fifa-blue" />
                <span>{project.results}</span>
              </div>
            )}
          </div>
          
          {project.technologies && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-xs py-1 px-2 bg-white/5 rounded-full text-foreground/70">{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs py-1 px-2 bg-white/5 rounded-full text-foreground/70">+{project.technologies.length - 3}</span>
                )}
              </div>
            </div>
          )}
          
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-foreground/70 flex items-center">
                <Zap size={14} className="mr-1" /> Conversion Impact
              </span>
              <span className="font-medium flex items-center">
                {project.conversionRate > 0 ? (
                  <>
                    <Star className="h-3 w-3 mr-1 text-fifa-gold" />
                    {project.conversionRate}/{project.maxConversion}
                  </>
                ) : "Not yet measured"}
              </span>
            </div>
            {project.conversionRate > 0 && (
              <Progress 
                value={(project.conversionRate / project.maxConversion) * 100} 
                className="h-2 bg-muted"
                indicatorClassName={cn(
                  project.conversionRate >= 4.5 ? "bg-fifa-green" : 
                  project.conversionRate >= 3.5 ? "bg-fifa-blue" : 
                  "bg-fifa-gold"
                )}
              />
            )}
          </div>
          
          <div className="mt-auto">
            <Button
              className={`w-full ${
                project.status === "completed"
                  ? "bg-fifa-green hover:bg-fifa-green/90 text-black"
                  : project.status === "ongoing"
                  ? "bg-fifa-blue hover:bg-fifa-blue/90"
                  : "bg-fifa-gold hover:bg-fifa-gold/90 text-black"
              }`}
              asChild
            >
              <Link to={`/portfolio/${project.id}`} className="flex items-center justify-center">
                {project.status === "completed" ? (
                  <>View Case Study <ExternalLink className="ml-2 h-4 w-4" /></>
                ) : project.status === "ongoing" ? (
                  <>Track Progress <Monitor className="ml-2 h-4 w-4" /></>
                ) : (
                  <>Project Details <Eye className="ml-2 h-4 w-4" /></>
                )}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
