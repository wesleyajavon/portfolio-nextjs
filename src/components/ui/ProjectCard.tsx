"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Project {
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
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onProjectHover: (index: number) => void;
}

export function ProjectCard({ project, index, onProjectHover }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card flex w-full flex-row"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onHoverStart={() => {
        setIsHovered(true);
        onProjectHover(index);
      }}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex flex-col lg:mx-10 lg:w-full">
        <Link  
          draggable="false" 
          className="relative cursor-pointer overflow-hidden rounded-lg border border-gray-700 bg-gray-900/50 p-1.5 shadow-2xl lg:h-[560px] lg:rounded-xl lg:p-2 hover:border-green-500/50 hover:bg-gray-800/50 transition-all duration-150"
          href={project.liveUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Ligne de gradient en haut avec style de code */}
          <div 
            className="absolute inset-x-0 top-0 h-px" 
            style={{
              background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(0, 255, 0, 0.8) 35%, rgb(0, 255, 0) 50%, rgba(0, 255, 0, 0.8) 65%, rgba(0, 0, 0, 0) 95%)"
            }}
          />
          
          <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-lg lg:rounded-xl bg-gradient-to-b from-gray-900/50 to-transparent transition-all duration-150">
            {/* Fond avec gradient coloré */}
            <div 
              className="absolute inset-0 -z-10"
              style={{ background: project.gradient }}
            />
            
            {/* Ligne de gradient subtile */}
            <div 
              className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70" 
              style={{
                background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(0, 255, 0) 50%, rgba(0, 0, 0, 0) 80%)"
              }}
            />
            
            {/* En-tête avec description (visible sur desktop) */}
            <div className="hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex" style={{ color: project.accentColor }}>
              <h3 className="max-w-[90%] text-2xl font-serif font-semibold text-white/90 leading-relaxed">
                {project.shortDescription}
              </h3>
              <ArrowRight className="size-6" />
            </div>
            
            {/* Image du projet avec effets de survol */}
            <Image 
              alt={project.title}
              loading="lazy"
              width={1203} 
              height={753} 
              decoding="async"
              className="lg:group-hover:translate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-gray-600 transition-all duration-150 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3"
              style={{ 
                boxShadow: `0 0 30px ${project.accentColor}`,
                filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
              }}
              src={project.image}
              unoptimized
            />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
