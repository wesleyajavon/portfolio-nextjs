"use client";

import { motion } from "framer-motion";

export function ParticleGrid() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: (i * 7.2) % 100,
    y: (i * 5.8) % 100,
    size: (i % 3) + 1,
    delay: i * 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
