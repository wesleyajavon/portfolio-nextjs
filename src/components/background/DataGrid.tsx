"use client";

import { motion } from "framer-motion";

// Composant de grille de données animée
export function DataGrid() {
  const gridSize = 20;
  const cells = Array.from({ length: gridSize * gridSize }, (_, i) => ({
    id: i,
    row: Math.floor(i / gridSize),
    col: i % gridSize,
    delay: i * 0.02,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-15">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(0,255,255,0.1)_50%),linear-gradient(0deg,transparent_50%,rgba(16,185,129,0.1)_50%)] bg-[length:40px_40px]" />
      
      {cells.map((cell) => (
        <motion.div
          key={cell.id}
          className="absolute w-1 h-1 bg-cyan-400/40"
          style={{
            left: `${(cell.col / gridSize) * 100}%`,
            top: `${(cell.row / gridSize) * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: cell.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
