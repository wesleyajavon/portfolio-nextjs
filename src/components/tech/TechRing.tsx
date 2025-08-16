"use client";

import { motion } from "framer-motion";

// Composant d'anneau de technologie
export function TechRing({ ringIndex, iconColor }: { 
  ringIndex: number; 
  iconColor: string; 
}) {
  return (
    <motion.div
      className="absolute rounded-full border border-current"
      style={{
        left: "50%",
        top: "50%",
        width: `${20 + ringIndex * 15}px`,
        height: `${20 + ringIndex * 15}px`,
        marginLeft: `${-(20 + ringIndex * 15) / 2}px`,
        marginTop: `${-(20 + ringIndex * 15) / 2}px`,
        borderColor: iconColor,
        opacity: 0.2 / ringIndex,
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.2 / ringIndex, 0, 0.2 / ringIndex],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8 + ringIndex * 2,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}
