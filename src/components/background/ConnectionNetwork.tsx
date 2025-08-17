"use client";

import { motion } from "framer-motion";

// Composant de réseau de connexions dynamiques
export function ConnectionNetwork() {
  const nodes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (i * 4.5 + 10) % 90,
    y: (i * 3.2 + 15) % 80,
    size: (i % 4) + 2,
    color: ["#00ffff", "#10b981", "#06b6d4", "#8b5cf6", "#f59e0b", "#ec4899"][i % 6],
    pulse: i * 0.3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
            backgroundColor: node.color,
            boxShadow: `0 0 20px ${node.color}`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
            boxShadow: [
              `0 0 20px ${node.color}`,
              `0 0 40px ${node.color}`,
              `0 0 20px ${node.color}`,
            ],
          }}
          transition={{
            duration: 2 + node.pulse,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Lignes de connexion animées */}
      {nodes.slice(0, 15).map((node, i) => {
        const nextNode = nodes[(i + 1) % nodes.length];
        const distance = Math.sqrt(Math.pow(nextNode.x - node.x, 2) + Math.pow(nextNode.y - node.y, 2));
        
        if (distance < 40) {
          return (
            <motion.div
              key={`connection-${i}`}
              className="absolute bg-gradient-to-r from-cyan-400/40 to-blue-400/40"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: `${distance}%`,
                height: "2px",
                transformOrigin: "left center",
                transform: `rotate(${Math.atan2(nextNode.y - node.y, nextNode.x - node.x) * 180 / Math.PI}deg)`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
