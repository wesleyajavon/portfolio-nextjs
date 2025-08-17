"use client";

import { motion } from "framer-motion";

export function TechParticles() {
  const techIcons = [
    { symbol: "⚛️", x: 8, y: 15, color: "#00ffff", size: 1.2 },
    { symbol: "⚡", x: 92, y: 20, color: "#10b981", size: 1.1 },
    { symbol: "🔧", x: 15, y: 80, color: "#06b6d4", size: 1.3 },
    { symbol: "🚀", x: 85, y: 85, color: "#8b5cf6", size: 1.0 },
    { symbol: "💻", x: 50, y: 12, color: "#f59e0b", size: 1.4 },
    { symbol: "🌐", x: 45, y: 90, color: "#ec4899", size: 1.1 },
    { symbol: "📱", x: 95, y: 65, color: "#22c55e", size: 1.2 },
    { symbol: "🎨", x: 25, y: 45, color: "#06b6d4", size: 1.3 },
    { symbol: "🔒", x: 75, y: 30, color: "#8b5cf6", size: 1.0 },
    { symbol: "📊", x: 35, y: 95, color: "#f59e0b", size: 1.1 },
    { symbol: "⚙️", x: 65, y: 18, color: "#ec4899", size: 1.2 },
    { symbol: "🔮", x: 18, y: 70, color: "#22c55e", size: 1.3 },
    { symbol: "🎯", x: 88, y: 55, color: "#06b6d4", size: 1.1 },
    { symbol: "💡", x: 42, y: 25, color: "#8b5cf6", size: 1.4 },
    { symbol: "🌟", x: 72, y: 75, color: "#f59e0b", size: 1.2 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {techIcons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-lg"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            filter: `drop-shadow(0 0 12px ${icon.color})`,
            fontSize: `${icon.size}rem`,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 12, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 7 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {icon.symbol}
        </motion.div>
      ))}
    </div>
  );
}
