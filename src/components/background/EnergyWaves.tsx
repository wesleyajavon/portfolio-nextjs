"use client";

import { motion } from "framer-motion";

export function EnergyWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 w-96 h-96 rounded-full border-2 border-current"
          style={{
            transform: "translate(-50%, -50%)",
            borderColor: i % 2 === 0 ? "rgba(0, 255, 255, 0.15)" : "rgba(16, 185, 129, 0.12)",
          }}
          animate={{
            scale: [0.3, 2, 0.3],
            opacity: [0.6, 0, 0.6],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 8 + i * 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
