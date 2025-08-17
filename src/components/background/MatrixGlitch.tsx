"use client";

import { motion } from "framer-motion";

// Composant d'effet de glitch matrix
export function MatrixGlitch() {
  const glitchLines = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: (i * 8) % 100,
    delay: i * 0.3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {glitchLines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
          style={{
            left: `${line.x}%`,
            top: `${(line.id * 8) % 100}%`,
            width: "200px",
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 2,
            delay: line.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
