"use client";

import { motion } from "framer-motion";

export function CodePattern() {
  const codeLines = [
    "const developer = {",
    "  name: 'Wesley',",
    "  passion: 'Coding',",
    "  skills: ['React', 'Node.js']",
    "};",
    "function create() {",
    "  return 'Amazing Apps';",
    "}"
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeLines.map((line, index) => (
        <motion.div
          key={index}
          className="absolute text-xs font-mono text-gray-600/30"
          style={{
            left: `${(index * 15) % 80 + 10}%`,
            top: `${(index * 12) % 70 + 15}%`,
            whiteSpace: "nowrap"
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            x: [0, 10, 0],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 8 + index * 0.5,
            delay: index * 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
}
