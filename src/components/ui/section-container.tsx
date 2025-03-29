
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionVariant = "default" | "alternate" | "primary" | "dark";

export interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: SectionVariant;
  fullWidth?: boolean;
  className?: string;
  innerClassName?: string;
  noPadding?: boolean;
}

export function SectionContainer({
  children,
  variant = "default",
  fullWidth = false,
  className,
  innerClassName,
  noPadding = false,
  ...props
}: SectionContainerProps) {
  const containerVariants = {
    default: "bg-background",
    alternate: "bg-card/5",
    primary: "bg-gradient-to-r from-fifa-blue/5 to-fifa-green/5",
    dark: "bg-gradient-to-br from-slate-900 to-slate-800 text-white",
  };

  const renderDecorativeElements = () => {
    if (variant === "primary") {
      return (
        <>
          <div className="absolute top-0 right-0 w-64 h-64 bg-fifa-blue/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-fifa-green/10 rounded-full blur-3xl -z-10"></div>
        </>
      );
    }
    
    if (variant === "alternate") {
      return (
        <>
          <div className="absolute top-20 left-20 w-72 h-72 bg-fifa-gold/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-10 w-64 h-64 bg-fifa-blue/5 rounded-full blur-3xl -z-10"></div>
        </>
      );
    }
    
    return null;
  };

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        containerVariants[variant],
        !noPadding && "py-12 md:py-16",
        className
      )}
      {...props}
    >
      {renderDecorativeElements()}
      <div className={cn(
        !fullWidth && "container mx-auto px-4",
        innerClassName
      )}>
        {children}
      </div>
    </section>
  );
}
