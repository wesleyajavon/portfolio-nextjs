"use client";

import { motion } from "framer-motion";

// Composant de particule orbitale de technologie
export function OrbitalTechParticle({ particleIndex, iconColor }: { 
  particleIndex: number; 
  iconColor: string; 
}) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{
        backgroundColor: iconColor,
        left: "50%",
        top: "50%",
        marginLeft: "-0.5px",
        marginTop: "-0.5px",
      }}
      animate={{
        x: [0, Math.cos(particleIndex * 2 * Math.PI / 4) * 35],
        y: [0, Math.sin(particleIndex * 2 * Math.PI / 4) * 35],
        opacity: [0, 1, 0],
        scale: [0, 1.8, 0],
      }}
      transition={{
        duration: 7,
        delay: particleIndex * 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
