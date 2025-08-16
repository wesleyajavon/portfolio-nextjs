"use client";

import { motion } from "framer-motion";
import { TechIcon } from "./TechIcon";

// Composant de particules de technologie ultra-sophistiqué
export function TechParticles() {
  const techIcons = [
    { symbol: "⚛️", x: 10, y: 20, color: "#00ffff", category: "Frontend" },
    { symbol: "⚡", x: 90, y: 15, color: "#10b981", category: "Performance" },
    { symbol: "🔧", x: 5, y: 80, color: "#06b6d4", category: "Tools" },
    { symbol: "🚀", x: 85, y: 85, color: "#8b5cf6", category: "Deployment" },
    { symbol: "💻", x: 50, y: 10, color: "#f59e0b", category: "Development" },
    { symbol: "🌐", x: 45, y: 90, color: "#ec4899", category: "Web" },
    { symbol: "📱", x: 95, y: 60, color: "#22c55e", category: "Mobile" },
    { symbol: "🎨", x: 25, y: 40, color: "#06b6d4", category: "Design" },
    { symbol: "🔒", x: 70, y: 25, color: "#8b5cf6", category: "Security" },
    { symbol: "📊", x: 30, y: 90, color: "#f59e0b", category: "Analytics" },
    { symbol: "⚙️", x: 65, y: 18, color: "#ec4899", category: "Configuration" },
    { symbol: "🔮", x: 18, y: 70, color: "#22c55e", category: "AI/ML" },
    { symbol: "🎯", x: 88, y: 55, color: "#06b6d4", category: "Targeting" },
    { symbol: "💡", x: 42, y: 25, color: "#8b5cf6", category: "Innovation" },
    { symbol: "🌟", x: 72, y: 75, color: "#f59e0b", category: "Star" },
    { symbol: "🔋", x: 55, y: 65, color: "#ec4899", category: "Power" },
    { symbol: "🎭", x: 22, y: 85, color: "#06b6d4", category: "Performance" },
    { symbol: "🎨", x: 68, y: 35, color: "#8b5cf6", category: "Art" },
    { symbol: "🎯", x: 35, y: 55, color: "#f59e0b", category: "Focus" },
    { symbol: "🔮", x: 15, y: 35, color: "#ec4899", category: "Magic" },
    { symbol: "⚡", x: 75, y: 80, color: "#22c55e", category: "Speed" },
    { symbol: "💎", x: 60, y: 30, color: "#06b6d4", category: "Premium" },
    { symbol: "🔥", x: 40, y: 70, color: "#8b5cf6", category: "Hot" },
    { symbol: "🌈", x: 80, y: 40, color: "#f59e0b", category: "Colorful" },
    { symbol: "🎭", x: 85, y: 25, color: "#22c55e", category: "Drama" },
    { symbol: "🎨", x: 12, y: 60, color: "#06b6d4", category: "Creative" },
    { symbol: "🎯", x: 95, y: 85, color: "#8b5cf6", category: "Precision" }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {techIcons.map((icon, i) => (
        <TechIcon key={i} icon={icon} index={i} />
      ))}
    </div>
  );
}
