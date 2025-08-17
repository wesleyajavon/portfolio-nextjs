"use client";

import { motion } from "framer-motion";

// Composant de particules de contact qui se connectent
export function ContactParticles() {
  const particles = [
    { symbol: "📧", x: 20, y: 30, color: "#00ffff" },
    { symbol: "💻", x: 80, y: 25, color: "#10b981" },
    { symbol: "🔗", x: 15, y: 70, color: "#06b6d4" },
    { symbol: "🌟", x: 75, y: 75, color: "#8b5cf6" },
    { symbol: "🚀", x: 50, y: 15, color: "#f59e0b" },
    { symbol: "⚡", x: 45, y: 80, color: "#ec4899" },
    { symbol: "🎯", x: 85, y: 50, color: "#22c55e" },
    { symbol: "💡", x: 25, y: 50, color: "#06b6d4" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            filter: `drop-shadow(0 0 10px ${particle.color})`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {particle.symbol}
        </motion.div>
      ))}
    </div>
  );
}
