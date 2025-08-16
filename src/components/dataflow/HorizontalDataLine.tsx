"use client";

import { motion } from "framer-motion";

// Composant de ligne de données horizontale
export function HorizontalDataLine({ index }: { index: number }) {
  return (
    <motion.div
      className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
      style={{
        left: "0%",
        top: `${(index * 10) % 100}%`,
        width: "100%",
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ 
        scaleX: [0, 1, 0],
        opacity: [0, 0.6, 0],
        y: [0, Math.sin(index * 0.5) * 5, 0],
      }}
      transition={{
        duration: 10,
        delay: index * 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
