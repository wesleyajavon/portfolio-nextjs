"use client";

import { motion } from "framer-motion";

export function FloatingTechStack() {
  const techStack = [
    { name: "Next.js", icon: "⚡", color: "#00ff88", x: 15, y: 20, delay: 0 },
    { name: "React", icon: "⚛️", color: "#00ffff", x: 85, y: 25, delay: 0.5 },
    { name: "TypeScript", icon: "🔷", color: "#0066ff", x: 20, y: 80, delay: 1 },
    { name: "Node.js", icon: "🟢", color: "#00ff00", x: 80, y: 75, delay: 1.5 },
    { name: "MongoDB", icon: "🍃", color: "#00cc88", x: 50, y: 15, delay: 2 },
    { name: "PostgreSQL", icon: "🐘", color: "#0066cc", x: 45, y: 85, delay: 2.5 },
    { name: "Express", icon: "🚀", color: "#ff6600", x: 75, y: 45, delay: 3 },
    { name: "Tailwind", icon: "🎨", color: "#00ccff", x: 25, y: 60, delay: 3.5 },
    { name: "Framer Motion", icon: "🎭", color: "#ff00ff", x: 90, y: 60, delay: 4 },
    { name: "JWT", icon: "🔐", color: "#ffff00", x: 10, y: 40, delay: 4.5 },
    { name: "AI", icon: "🤖", color: "#ff0066", x: 60, y: 30, delay: 5 },
    { name: "API", icon: "🔌", color: "#00ffff", x: 35, y: 90, delay: 5.5 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techStack.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="absolute"
          style={{
            left: `${tech.x}%`,
            top: `${tech.y}%`,
          }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{
            opacity: [0, 1, 0.8, 0],
            scale: [0, 1.2, 1, 0.8],
            rotate: [0, 360, 720, 1080],
            y: [0, -20, 0, -10, 0],
            x: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 8 + index * 0.5,
            delay: tech.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Icône principale */}
          <motion.div
            className="text-3xl filter drop-shadow-lg"
            style={{
              filter: `drop-shadow(0 0 20px ${tech.color})`,
            }}
            whileHover={{ scale: 1.5 }}
          >
            {tech.icon}
          </motion.div>
          
          {/* Nom de la technologie */}
          <motion.div
            className="absolute text-xs font-mono text-white/80 whitespace-nowrap mt-2"
            style={{
              color: tech.color,
              left: "50%",
              transform: "translateX(-50%)",
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {tech.name}
          </motion.div>
          
          {/* Anneaux concentriques */}
          {Array.from({ length: 3 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-current"
              style={{
                left: `${-8 - i * 4}px`,
                top: `${-8 - i * 4}px`,
                width: `${16 + i * 8}px`,
                height: `${16 + i * 8}px`,
                borderColor: tech.color,
                opacity: 0.3 - i * 0.1,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3 - i * 0.1, 0, 0.3 - i * 0.1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                delay: tech.delay + i * 0.2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
          
          {/* Particules orbitales */}
          {Array.from({ length: 4 }, (_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: tech.color,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                x: [0, Math.cos(i * Math.PI / 2) * 30, 0],
                y: [0, Math.sin(i * Math.PI / 2) * 30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                delay: tech.delay + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
}
