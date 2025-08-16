"use client";

import { motion } from "framer-motion";

export function LightSource({ 
  position, 
  color, 
  size, 
  opacity, 
  duration 
}: {
  position: string;
  color: string;
  size: string;
  opacity: number;
  duration: number;
}) {
  return (
    <motion.div
      className={`absolute ${position} ${size} rounded-full opacity-${opacity} blur-3xl`}
      style={{
        background: `radial-gradient(circle, ${color} 0%, ${color.replace('0.12', '0.06').replace('0.1', '0.05')} 30%, transparent 70%)`,
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [opacity * 0.8, opacity, opacity * 0.8],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
