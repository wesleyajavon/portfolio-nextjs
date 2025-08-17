"use client";

import { motion } from "framer-motion";

// Composant d'ondes sonores animées
export function SoundWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 w-96 h-96 rounded-full border-2 border-cyan-400/30"
          style={{
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [0.1, 1.5, 0.1],
            opacity: [0.8, 0, 0.8],
            borderColor: [
              "rgba(0, 255, 255, 0.3)",
              "rgba(16, 185, 129, 0.3)",
              "rgba(6, 182, 212, 0.3)",
            ],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
