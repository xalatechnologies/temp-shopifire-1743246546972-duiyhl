
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({ 
  title, 
  description, 
  className = "",
  align = "left" 
}: SectionTitleProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-20 h-1 bg-fifa-green"></span>
      </h2>
      {description && (
        <p className="text-foreground/70 max-w-2xl mt-4">
          {description}
        </p>
      )}
    </motion.div>
  );
}
