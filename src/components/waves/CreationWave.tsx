"use client";

import { motion } from "framer-motion";

// Composant d'onde de création principale
export function CreationWave({ index }: { index: number }) {
  const colors = [
    "rgba(0, 255, 255, 0.15)",
    "rgba(16, 185, 129, 0.12)",
    "rgba(139, 92, 246, 0.10)",
    "rgba(245, 158, 11, 0.08)"
  ];

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-80 h-80 rounded-full border-2 border-current"
      style={{
        transform: "translate(-50%, -50%)",
        borderColor: colors[index % 4],
      }}
      initial={{ scale: 0.3, opacity: 0, rotate: 0 }}
      animate={{ 
        scale: [0.3, 1.5, 0.3],
        opacity: [0, 0.7, 0],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 10 + index * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
