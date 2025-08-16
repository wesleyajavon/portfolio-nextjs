"use client";

import { motion } from "framer-motion";

// Composant de ligne de flux de données
export function DataFlowLine({ index }: { index: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${(index * 6.5) % 100}%`,
        top: "-50px",
        width: `${((index * 1.3) % 3) + 1}px`,
        height: `${((index * 2.7) % 50) + 30}px`,
        background: `linear-gradient(to bottom, rgba(0, 255, 255, 0.5), transparent)`,
        filter: "blur(0.5px)",
      }}
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ 
        scaleY: [0, 1, 0],
        opacity: [0, 1, 0],
        x: [0, Math.sin(index * 0.5) * 15, 0],
      }}
      transition={{
        duration: 8 + (index * 0.3),
        delay: index * 0.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
