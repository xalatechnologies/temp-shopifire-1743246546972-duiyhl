
import React from 'react';
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { 
  ArrowRight, Box, CheckCircle, Lock, 
  Rocket, Settings, Sparkles, Zap 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";

const CollaborationProcess = () => {
  return (
    <div className="w-full px-0">
      <SectionTitle
        title="Our Collaboration Process"
        description="We follow a systematic approach to ensure successful projects and happy clients. Here's how we work together to achieve exceptional results."
      />

      <div className="w-full max-w-7xl mx-auto">
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-2">
          <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={<Rocket className="h-6 w-6 text-fifa-blue" />}
              title="Discovery"
              description="We start by understanding your business, goals, and requirements through detailed discussions."
              step="01"
            />
            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={<Zap className="h-6 w-6 text-fifa-green" />}
              title="Strategy & Planning"
              description="Together we develop a comprehensive strategy and detailed project plan with clear deliverables."
              step="02"
            />
            <GridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={<Lock className="h-6 w-6 text-fifa-gold" />}
              title="Design & Development"
              description="Our team crafts custom solutions that align with your brand and technical requirements."
              step="03"
            />
            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              icon={<CheckCircle className="h-6 w-6 text-fifa-blue" />}
              title="Testing & Quality Assurance"
              description="We rigorously test all deliverables to ensure they meet high standards of quality and performance."
              step="04"
            />
            <GridItem
              area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
              icon={<Sparkles className="h-6 w-6 text-fifa-green" />}
              title="Launch & Ongoing Support"
              description="We manage the deployment process and provide continuous support for your success."
              step="05"
            />
        </ul>
      </div>
    </div>
  );
};

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  step: string;
}

const GridItem = ({ area, icon, title, description, step }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-lg border-[0.5px] border-border p-2 md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={1}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-md border-[0.5px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="absolute right-4 top-4 text-muted-foreground/30 font-bold text-3xl opacity-70">{step}</div>
          
          <div className="relative flex flex-1 flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-fit rounded-full border-[0.5px] border-border bg-muted/50 p-2.5 text-primary">
                {icon}
              </div>
              <h3 className="text-xl md:text-2xl leading-tight font-semibold text-foreground">
                {title}
              </h3>
            </div>
            
            <p className="mt-2 text-muted-foreground">
              {description}
            </p>
          </div>
          
          <div className="mt-2 flex items-center text-fifa-blue">
            <span className="text-sm font-medium flex items-center gap-1.5 group">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CollaborationProcess;
