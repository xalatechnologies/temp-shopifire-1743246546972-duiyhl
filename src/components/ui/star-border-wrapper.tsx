
import React from 'react';
import { cn } from "@/lib/utils";
import { StarBorder } from './star-border';

// Add inline styles for animations since we can't modify tailwind.config.ts
const starMovementStyles = `
  @keyframes star-movement-bottom {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  @keyframes star-movement-top {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  .animate-star-movement-bottom {
    animation: star-movement-bottom 6s linear infinite;
  }
  
  .animate-star-movement-top {
    animation: star-movement-top 6s linear infinite;
  }
`;

interface StarBorderWrapperProps {
  children: React.ReactNode;
  color?: string;
  speed?: string;
  className?: string;
  as?: React.ElementType;
  [key: string]: any;
}

const StarBorderWrapper = ({ 
  children, 
  color,
  speed,
  className,
  as,
  ...props 
}: StarBorderWrapperProps) => {
  return (
    <>
      <style>{starMovementStyles}</style>
      <StarBorder 
        as={as} 
        color={color} 
        speed={speed} 
        className={className}
        {...props}
      >
        {children}
      </StarBorder>
    </>
  );
};

export { StarBorderWrapper };
