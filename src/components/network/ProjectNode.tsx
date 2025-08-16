"use client";

import { motion } from "framer-motion";
import { FloatingTech } from "./FloatingTech";
import { OrbitalParticle } from "./OrbitalParticle";

interface ProjectNode {
  id: number;
  x: number;
  y: number;
  name: string;
  color: string;
  tech: string[];
}

// Composant de nœud de projet
export function ProjectNode({ node }: { node: ProjectNode }) {
  return (
    <motion.div 
      className="absolute" 
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: node.id * 0.1 }}
    >
      {/* Nœud principal avec effet de pulsation sophistiqué */}
      <motion.div
        className="absolute w-5 h-5 rounded-full"
        style={{
          backgroundColor: node.color,
          boxShadow: `0 0 25px ${node.color}`,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Anneau concentrique sophistiqué */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border border-current"
        style={{
          left: "-6px",
          top: "-6px",
          borderColor: node.color,
          opacity: 0.3,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      
      {/* Nom du projet avec effet de glitch sophistiqué */}
      <motion.div
        className="absolute text-xs font-mono text-white/80 whitespace-nowrap"
        style={{
          left: "30px",
          top: "0px",
          color: node.color,
          textShadow: `0 0 8px ${node.color}`,
        }}
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {node.name}
      </motion.div>
      
      {/* Technologies flottantes sophistiquées */}
      {node.tech.slice(0, 2).map((tech: string, techIndex: number) => (
        <FloatingTech 
          key={techIndex}
          tech={tech}
          techIndex={techIndex}
          nodeColor={node.color}
          nodeId={node.id}
        />
      ))}
      
      {/* Particules orbitales sophistiquées */}
      {[0, 1, 2].map((particleIndex) => (
        <OrbitalParticle 
          key={`orbital-${node.id}-${particleIndex}`}
          particleIndex={particleIndex}
          nodeColor={node.color}
        />
      ))}
    </motion.div>
  );
}
