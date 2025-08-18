"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedStatProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  color: string;
  delay: number;
}

export function AnimatedStat({ 
  icon: Icon, 
  value, 
  label, 
  color, 
  delay 
}: AnimatedStatProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <div className={`text-4xl mb-2 ${color}`}>
        <Icon className="w-12 h-12 mx-auto" />
      </div>
      <div className="text-2xl font-bold text-white mb-1 font-mono">
        {value}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </motion.div>
  );
}
