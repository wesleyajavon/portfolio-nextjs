"use client";

import { motion } from "framer-motion";

export function CreationWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 w-80 h-80 rounded-full border border-current"
          style={{
            transform: "translate(-50%, -50%)",
            borderColor: i % 2 === 0 ? "rgba(0, 255, 255, 0.2)" : "rgba(16, 185, 129, 0.2)",
          }}
          animate={{
            scale: [0.2, 1.8, 0.2],
            opacity: [0.6, 0, 0.6],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            delay: i * 1.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
