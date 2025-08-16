"use client";

import { motion } from "framer-motion";
import { ProjectNode } from "./ProjectNode";
import { ProjectConnection } from "./ProjectConnection";

// Composant de réseau de projets connectés ultra-sophistiqué
export function ProjectNetwork() {
  const projectNodes = [
    { id: 0, x: 20, y: 25, name: "Next Ventures", color: "#DB2777", category: "Full Stack", tech: ["React", "Next.js", "MongoDB"] },
    { id: 1, x: 80, y: 30, name: "Zenith Minds", color: "#2932CB", category: "Full Stack", tech: ["Node.js", "Socket.io", "PostgreSQL"] },
    { id: 2, x: 15, y: 70, name: "Snippix", color: "#14B8A6", category: "Full Stack", tech: ["Vue.js", "Express", "MongoDB"] },
    { id: 3, x: 75, y: 75, name: "Portfolio", color: "#7E22CE", category: "Frontend", tech: ["Next.js", "Framer Motion", "TypeScript"] },
    { id: 4, x: 50, y: 50, name: "StarForge", color: "#DB2777", category: "Frontend", tech: ["React", "Vite", "Tailwind"] },
    { id: 5, x: 35, y: 15, name: "TechFlow", color: "#3B82F6", category: "Full Stack", tech: ["D3.js", "Chart.js", "PostgreSQL"] },
    { id: 6, x: 65, y: 85, name: "EcoTracker", color: "#10B981", category: "Mobile", tech: ["React Native", "Expo", "Firebase"] },
    { id: 7, x: 90, y: 60, name: "CodeCollab", color: "#EA580C", category: "Full Stack", tech: ["WebSocket", "Monaco", "Redis"] },
    { id: 8, x: 25, y: 45, name: "DataViz", color: "#EC4899", category: "Analytics", tech: ["D3.js", "Python", "Pandas"] },
    { id: 9, x: 70, y: 40, name: "CloudSync", color: "#22C55E", category: "Backend", tech: ["AWS", "Lambda", "DynamoDB"] },
    { id: 10, x: 45, y: 80, name: "AI Chat", color: "#06B6D4", category: "AI/ML", tech: ["OpenAI", "FastAPI", "Redis"] },
    { id: 11, x: 85, y: 10, name: "BlockChain", color: "#F59E0B", category: "Web3", tech: ["Solidity", "Web3.js", "IPFS"] }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {projectNodes.map((node) => (
        <ProjectNode key={node.id} node={node} />
      ))}
      
      {/* Lignes de connexion entre projets sophistiquées */}
      {projectNodes.map((node, i) => {
        const nextNode = projectNodes[(i + 1) % projectNodes.length];
        const distance = Math.sqrt(Math.pow(nextNode.x - node.x, 2) + Math.pow(nextNode.y - node.y, 2));
        
        if (distance < 50) {
          return (
            <ProjectConnection 
              key={`connection-${i}`}
              startNode={node}
              endNode={nextNode}
              distance={distance}
              index={i}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
