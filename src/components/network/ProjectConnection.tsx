"use client";

import { motion } from "framer-motion";

// Composant de connexion entre projets
export function ProjectConnection({ startNode, endNode, distance, index }: {
  startNode: any;
  endNode: any;
  distance: number;
  index: number;
}) {
  return (
    <motion.div
      className="absolute bg-gradient-to-r from-pink-500/20 to-blue-500/20"
      style={{
        left: `${startNode.x}%`,
        top: `${startNode.y}%`,
        width: `${distance}%`,
        height: "1px",
        transformOrigin: "left center",
        transform: `rotate(${Math.atan2(endNode.y - startNode.y, endNode.x - startNode.x) * 180 / Math.PI}deg)`,
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 0.6 }}
      transition={{ duration: 1.5, delay: index * 0.2 }}
    />
  );
}
