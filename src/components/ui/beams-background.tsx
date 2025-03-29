
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedGradientBackgroundProps } from "./beams/types";
import { CanvasRenderer } from "./beams/canvas-renderer";

export function BeamsBackground({
    className,
    children,
    intensity = "strong",
}: AnimatedGradientBackgroundProps) {
    return (
        <div
            className={cn(
                "relative min-h-screen w-full overflow-hidden bg-[#0f0f0f]", // Slightly lighter background
                className
            )}
        >
            <CanvasRenderer intensity={intensity} />

            <motion.div
                className="absolute inset-0 bg-neutral-950/5"
                animate={{
                    opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                    backdropFilter: "blur(50px)",
                }}
            />

            <div className="relative z-10 flex h-screen w-full items-center justify-center">
                {children || (
                    <div className="flex flex-col items-center justify-center gap-6 px-4 text-center">
                        <motion.h1
                            className="text-6xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Elegant
                            <br />
                            Lighting
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-2xl lg:text-3xl text-white/70 tracking-tighter"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Dynamic visual elements
                        </motion.p>
                    </div>
                )}
            </div>
        </div>
    );
}
