"use client";

import { motion } from "framer-motion";

// Composant de grille de code esthétique
export function EnhancedCodeGrid() {
  const codeLines = [
    "const project = 'Amazing';",
    "function build() {",
    "  return <Awesome />;",
    "}",
    "class Innovation {",
    "  create() {",
    "    return 'Magic';",
    "  }",
    "}",
    "export default project;",
    "const future = 'Bright';",
    "let creativity = 'Infinite';",
    "const passion = 'Coding';",
    "const skills = 'Growing';",
    "let experience = 'Building';",
    "const vision = 'Clear';"
  ];

  return (
    <div className="absolute inset-0 opacity-12 overflow-hidden">
      {/* Grille de base avec couleurs */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(0,255,255,0.06)_50%),linear-gradient(0deg,transparent_50%,rgba(16,185,129,0.05)_50%)] bg-[length:80px_80px]" />
      
      {/* Grille secondaire */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(139,92,246,0.03)_50%),linear-gradient(0deg,transparent_50%,rgba(245,158,11,0.02)_50%)] bg-[length:120px_120px]" />
      
      {/* Lignes de code flottantes */}
      {codeLines.map((line, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-sm"
          style={{
            left: `${(i * 6.5) % 95}%`,
            top: `${(i * 6) % 98}%`,
            color: i % 3 === 0 ? "rgba(0, 255, 255, 0.3)" : 
                   i % 3 === 1 ? "rgba(16, 185, 129, 0.25)" : "rgba(139, 92, 246, 0.2)",
            textShadow: i % 3 === 0 ? "0 0 6px rgba(0, 255, 255, 0.2)" : 
                        i % 3 === 1 ? "0 0 6px rgba(16, 185, 129, 0.2)" : "0 0 6px rgba(139, 92, 246, 0.2)",
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: [0.2, 0.6, 0.2],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 10 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {line}
        </motion.div>
      ))}
      
      {/* Particules de code */}
      {Array.from({ length: 18 }, (_, i) => (
        <motion.div
          key={`code-particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${(i * 5.5) % 100}%`,
            top: `${(i * 5) % 100}%`,
            backgroundColor: i % 4 === 0 ? "#00ffff" : 
                           i % 4 === 1 ? "#10b981" : 
                           i % 4 === 2 ? "#06b6d4" : "#8b5cf6",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 7 + (i * 0.3),
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
