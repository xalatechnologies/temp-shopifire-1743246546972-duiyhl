
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const PortfolioHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center mb-12"
    >
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 relative">
          Our Portfolio
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-fifa-green"></span>
        </h2>
        <p className="text-foreground/70 max-w-lg mt-1">
          Discover our successful Shopify projects and case studies that have helped businesses scale their e-commerce operations.
        </p>
      </div>
      <Button variant="outline" className="hidden md:flex border-fifa-green/50 hover:bg-fifa-green/10 hover:border-fifa-green/80 transition-all duration-300" asChild>
        <Link to="/portfolio">
          View All Projects <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </motion.div>
  );
};
