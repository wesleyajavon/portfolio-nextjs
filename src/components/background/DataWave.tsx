"use client";

import { motion } from "framer-motion";

export function DataWave({ index }: { index: number }) {
  const colors = [
    "rgba(0, 255, 255, 0.06)",
    "rgba(16, 185, 129, 0.05)",
    "rgba(139, 92, 246, 0.04)"
  ];

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 rounded-full border border-current"
      style={{
        transform: "translate(-50%, -50%)",
        width: `${200 + index * 150}px`,
        height: `${200 + index * 150}px`,
        borderColor: colors[index % 3],
        borderWidth: `${1 + index * 0.3}px`
      }}
      initial={{ scale: 0.4, opacity: 0 }}
      animate={{ 
        scale: [0.4, 1.4, 0.4],
        opacity: [0, 0.3, 0],
      }}
      transition={{
        duration: 20 + index * 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
