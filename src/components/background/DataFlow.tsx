"use client";

import { motion } from "framer-motion";

export function DataFlow() {
  const dataStreams = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: (i * 8.3) % 100,
    delay: i * 0.6,
    color: ["#00ffff", "#10b981", "#06b6d4", "#8b5cf6", "#f59e0b", "#ec4899"][i % 6],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {dataStreams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute w-1 h-24 rounded-full"
          style={{
            left: `${stream.x}%`,
            top: "-24px",
            background: `linear-gradient(to bottom, ${stream.color}, transparent)`,
            opacity: 0.3,
          }}
          animate={{
            y: [0, 140],
            opacity: [0, 0.7, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            delay: stream.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
