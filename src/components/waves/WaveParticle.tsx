"use client";

import { motion } from "framer-motion";

// Composant de particule d'onde
export function WaveParticle({ index }: { index: number }) {
  const colors = ["#00ffff", "#10b981", "#06b6d4", "#8b5cf6", "#f59e0b"];
  
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{
        left: "50%",
        top: "50%",
        marginLeft: "-0.5px",
        marginTop: "-0.5px",
        backgroundColor: colors[index % 5],
      }}
      animate={{
        x: [0, Math.cos(index * 0.25) * 200],
        y: [0, Math.sin(index * 0.25) * 200],
        opacity: [0, 1, 0],
        scale: [0, 2, 0],
      }}
      transition={{
        duration: 12 + index * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
