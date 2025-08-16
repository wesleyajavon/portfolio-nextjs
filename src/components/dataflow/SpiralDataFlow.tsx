"use client";

import { motion } from "framer-motion";

// Composant de flux de données en spirale
export function SpiralDataFlow({ index }: { index: number }) {
  const colors = ["#00ffff", "#10b981", "#06b6d4", "#8b5cf6"];
  
  return (
    <motion.div
      className="absolute w-0.5 h-0.5 rounded-full"
      style={{
        left: "50%",
        top: "50%",
        backgroundColor: colors[index % 4],
      }}
      animate={{
        x: [0, Math.cos(index * 0.8) * 150],
        y: [0, Math.sin(index * 0.8) * 150],
        opacity: [0, 1, 0],
        scale: [0, 3, 0],
      }}
      transition={{
        duration: 15,
        delay: index * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
