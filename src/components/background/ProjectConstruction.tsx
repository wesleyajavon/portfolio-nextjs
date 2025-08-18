"use client";

import { motion } from "framer-motion";

export function ProjectConstruction() {
  const constructionElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: (i * 6.5) % 100,
    y: (i * 4.3) % 100,
    type: ["block", "line", "dot"][i % 3],
    color: ["#00ffff", "#10b981", "#06b6d4", "#8b5cf6", "#f59e0b"][i % 5],
    delay: i * 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {constructionElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            backgroundColor: element.color,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 3,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {element.type === "block" && (
            <div className="w-2 h-2 rounded-sm" />
          )}
          {element.type === "line" && (
            <div className="w-3 h-0.5 rounded-full" />
          )}
          {element.type === "dot" && (
            <div className="w-1 h-1 rounded-full" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
