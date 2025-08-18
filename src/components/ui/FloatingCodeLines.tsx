"use client";

import { motion } from "framer-motion";

interface FloatingCodeLinesProps {
  className?: string;
}

export function FloatingCodeLines({ className = "" }: FloatingCodeLinesProps) {
  const codeLines = [
    {
      code: "const developer = 'Wesley';",
      x: 5,
      y: 25,
      delay: 0,
      duration: 6
    },
    {
      code: "function create() { return 'magic'; }",
      x: 75,
      y: 35,
      delay: 2,
      duration: 8
    },
    {
      code: "if (passion) build();",
      x: 20,
      y: 70,
      delay: 4,
      duration: 7
    },
    {
      code: "while (learning) grow();",
      x: 70,
      y: 75,
      delay: 6,
      duration: 9
    }
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {codeLines.map((line, index) => (
        <motion.div
          key={index}
          className="absolute text-xs font-mono text-gray-500/40"
          style={{
            left: `${line.x}%`,
            top: `${line.y}%`,
            whiteSpace: "nowrap"
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {line.code}
        </motion.div>
      ))}
    </div>
  );
}
