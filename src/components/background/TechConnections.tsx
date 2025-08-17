"use client";

import { motion } from "framer-motion";

export function TechConnections() {
  const techNodes = [
    { id: 0, x: 20, y: 30, tech: "Next.js", color: "#00ff88" },
    { id: 1, x: 80, y: 25, tech: "React", color: "#00ffff" },
    { id: 2, x: 15, y: 75, tech: "TypeScript", color: "#0066ff" },
    { id: 3, x: 85, y: 70, tech: "Node.js", color: "#00ff00" },
    { id: 4, x: 50, y: 20, tech: "MongoDB", color: "#00cc88" },
    { id: 5, x: 45, y: 80, tech: "PostgreSQL", color: "#0066cc" },
    { id: 6, x: 75, y: 50, tech: "Express", color: "#ff6600" },
    { id: 7, x: 25, y: 55, tech: "Tailwind", color: "#00ccff" },
    { id: 8, x: 90, y: 45, tech: "Framer", color: "#ff00ff" },
    { id: 9, x: 10, y: 45, tech: "JWT", color: "#ffff00" },
    { id: 10, x: 60, y: 35, tech: "AI", color: "#ff0066" },
    { id: 11, x: 35, y: 85, tech: "API", color: "#00ffff" }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Nœuds technologiques */}
      {techNodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4,
            delay: node.id * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Point central */}
          <div
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: node.color,
              boxShadow: `0 0 15px ${node.color}`,
            }}
          />
          
          {/* Nom de la technologie */}
          <motion.div
            className="absolute text-xs font-mono text-white/70 whitespace-nowrap mt-2"
            style={{
              color: node.color,
              left: "50%",
              transform: "translateX(-50%)",
            }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {node.tech}
          </motion.div>
        </motion.div>
      ))}
      
      {/* Connexions entre technologies */}
      {techNodes.slice(0, 8).map((node, i) => {
        const nextNode = techNodes[(i + 1) % techNodes.length];
        const distance = Math.sqrt(Math.pow(nextNode.x - node.x, 2) + Math.pow(nextNode.y - node.y, 2));
        
        if (distance < 50) {
          return (
            <motion.div
              key={`tech-connection-${i}`}
              className="absolute bg-gradient-to-r from-green-400/20 to-cyan-400/20"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: `${distance}%`,
                height: "1px",
                transformOrigin: "left center",
                transform: `rotate(${Math.atan2(nextNode.y - node.y, nextNode.x - node.x) * 180 / Math.PI}deg)`,
              }}
              animate={{
                opacity: [0, 0.4, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 5,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        }
        return null;
      })}
      
      {/* Particules de connexion */}
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-cyan-400"
          style={{
            left: `${(i * 5.2) % 100}%`,
            top: `${(i * 3.8) % 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
