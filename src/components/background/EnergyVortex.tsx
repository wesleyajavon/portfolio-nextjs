"use client";

import { motion } from "framer-motion";

// Composant de vortex énergétique
export function EnergyVortex() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-1/2 w-96 h-96 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          background: "conic-gradient(from 0deg, transparent, rgba(0, 255, 255, 0.3), transparent, rgba(16, 185, 129, 0.3), transparent)",
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute left-1/2 top-1/2 w-64 h-64 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          background: "conic-gradient(from 180deg, transparent, rgba(139, 92, 246, 0.4), transparent, rgba(245, 158, 11, 0.4), transparent)",
        }}
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
