
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { PortfolioItem } from "@/data/portfolio/types";
import { motion } from "framer-motion";

interface PortfolioGridProps {
  projects: PortfolioItem[];
}

const PortfolioGrid = ({ projects }: PortfolioGridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project, index) => (
        <PortfolioCard key={project.id} project={project} index={index} />
      ))}
    </motion.div>
  );
};

export default PortfolioGrid;
