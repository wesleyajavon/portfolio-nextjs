"use client";

import { motion } from "framer-motion";

// Composant de particule de données technique
export function DataParticle({ index }: { index: number }) {
  const colors = [
    'rgba(0, 255, 255, 0.6)',
    'rgba(16, 185, 129, 0.5)',
    'rgba(139, 92, 246, 0.4)',
    'rgba(236, 72, 153, 0.5)',
    'rgba(245, 158, 11, 0.4)'
  ];
  
  const shadowColors = [
    'rgba(0, 255, 255, 0.3)',
    'rgba(16, 185, 129, 0.3)',
    'rgba(139, 92, 246, 0.3)',
    'rgba(236, 72, 153, 0.3)',
    'rgba(245, 158, 11, 0.3)'
  ];

  return (
    <motion.div
      className="absolute rounded-sm"
      style={{
        left: `${(index * 5) % 100}%`,
        top: `${(index * 5) % 100}%`,
        width: `${((index * 0.7) % 3) + 1}px`,
        height: `${((index * 0.7) % 3) + 1}px`,
        backgroundColor: colors[index % 5],
        filter: 'blur(0.3px)',
        boxShadow: `0 0 ${6 + (index % 3) * 3}px ${shadowColors[index % 5]}`
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1.2, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8 + (index * 0.2),
        delay: index * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
