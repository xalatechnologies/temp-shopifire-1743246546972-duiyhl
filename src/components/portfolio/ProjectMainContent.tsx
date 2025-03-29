
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle } from "lucide-react";
import { PortfolioItem } from "@/data/portfolio/types";
import { Award } from "lucide-react";

interface ProjectMainContentProps {
  project: PortfolioItem;
}

const ProjectMainContent = ({ project }: ProjectMainContentProps) => {
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
      className="lg:col-span-2 space-y-10"
    >
      {/* Challenge & Solution */}
      {(project.challenge || project.solution) && (
        <motion.div variants={fadeIn} className="space-y-6">
          {project.challenge && (
            <div>
              <h2 className="text-2xl font-bold mb-3 flex items-center">
                <AlertCircle className="mr-2 h-5 w-5 text-fifa-gold" />
                The Challenge
              </h2>
              <p className="text-foreground/80">{project.challenge}</p>
            </div>
          )}
          
          {project.solution && (
            <div>
              <h2 className="text-2xl font-bold mb-3 flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-fifa-green" />
                Our Solution
              </h2>
              <p className="text-foreground/80">{project.solution}</p>
            </div>
          )}
        </motion.div>
      )}
      
      {/* Key Features */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <motion.div variants={fadeIn}>
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-fifa-green shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
      
      {/* Testimonial */}
      {project.testimonial && (
        <motion.div variants={fadeIn}>
          <blockquote className="bg-card/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
            <Award className="h-8 w-8 text-fifa-gold mb-4" />
            <p className="text-lg italic mb-4">{project.testimonial.quote}</p>
            <footer className="font-medium">— {project.testimonial.author}</footer>
          </blockquote>
        </motion.div>
      )}
      
      {/* Results Statistics */}
      {project.stats && project.stats.length > 0 && (
        <motion.div variants={fadeIn}>
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.stats.map((stat, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-white/10 p-4 rounded-lg text-center">
                <p className="text-2xl md:text-3xl font-bold text-fifa-green mb-1">{stat.value}</p>
                <p className="text-sm text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectMainContent;
