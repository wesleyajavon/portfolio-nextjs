"use client";

import { motion } from "framer-motion";

// Composant d'onde secondaire
export function SecondaryWave({ index }: { index: number }) {
  const colors = [
    "rgba(236, 72, 153, 0.08)",
    "rgba(22, 197, 94, 0.06)",
    "rgba(6, 182, 212, 0.05)"
  ];

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-60 h-60 rounded-full border border-current"
      style={{
        transform: "translate(-50%, -50%)",
        borderColor: colors[index % 3],
      }}
      initial={{ scale: 0.6, opacity: 0, rotate: 360 }}
      animate={{ 
        scale: [0.6, 1.8, 0.6],
        opacity: [0, 0.5, 0],
        rotate: [360, 180, 0],
      }}
      transition={{
        duration: 15 + index * 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
