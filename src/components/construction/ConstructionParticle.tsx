"use client";

import { motion } from "framer-motion";

// Composant de particule de construction
export function ConstructionParticle({ index }: { index: number }) {
  const colors = ["#00ffff", "#10b981", "#06b6d4", "#8b5cf6", "#f59e0b"];
  
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full"
      style={{
        left: `${(index * 5) % 100}%`,
        top: `${(index * 4.5) % 100}%`,
        backgroundColor: colors[index % 5],
        filter: `drop-shadow(0 0 6px ${colors[index % 5]})`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1.2, 0],
        y: [0, -8, 0],
      }}
      transition={{
        duration: 5 + (index * 0.2),
        delay: index * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
