
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Badge } from "@/components/ui/badge";
import { ServiceData } from "@/data/services";

interface ServiceCardProps extends ServiceData {
  index: number;
}

const ServiceCard = ({
  icon,
  title,
  description,
  category,
  categoryColor,
  slug,
  index
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1
      }}
      viewport={{
        once: true
      }}
    >
      <div className="relative h-full min-h-[15rem] list-none">
        <div className="relative h-full rounded-lg border-[0.5px] border-border p-2 md:p-3">
          <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={1} />
          <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-md border-[0.5px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-[0.5px] border-border bg-muted/50 p-2.5 text-primary">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              
              <Badge 
                variant={categoryColor as any}
                className={cn(
                  "flex-shrink-0 text-xs font-medium shadow-sm"
                )}
              >
                {category}
              </Badge>
            </div>
            
            <p className="text-foreground/70 mt-4">{description}</p>
            
            <div className="mt-auto pt-4 flex items-center text-fifa-blue">
              <Link to={`/services/${slug}`} className="text-sm font-medium flex items-center gap-1.5 group">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
