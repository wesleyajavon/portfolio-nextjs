"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { TechLogoWithText } from "./TechLogo";

interface ProjectCardUpgradedProps {
  project: {
    title: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    gradient: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    accentColor: string;
    category: string[];
    difficulty: string;
    features: string[];
  };
  index: number;
}

export function ProjectCardUpgraded({ project, index }: ProjectCardUpgradedProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-700/50 bg-gray-900/30 backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Ligne de gradient en haut */}
      <div 
        className="absolute inset-x-0 top-0 h-px z-10" 
        style={{
          background: `linear-gradient(90deg, transparent 5%, ${project.accentColor} 35%, ${project.accentColor} 50%, ${project.accentColor} 65%, transparent 95%)`
        }}
      />
      
      {/* Fond avec gradient coloré */}
      <div 
        className="absolute inset-0 -z-10 opacity-20"
        style={{ background: project.gradient }}
      />
      
      <div className="p-4 sm:p-6">
        {/* En-tête du projet */}
        <div className="mb-3 sm:mb-4 flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 font-mono leading-tight">
              {project.title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
              {project.shortDescription}
            </p>
            
            {/* Badges de catégorie et difficulté */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              {project.category.map((cat, catIndex) => (
                <span key={catIndex} className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 whitespace-nowrap">
                  {cat}
                </span>
              ))}
              <span className="px-2 py-1 text-xs rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 whitespace-nowrap">
                {project.difficulty}
              </span>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex gap-1.5 sm:gap-2 ml-2 sm:ml-4 flex-shrink-0">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-lg bg-gray-800/50 border border-gray-600/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.a>
            )}
            
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 rounded-lg bg-gray-800/50 border border-gray-600/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.a>
            )}
          </div>
        </div>
        
        {/* Image du projet */}
        <div className="relative mb-3 sm:mb-4 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={250}
            className="w-full h-32 sm:h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* Technologies utilisées */}
        <div className="mb-3 sm:mb-4">
          <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 sm:px-3 py-1 text-xs rounded-full border border-gray-600/50 bg-gray-800/50 text-gray-300 hover:border-gray-500/50 transition-colors flex items-center gap-1.5 sm:gap-2"
              >
                <TechLogoWithText tech={tech} size="sm" />
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 sm:px-3 py-1 text-xs rounded-full border border-gray-600/50 bg-gray-800/50 text-gray-300">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Fonctionnalités */}
        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2">Features:</h4>
          <ul className="text-xs text-gray-400 space-y-1">
            {project.features.slice(0, 3).map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-400 flex-shrink-0"></div>
                <span className="truncate">{feature}</span>
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-gray-500 italic text-xs">
                +{project.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
