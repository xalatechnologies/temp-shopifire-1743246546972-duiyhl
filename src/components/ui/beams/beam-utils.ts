
import { Beam, BeamIntensity } from "./types";

export function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height * 1.5 - height * 0.25,
        width: 30 + Math.random() * 60,
        length: height * 2.5,
        angle: angle,
        speed: 0.6 + Math.random() * 1.2,
        opacity: 0.12 + Math.random() * 0.16,
        hue: 190 + Math.random() * 70,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
    };
}

export function resetBeam(beam: Beam, index: number, totalBeams: number, canvasWidth: number, canvasHeight: number): Beam {
    const column = index % 3;
    const spacing = canvasWidth / 3;

    beam.y = canvasHeight + 100;
    beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
    beam.width = 100 + Math.random() * 100;
    beam.speed = 0.5 + Math.random() * 0.4;
    beam.hue = 190 + (index * 70) / totalBeams;
    beam.opacity = 0.2 + Math.random() * 0.1;
    return beam;
}

export function getOpacityModifier(intensity: BeamIntensity): number {
    const opacityMap = {
        subtle: 0.7,
        medium: 0.85,
        strong: 1,
    };
    return opacityMap[intensity];
}
