
import { useState } from "react";
import { motion } from "framer-motion";
import { PortfolioItem } from "@/data/portfolio/types";

interface ProjectGalleryProps {
  project: PortfolioItem;
}

const ProjectGallery = ({ project }: ProjectGalleryProps) => {
  const [activeImage, setActiveImage] = useState<string>(project.image);
  
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
    <motion.div 
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      <div className="md:col-span-2 rounded-lg overflow-hidden h-[400px] border border-border">
        <img 
          src={activeImage} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto max-h-[400px] no-scrollbar">
        <button 
          onClick={() => setActiveImage(project.image)}
          className={`rounded-lg overflow-hidden border-2 min-w-[150px] h-[100px] md:h-[120px] transition-all ${activeImage === project.image ? 'border-fifa-green' : 'border-transparent'}`}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </button>
        
        {project.gallery?.map((img, index) => (
          <button 
            key={index}
            onClick={() => setActiveImage(img)}
            className={`rounded-lg overflow-hidden border-2 min-w-[150px] h-[100px] md:h-[120px] transition-all ${activeImage === img ? 'border-fifa-green' : 'border-transparent'}`}
          >
            <img 
              src={img} 
              alt={`${project.title} - Gallery ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectGallery;
