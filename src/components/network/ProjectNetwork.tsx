"use client";

import { ProjectNode } from "./ProjectNode";
import { ProjectConnection } from "./ProjectConnection";

// Composant de réseau de projets connectés ultra-sophistiqué
export function ProjectNetwork() {
  const projectNodes = [
    { id: 0, x: 85, y: 10, name: "YouCode", color: "#F59E0B", category: "Full Stack", tech: ["Next.js", "NextAuth", "TypeScript", "PostgreSQL", "Grok AI"] },
    { id: 1, x: 80, y: 30, name: "Finly", color: "#10B981", category: "Full Stack", tech: ["Next.js", "React", "TypeScript", "PostgreSQL"] },
    { id: 2, x: 15, y: 70, name: "Task Manager", color: "#EA580C", category: "Full Stack", tech: ["React", "Node.js", "Express.js", "MongoDB", "TypeScript", "JWT"] },
    { id: 3, x: 75, y: 75, name: "Chef Claude", color: "#7E22CE", category: "Full Stack", tech: ["React", "Claude AI", "API"] },
    { id: 4, x: 50, y: 50, name: "Blog API", color: "#14B8A6", category: "Full Stack", tech: ["Node.js", "Express.js", "SQLite", "JWT"] },
    { id: 5, x: 35, y: 15, name: "Assembly", color: "#DB2777", category: "Frontend", tech: ["React", "JavaScript", "CSS Modules", "Fetch API"] },
    { id: 6, x: 65, y: 85, name: "Tenzies", color: "#3B82F6", category: "Frontend", tech: ["React", "JavaScript", "HTML", "CSS"] },
    { id: 7, x: 90, y: 60, name: "Meme Generator", color: "#EA580C", category: "Frontend", tech: ["React", "JavaScript", "HTML", "CSS"] },
    { id: 8, x: 25, y: 45, name: "Portfolio", color: "#7E22CE", category: "Frontend", tech: ["Next.js", "Framer Motion", "TypeScript"] },
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
