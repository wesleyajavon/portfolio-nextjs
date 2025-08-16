"use client";

import { motion } from "framer-motion";
import { OrbitalTechParticle } from "./OrbitalTechParticle";
import { TechRing } from "./TechRing";

interface TechIconData {
  x: number;
  y: number;
  color: string;
  symbol: string;
  category: string;
}

// Composant d'icône de technologie
export function TechIcon({ icon, index }: { icon: TechIconData; index: number }) {
  return (
    <motion.div
      className="absolute text-2xl"
      style={{
        left: `${icon.x}%`,
        top: `${icon.y}%`,
        transform: "translate(-50%, -50%)",
        filter: `drop-shadow(0 0 20px ${icon.color})`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.6, 1, 0.6],
        scale: [1, 1.3, 1],
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 5 + index * 0.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.8,
        filter: `drop-shadow(0 0 35px ${icon.color})`,
        zIndex: 10,
      }}
    >
      {icon.symbol}
      
      {/* Effet de traînée avancé */}
      <motion.div
        className="absolute text-lg opacity-40"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          color: icon.color,
        }}
        animate={{
          y: [0, 15],
          opacity: [0.4, 0],
          scale: [1, 0.7],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
      >
        {icon.symbol}
      </motion.div>
      
      {/* Catégorie flottante */}
      <motion.div
        className="absolute text-xs font-mono text-white/70 whitespace-nowrap"
        style={{
          left: "50%",
          top: "120%",
          transform: "translateX(-50%)",
          color: icon.color,
          textShadow: `0 0 8px ${icon.color}`,
        }}
        animate={{
          opacity: [0, 0.9, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          delay: index * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {icon.category}
      </motion.div>
      
      {/* Particules orbitales multiples */}
      {[0, 1, 2, 3].map((particleIndex) => (
        <OrbitalTechParticle 
          key={`orbital-${index}-${particleIndex}`}
          particleIndex={particleIndex}
          iconColor={icon.color}
        />
      ))}
      
      {/* Anneaux concentriques */}
      {[1, 2].map((ringIndex) => (
        <TechRing 
          key={`ring-${index}-${ringIndex}`}
          ringIndex={ringIndex}
          iconColor={icon.color}
        />
      ))}
    </motion.div>
  );
}
