"use client";

import { motion } from "framer-motion";

export function TechSymbol({ index, symbol, color }: { 
  index: number; 
  symbol: string; 
  color: string; 
}) {
  return (
    <motion.div
      className="absolute text-2xl"
      style={{
        left: `${(index * 25) % 100}%`,
        top: `${(index * 25) % 100}%`,
        color,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 0.5, 0],
        scale: [0, 1.1, 0],
      }}
      transition={{
        duration: 12 + index * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {symbol}
    </motion.div>
  );
}
