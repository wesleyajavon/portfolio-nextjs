"use client";

import { motion } from "framer-motion";

export function FloatingCodeLine({ index, code }: { index: number; code: string }) {
  return (
    <motion.div
      className="absolute font-mono text-xs text-white/30"
      style={{
        left: `${(index * 12.5) % 95}%`,
        top: `${(index * 12.5) % 98}%`,
        transform: `rotate(${index * 15}deg)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 0.3, 0],
      }}
      transition={{
        duration: 20 + index * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {code}
    </motion.div>
  );
}
