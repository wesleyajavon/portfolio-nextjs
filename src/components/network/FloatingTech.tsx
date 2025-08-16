"use client";

import { motion } from "framer-motion";

// Composant de technologie flottante
export function FloatingTech({ tech, techIndex, nodeColor, nodeId }: { 
  tech: string; 
  techIndex: number; 
  nodeColor: string; 
  nodeId: number; 
}) {
  return (
    <motion.div
      className="absolute text-xs font-mono text-white/60 whitespace-nowrap"
      style={{
        left: "30px",
        top: `${(techIndex + 1) * 18}px`,
        color: nodeColor,
        opacity: 0.7,
      }}
      animate={{
        opacity: [0.3, 0.8, 0.3],
        x: [0, 8, 0],
      }}
      transition={{
        duration: 3 + techIndex * 0.5,
        delay: nodeId * 0.2 + techIndex * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {tech}
    </motion.div>
  );
}
