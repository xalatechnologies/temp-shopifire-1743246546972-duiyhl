
import React from 'react';
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from './button';

// Add inline styles for animations
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

interface StarButtonProps extends ButtonProps {
  color?: string;
  speed?: string;
  wrapperClassName?: string;
}

export const StarButton = React.forwardRef<HTMLButtonElement, StarButtonProps>(
  ({ children, color, speed = "6s", className, wrapperClassName, ...props }, ref) => {
    const defaultColor = color || "hsl(var(--foreground))";
    
    return (
      <>
        <style>{starMovementStyles}</style>
        <div className={cn(
          "relative inline-block py-[1px] overflow-hidden rounded-[20px]",
          wrapperClassName
        )}>
          <div
            className="absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0 opacity-20 dark:opacity-70"
            style={{
              background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
              animationDuration: speed,
            }}
          />
          <div
            className="absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0 opacity-20 dark:opacity-70"
            style={{
              background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
              animationDuration: speed,
            }}
          />
          <div className="relative z-1 border text-foreground rounded-[20px] bg-gradient-to-b from-background/90 to-muted/90 border-border/40 dark:from-background dark:to-muted dark:border-border p-[6px]">
            <Button
              ref={ref}
              className={className}
              {...props}
            >
              {children}
            </Button>
          </div>
        </div>
      </>
    );
  }
);

StarButton.displayName = "StarButton";
