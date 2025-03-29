
"use client";
import { useEffect, useRef } from "react";
import { FluidSimulation } from "./fluid-simulation/simulation";
import { SimulationConfig, ColorRGB } from "./fluid-simulation/types";

// Component props interface
interface SplashCursorProps {
  SIM_RESOLUTION?: number;
  DYE_RESOLUTION?: number;
  CAPTURE_RESOLUTION?: number;
  DENSITY_DISSIPATION?: number;
  VELOCITY_DISSIPATION?: number;
  PRESSURE?: number;
  PRESSURE_ITERATIONS?: number;
  CURL?: number;
  SPLAT_RADIUS?: number;
  SPLAT_FORCE?: number;
  SHADING?: boolean;
  COLOR_UPDATE_SPEED?: number;
  BACK_COLOR?: ColorRGB;
  TRANSPARENT?: boolean;
  className?: string;
  minimal?: boolean; // Added new prop for minimal mode
}

function SplashCursor({
  SIM_RESOLUTION = 64, // Reduced from 128 to 64
  DYE_RESOLUTION = 512, // Reduced from 1440 to 512
  CAPTURE_RESOLUTION = 256, // Reduced from 512 to 256
  DENSITY_DISSIPATION = 5, // Increased from 3.5 to 5 for faster fade
  VELOCITY_DISSIPATION = 3.5, // Increased from 2 to 3.5
  PRESSURE = 0.05, // Reduced from 0.1 to 0.05
  PRESSURE_ITERATIONS = 12, // Reduced from 20 to 12
  CURL = 1.5, // Reduced from 3 to 1.5
  SPLAT_RADIUS = 0.15, // Reduced from 0.2 to 0.15
  SPLAT_FORCE = 3000, // Reduced from 6000 to 3000
  SHADING = false, // Changed from true to false for more minimal look
  COLOR_UPDATE_SPEED = 5, // Reduced from 10 to 5
  BACK_COLOR = { r: 0, g: 0, b: 0 }, // Default black background
  TRANSPARENT = true,
  className = "fixed top-0 left-0 w-full h-full pointer-events-none z-0",
  minimal = false, // Default not minimal
}: SplashCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Apply minimal settings if minimal prop is true
    const config: SimulationConfig = {
      SIM_RESOLUTION: minimal ? Math.min(SIM_RESOLUTION, 32) : SIM_RESOLUTION,
      DYE_RESOLUTION: minimal ? Math.min(DYE_RESOLUTION, 256) : DYE_RESOLUTION,
      CAPTURE_RESOLUTION: minimal ? Math.min(CAPTURE_RESOLUTION, 128) : CAPTURE_RESOLUTION,
      DENSITY_DISSIPATION: minimal ? Math.max(DENSITY_DISSIPATION, 6) : DENSITY_DISSIPATION,
      VELOCITY_DISSIPATION: minimal ? Math.max(VELOCITY_DISSIPATION, 4) : VELOCITY_DISSIPATION,
      PRESSURE: minimal ? Math.min(PRESSURE, 0.03) : PRESSURE,
      PRESSURE_ITERATIONS: minimal ? Math.min(PRESSURE_ITERATIONS, 8) : PRESSURE_ITERATIONS,
      CURL: minimal ? Math.min(CURL, 0.8) : CURL,
      SPLAT_RADIUS: minimal ? Math.min(SPLAT_RADIUS, 0.1) : SPLAT_RADIUS,
      SPLAT_FORCE: minimal ? Math.min(SPLAT_FORCE, 2000) : SPLAT_FORCE,
      SHADING: minimal ? false : SHADING,
      COLOR_UPDATE_SPEED: minimal ? Math.min(COLOR_UPDATE_SPEED, 3) : COLOR_UPDATE_SPEED,
      PAUSED: false,
      BACK_COLOR,
      TRANSPARENT,
    };

    // Initialize the fluid simulation
    try {
      const simulation = new FluidSimulation(canvas, config);
      
      // Start the animation loop
      simulation.start();
      
      // Clean up on unmount
      return () => {
        // No explicit cleanup needed as animation frame will stop when component unmounts
      };
    } catch (error) {
      console.error("Failed to initialize fluid simulation:", error);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    SIM_RESOLUTION,
    DYE_RESOLUTION,
    CAPTURE_RESOLUTION,
    DENSITY_DISSIPATION,
    VELOCITY_DISSIPATION,
    PRESSURE,
    PRESSURE_ITERATIONS,
    CURL,
    SPLAT_RADIUS,
    SPLAT_FORCE,
    SHADING,
    COLOR_UPDATE_SPEED,
    BACK_COLOR,
    TRANSPARENT,
    minimal,
  ]);

  return (
    <div className={className} style={{ opacity: minimal ? 0.4 : 0.8 }}>
      <canvas ref={canvasRef} id="fluid" className="w-full h-full" />
    </div>
  );
}

export { SplashCursor };
