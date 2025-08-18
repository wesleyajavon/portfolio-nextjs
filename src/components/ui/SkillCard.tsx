"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay: number;
}

export function SkillCard({ 
  icon: Icon, 
  title, 
  description, 
  color, 
  delay 
}: SkillCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-900/30 backdrop-blur-sm p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Ligne de gradient en haut */}
      <div 
        className="absolute inset-x-0 top-0 h-px z-10" 
        style={{
          background: `linear-gradient(90deg, transparent 5%, ${color} 35%, ${color} 50%, ${color} 65%, transparent 95%)`
        }}
      />
      
      {/* Fond avec gradient coloré */}
      <div 
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`
        }}
      />
      
      <div className="text-center">
        <div 
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
          style={{
            backgroundColor: `${color}20`,
            border: `2px solid ${color}40`
          }}
        >
          <Icon className="w-8 h-8" style={{ color }} />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 font-mono">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
