"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Download,
  Terminal,
  Code2,
  Cpu,
  Database,
  Server,
  ExternalLink,
  FolderOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Composant pour la grille de code en arrière-plan
function CodeGrid() {
  return (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(0,255,0,0.1)_50%),linear-gradient(0deg,transparent_50%,rgba(0,255,0,0.1)_50%)] bg-[length:60px_60px]" />
    </div>
  );
}

// Composant pour les particules de code
function CodeParticles() {
  const particles = [
    // Symboles de base
    { id: 0, x: 5, y: 10, symbol: '{', color: 'text-green-400', size: 'text-xs' },
    { id: 1, x: 15, y: 25, symbol: '}', color: 'text-green-400', size: 'text-xs' },
    { id: 2, x: 25, y: 15, symbol: '[', color: 'text-blue-400', size: 'text-xs' },
    { id: 3, x: 35, y: 35, symbol: ']', color: 'text-blue-400', size: 'text-xs' },
    { id: 4, x: 45, y: 20, symbol: '(', color: 'text-cyan-400', size: 'text-xs' },
    { id: 5, x: 55, y: 40, symbol: ')', color: 'text-cyan-400', size: 'text-xs' },
    { id: 6, x: 65, y: 30, symbol: '<', color: 'text-yellow-400', size: 'text-xs' },
    { id: 7, x: 75, y: 50, symbol: '>', color: 'text-yellow-400', size: 'text-xs' },
    { id: 8, x: 85, y: 25, symbol: '/', color: 'text-purple-400', size: 'text-xs' },
    { id: 9, x: 95, y: 45, symbol: '\\', color: 'text-purple-400', size: 'text-xs' },
    
    // Symboles avancés
    { id: 10, x: 10, y: 60, symbol: '|', color: 'text-green-400', size: 'text-sm' },
    { id: 11, x: 20, y: 70, symbol: ';', color: 'text-blue-400', size: 'text-sm' },
    { id: 12, x: 30, y: 80, symbol: ':', color: 'text-cyan-400', size: 'text-sm' },
    { id: 13, x: 40, y: 65, symbol: '=', color: 'text-yellow-400', size: 'text-sm' },
    { id: 14, x: 50, y: 75, symbol: '+', color: 'text-purple-400', size: 'text-xs' },
    { id: 15, x: 60, y: 85, symbol: '-', color: 'text-green-400', size: 'text-xs' },
    { id: 16, x: 70, y: 55, symbol: '*', color: 'text-blue-400', size: 'text-xs' },
    { id: 17, x: 80, y: 65, symbol: '&', color: 'text-cyan-400', size: 'text-xs' },
    { id: 18, x: 90, y: 75, symbol: '^', color: 'text-yellow-400', size: 'text-xs' },
    { id: 19, x: 15, y: 85, symbol: '%', color: 'text-purple-400', size: 'text-xs' },
    
    // Symboles spéciaux
    { id: 20, x: 5, y: 45, symbol: '~', color: 'text-green-400', size: 'text-lg' },
    { id: 21, x: 25, y: 55, symbol: '!', color: 'text-blue-400', size: 'text-lg' },
    { id: 22, x: 45, y: 65, symbol: '?', color: 'text-cyan-400', size: 'text-lg' },
    { id: 23, x: 65, y: 75, symbol: '@', color: 'text-yellow-400', size: 'text-lg' },
    { id: 24, x: 85, y: 85, symbol: '#', color: 'text-purple-400', size: 'text-lg' },
    
    // Symboles de programmation
    { id: 25, x: 12, y: 35, symbol: '=>', color: 'text-green-400', size: 'text-xs' },
    { id: 26, x: 32, y: 45, symbol: '==', color: 'text-blue-400', size: 'text-xs' },
    { id: 27, x: 52, y: 55, symbol: '!=', color: 'text-cyan-400', size: 'text-xs' },
    { id: 28, x: 72, y: 65, symbol: '&&', color: 'text-yellow-400', size: 'text-xs' },
    { id: 29, x: 92, y: 75, symbol: '||', color: 'text-purple-400', size: 'text-xs' },
    
    // Symboles de framework
    { id: 30, x: 8, y: 15, symbol: '⚛', color: 'text-blue-400', size: 'text-sm' },
    { id: 31, x: 28, y: 25, symbol: '⚡', color: 'text-yellow-400', size: 'text-sm' },
    { id: 32, x: 48, y: 35, symbol: '🔧', color: 'text-green-400', size: 'text-sm' },
    { id: 33, x: 68, y: 45, symbol: '🚀', color: 'text-purple-400', size: 'text-sm' },
    { id: 34, x: 88, y: 55, symbol: '💻', color: 'text-cyan-400', size: 'text-sm' },
    
    // Symboles supplémentaires pour atteindre 50
    { id: 35, x: 18, y: 18, symbol: '§', color: 'text-green-400', size: 'text-xs' },
    { id: 36, x: 38, y: 28, symbol: '¶', color: 'text-blue-400', size: 'text-xs' },
    { id: 37, x: 58, y: 38, symbol: '©', color: 'text-cyan-400', size: 'text-xs' },
    { id: 38, x: 78, y: 48, symbol: '®', color: 'text-yellow-400', size: 'text-xs' },
    { id: 39, x: 98, y: 58, symbol: '™', color: 'text-purple-400', size: 'text-xs' },
    
    // Symboles mathématiques
    { id: 40, x: 22, y: 42, symbol: '±', color: 'text-green-400', size: 'text-sm' },
    { id: 41, x: 42, y: 52, symbol: '×', color: 'text-blue-400', size: 'text-sm' },
    { id: 42, x: 62, y: 62, symbol: '÷', color: 'text-cyan-400', size: 'text-sm' },
    { id: 43, x: 82, y: 72, symbol: '∞', color: 'text-yellow-400', size: 'text-sm' },
    { id: 44, x: 12, y: 82, symbol: '∑', color: 'text-purple-400', size: 'text-sm' },
    
    // Symboles de code avancés
    { id: 45, x: 32, y: 92, symbol: '∫', color: 'text-green-400', size: 'text-xs' },
    { id: 46, x: 52, y: 12, symbol: '∆', color: 'text-blue-400', size: 'text-xs' },
    { id: 47, x: 72, y: 22, symbol: '∇', color: 'text-cyan-400', size: 'text-xs' },
    { id: 48, x: 92, y: 32, symbol: '∏', color: 'text-yellow-400', size: 'text-xs' },
    { id: 49, x: 28, y: 78, symbol: '√', color: 'text-purple-400', size: 'text-xs' }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.color}/40 ${particle.size} font-mono select-none`}
          style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ 
            opacity: [0, 0.8, 0], 
            y: [-20, -40, -20], 
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4 + particle.id * 0.1, 
            delay: particle.id * 0.15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          whileHover={{ 
            scale: 1.5, 
            opacity: 1,
            transition: { duration: 0.2 }
          }}
        >
          {particle.symbol}
        </motion.div>
      ))}
    </div>
  );
}

// Composant de carte de projet avec style de code
function ProjectCard({ project, index, onProjectHover }: {
  project: {
    title: string;
    description: string;
    image: string;
    gradient: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    accentColor: string;
  };
  index: number;
  onProjectHover: (index: number) => void;
}) {
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
        <a 
          draggable="false" 
          className="relative cursor-pointer overflow-hidden rounded-lg border border-gray-700 bg-gray-900/50 p-1.5 shadow-2xl lg:h-[560px] lg:rounded-xl lg:p-2 hover:border-green-500/50 hover:bg-gray-800/50 transition-all duration-300"
          href={project.liveUrl || "#"}
        >
          {/* Ligne de gradient en haut avec style de code */}
          <div 
            className="absolute inset-x-0 top-0 h-px" 
            style={{
              background: "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(0, 255, 0, 0.8) 35%, rgb(0, 255, 0) 50%, rgba(0, 255, 0, 0.8) 65%, rgba(0, 0, 0, 0) 95%)"
            }}
          />
          
          <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-lg lg:rounded-xl bg-gradient-to-b from-gray-900/50 to-transparent transition-all duration-300">
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
              <h3 className="max-w-[90%] text-2xl font-mono font-medium">
                {project.description}
              </h3>
              <ArrowRight className="size-6" />
            </div>
            
            {/* Image du projet avec effets de survol */}
            <img 
              alt={project.title}
              loading="lazy"
              width="1203" 
              height="753" 
              decoding="async"
              className="lg:group-hover:translate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-gray-600 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3"
              style={{ 
                boxShadow: `0 0 30px ${project.accentColor}`,
                filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
              }}
              src={project.image}
            />
          </div>
        </a>
      </div>
    </motion.div>
  );
}

// Composant de détail du projet (colonne de droite) avec style de code
function ProjectDetails({ selectedProject }: {
  selectedProject: {
    title: string;
    description: string;
    technologies: string[];
    accentColor: string;
  } | null;
}) {
  if (!selectedProject) return null;

  return (
    <div className="hidden py-4 lg:sticky lg:block lg:w-[35%]">
      <div className="sticky top-40">
        <div className="flex">
          <div 
            aria-hidden="true" 
            className="my-4 mr-4 h-1 min-w-6 rounded-full"
            style={{ backgroundColor: selectedProject.accentColor }}
          />
          <div className="flex flex-col items-start lg:h-[500px]">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-foreground text-2xl font-bold">
                {selectedProject.title}
              </h3>
            </div>
            <p className="text-muted-foreground my-2 text-base font-light">
              {selectedProject.description}
            </p>
            
            {/* Points de détail du projet */}
            <ul className="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base">
              <li className="flex items-center text-sm">
                <div className="mt-1 mr-2 size-5 shrink-0 rounded-full" style={{ backgroundColor: selectedProject.accentColor }}></div>
                <span>Built with modern web technologies and best practices.</span>
              </li>
              <li className="flex items-center text-sm">
                <div className="mt-1 mr-2 size-5 shrink-0 rounded-full" style={{ backgroundColor: selectedProject.accentColor }}></div>
                <span>Responsive design optimized for all devices.</span>
              </li>
              <li className="flex items-center text-sm">
                <div className="mt-1 mr-2 size-5 shrink-0 rounded-full" style={{ backgroundColor: selectedProject.accentColor }}></div>
                <span>Performance-focused with smooth animations.</span>
              </li>
              <li className="flex items-center text-sm">
                <div className="mt-1 mr-2 size-5 shrink-0 rounded-full" style={{ backgroundColor: selectedProject.accentColor }}></div>
                <span>Clean code architecture and maintainability.</span>
              </li>
            </ul>

            {/* Technologies utilisées */}
            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              {selectedProject.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2 [a&]:hover:bg-primary/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  
  // Fonction pour mettre à jour le projet sélectionné
  const handleProjectHover = (index: number) => {
    setSelectedProject(index);
  };

  const projects = [
    {
      title: "Next Ventures",
      description: "A online space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design.",
      image: "/api/placeholder/1203/753",
      gradient: "linear-gradient(188.62deg, #6B0D33 49.9%, #DB2777 81.7%, #F472B6 93.88%, #F9D793 113.5%)",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Stripe"],
      liveUrl: "/projects/next-venture",
      githubUrl: "#",
      accentColor: "#DB2777"
    },
    {
      title: "Zenith Minds",
      description: "A platform connecting students and instructors for enhanced learning experiences.",
      image: "/api/placeholder/1203/753",
      gradient: "linear-gradient(188.62deg, #070E57 49.9%, #2932CB 81.7%, #7980FF 93.88%, #F9D793 113.5%)",
      technologies: ["React", "Node.js", "Express", "Socket.io", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "/projects/zenith-minds",
      githubUrl: "#",
      accentColor: "#2932CB"
    },
    {
      title: "Snippix",
      description: "A platform for creating and sharing code snippets with a clean and intuitive design.",
      image: "/api/placeholder/1203/753",
      gradient: "linear-gradient(188.62deg, #134E4A 49.9%, #14B8A6 81.7%, #5EEAD4 93.88%, #F9D793 113.5%)",
      technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "Prism.js", "Vercel"],
      liveUrl: "/projects/snippix",
      githubUrl: "#",
      accentColor: "#14B8A6"
    },
    {
      title: "Personal Portfolio",
      description: "Design Unleashed: A Captivating Portfolio Showcasing Innovative Web Development and UI/UX",
      image: "/api/placeholder/1203/753",
      gradient: "linear-gradient(188.62deg, #3D1A7A 49.9%, #7E22CE 81.7%, #C084FC 93.88%, #F9D793 113.5%)",
      technologies: ["Next.js", "React", "TypeScript", "MDX", "Tailwind CSS", "Motion.dev", "Zustand", "Zod", "PostgreSQL", "Prisma", "Auth.js"],
      liveUrl: "/projects/portfolio",
      githubUrl: "#",
      accentColor: "#7E22CE"
    },
    {
      title: "StarForge",
      description: "A sleek AI SaaS landing page with a user-friendly design that enhances engagement.",
      image: "/api/placeholder/1203/753",
      gradient: "linear-gradient(188.62deg, #6B0D33 49.9%, #DB2777 81.7%, #F472B6 93.88%, #F9D793 113.5%)",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
      liveUrl: "/projects/star-forge",
      githubUrl: "#",
      accentColor: "#DB2777"
    }
  ];

  // Mise à jour automatique du projet sélectionné basée sur la position des cartes
  useEffect(() => {
    const handleScroll = () => {
      const projectCards = document.querySelectorAll('.project-card');
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Centre de l'écran
      
      projectCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardTop = rect.top + window.scrollY;
        const cardBottom = cardTop + rect.height;
        
        // Si le centre de l'écran est dans cette carte
        if (scrollPosition >= cardTop && scrollPosition <= cardBottom) {
          if (index !== selectedProject) {
            setSelectedProject(index);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProject]);

  return (
    <section id="projects" className="relative mx-auto mt-28 w-full max-w-7xl py-10">
      {/* Arrière-plan avec grille et particules */}
      <CodeGrid />
      <CodeParticles />
      
      {/* En-tête de section avec style de code */}
      <motion.h2 
        className="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-balance text-center font-mono"
        style={{
          textShadow: "0px 4px 8px rgba(0,255,0,0.1),0px 8px 30px rgba(0,255,0,0.2)"
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="mb-3 text-xs font-normal tracking-widest text-gray-400 uppercase md:text-sm font-mono">
          FEATURED CASE STUDIES
        </p>
        <span className="">
          <span className="text-white">const</span>{" "}
          <span className="text-green-400 font-bold tracking-wide">
            projects
          </span>{" "}
          <span className="text-yellow-400">=</span>{" "}
          <span className="text-cyan-400">"Portfolio";</span>
        </span>
      </motion.h2>

      {/* Grille des projets */}
      <div className="relative mx-auto flex w-full">
        {/* Colonne de gauche avec les projets */}
        <div className="mx-auto grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:flex lg:max-w-[65%] lg:flex-col lg:gap-y-24">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              onProjectHover={handleProjectHover}
            />
          ))}
        </div>

        {/* Colonne de droite avec les détails du projet */}
        <ProjectDetails selectedProject={projects[selectedProject]} />
      </div>

      {/* Bouton "Voir plus de projets" avec style de code */}
      <motion.a 
        className="group flex w-fit items-center justify-center gap-2 text-gray-400 transition-colors hover:text-green-400 mx-auto md:mt-20 font-mono"
        href="/projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <span className="text-green-400">function</span>{" "}
        <span className="text-white">viewMoreProjects</span>
        <span className="text-yellow-400">()</span>
        <div className="size-[25px] overflow-hidden rounded-full border border-gray-600 bg-gray-800 transition-all duration-500 group-hover:bg-green-500/20 group-hover:border-green-500">
          <div className="flex w-12 -translate-x-1/2 transition-transform duration-500 ease-in-out group-hover:translate-x-0">
            <span className="flex size-6">
              <ArrowRight className="m-auto size-[14px]" />
            </span>
            <span className="flex size-6">
              <ArrowRight className="m-auto size-[14px]" />
            </span>
          </div>
        </div>
      </motion.a>
    </section>
  );
}
