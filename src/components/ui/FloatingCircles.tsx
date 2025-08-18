"use client";

import { motion } from "framer-motion";

interface FloatingCirclesProps {
  className?: string;
}

export function FloatingCircles({ className = "" }: FloatingCirclesProps) {
  const circles = [
    {
      size: 80,
      color: "rgba(0, 255, 255, 0.1)",
      x: 10,
      y: 20,
      delay: 0,
      duration: 8
    },
    {
      size: 120,
      color: "rgba(16, 185, 129, 0.08)",
      x: 85,
      y: 15,
      delay: 2,
      duration: 10
    },
    {
      size: 60,
      color: "rgba(139, 92, 246, 0.12)",
      x: 15,
      y: 80,
      delay: 4,
      duration: 12
    },
    {
      size: 100,
      color: "rgba(59, 130, 246, 0.1)",
      x: 80,
      y: 85,
      delay: 6,
      duration: 9
    },
    {
      size: 90,
      color: "rgba(245, 158, 11, 0.08)",
      x: 50,
      y: 10,
      delay: 1,
      duration: 11
    }
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: circle.size,
            height: circle.size,
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            background: circle.color,
            filter: "blur(1px)"
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: circle.duration,
            delay: circle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
