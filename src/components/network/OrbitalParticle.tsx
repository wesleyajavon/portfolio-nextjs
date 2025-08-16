"use client";

import { motion } from "framer-motion";

// Composant de particule orbitale
export function OrbitalParticle({ particleIndex, nodeColor }: { 
  particleIndex: number; 
  nodeColor: string; 
}) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{
        backgroundColor: nodeColor,
        left: "50%",
        top: "50%",
        marginLeft: "-0.5px",
        marginTop: "-0.5px",
      }}
      animate={{
        x: [0, Math.cos(particleIndex * 2 * Math.PI / 3) * 30],
        y: [0, Math.sin(particleIndex * 2 * Math.PI / 3) * 30],
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
      }}
      transition={{
        duration: 6,
        delay: particleIndex * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
