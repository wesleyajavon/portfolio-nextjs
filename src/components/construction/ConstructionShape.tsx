"use client";

import { motion } from "framer-motion";

// Composant de forme de construction
export function ConstructionShape({ index }: { index: number }) {
  const colors = ["#00ffff", "#10b981", "#06b6d4", "#8b5cf6", "#f59e0b"];
  
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${(index * 16) % 100}%`,
        top: `${(index * 18) % 100}%`,
        width: "8px",
        height: "8px",
        backgroundColor: colors[index % 5],
        borderRadius: index % 2 === 0 ? "50%" : "2px",
      }}
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ 
        opacity: [0, 0.8, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8,
        delay: index * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
