"use client";

import { motion } from "framer-motion";

// Composant de particule de données
export function DataParticle({ index }: { index: number }) {
  const colors = ["#00ffff", "#10b981", "#06b6d4", "#8b5cf6", "#f59e0b", "#ec4899", "#22c55e"];
  
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{
        left: `${(index * 2.8) % 100}%`,
        top: "-15px",
        backgroundColor: colors[index % 7],
      }}
      initial={{ y: 0, opacity: 0, scale: 0 }}
      animate={{ 
        y: [0, 250],
        opacity: [0, 1, 0],
        scale: [0, 2, 0],
        x: [0, Math.sin(index * 0.3) * 25, 0],
      }}
      transition={{
        duration: 10 + (index * 0.2),
        delay: index * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
