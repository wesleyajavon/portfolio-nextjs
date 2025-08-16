"use client";

import { motion } from "framer-motion";

// Composant d'onde tertiaire
export function TertiaryWave({ index }: { index: number }) {
  const colors = [
    "rgba(168, 85, 247, 0.06)",
    "rgba(251, 191, 36, 0.04)"
  ];

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-40 h-40 rounded-full border border-current"
      style={{
        transform: "translate(-50%, -50%)",
        borderColor: colors[index % 2],
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [0.8, 2, 0.8],
        opacity: [0, 0.3, 0],
        x: [0, 20, 0],
        y: [0, -15, 0],
      }}
      transition={{
        duration: 20 + index * 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
