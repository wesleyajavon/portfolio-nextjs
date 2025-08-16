"use client";

import { motion } from "framer-motion";

// Composant de ligne de construction
export function ConstructionLine({ index }: { index: number }) {
  return (
    <motion.div
      className="absolute h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent"
      style={{
        left: "0%",
        top: `${(index * 12) % 100}%`,
        width: "100%",
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ 
        scaleX: [0, 1, 0],
        opacity: [0, 0.4, 0],
      }}
      transition={{
        duration: 6,
        delay: index * 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
