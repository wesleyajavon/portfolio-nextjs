"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  ArrowLeft, 
  Terminal, 
  ExternalLink, 
  Github,
} from "lucide-react";
import Link from "next/link";
import {
  SophisticatedBackground,
  ProjectNetwork,
  ConnectionNetwork,
  EnergyWaves,
  TechParticles,
  MatrixGlitch,
  EnergyVortex,
  DataFlow,
  FloatingTechStack,
  TechConnections
} from "@/components/backgrounds";
import Image from "next/image";
import { TechLogoWithText } from "@/components/ui/TechLogo";
import { useProjects } from "@/hooks/useProjects";

// Utilisation du composant TechLogo centralisé

// Composant de carte de projet améliorée
function ProjectCard({ project, index }: {
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
}) {
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

// Composant de section de filtres
function FilterSection({ 
  activeFilter, 
  setActiveFilter, 
  technologies
}: { 
  activeFilter: string; 
  setActiveFilter: (filter: string) => void; 
  technologies: string[];
}) {
  const categories = ["All", "Frontend", "Backend", "Full Stack", "AI/ML"];

  return (
    <div className="mb-6 sm:mb-8">
      {/* Filtres par catégorie */}
      <div className="flex flex-wrap gap-2 justify-center mb-4 sm:mb-6">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-3 sm:px-4 py-2 rounded-lg border transition-all duration-200 font-mono text-xs sm:text-sm ${
              activeFilter === category
                ? "border-green-500/50 bg-green-500/20 text-green-400"
                : "border-gray-600/50 bg-gray-800/50 text-gray-300 hover:border-gray-500/50 hover:bg-gray-700/50"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      
      {/* Filtre par technologie */}
      <div className="mt-4">
        <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3 text-center">Filter by technology:</h4>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center max-w-4xl mx-auto">
          {technologies.slice(0, 12).map((tech) => (
            <motion.button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`px-2 sm:px-3 py-1 text-xs rounded-full border transition-all duration-200 ${
                activeFilter === tech
                  ? "border-green-500/50 bg-green-500/20 text-green-400"
                  : "border-gray-600/50 bg-gray-800/50 text-gray-300 hover:border-gray-500/50 hover:bg-gray-700/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TechLogoWithText tech={tech} />
            </motion.button>
          ))}
          {technologies.length > 12 && (
            <span className="px-2 sm:px-3 py-1 text-xs rounded-full border border-gray-600/50 bg-gray-800/50 text-gray-300">
              +{technologies.length - 12}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Données des projets
  // Utiliser le hook pour récupérer les projets depuis MongoDB
  const { projects, loading, error } = useProjects();

  // Stabiliser la référence des projets pour éviter les re-rendus inutiles
  const stableProjects = useMemo(() => projects, [projects]);

  // Extraction de toutes les technologies uniques
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    stableProjects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, [stableProjects]);

  // Filtrage des projets
  const filteredProjects = useMemo(() => {
    let filtered = stableProjects;

    // Filtre par catégorie ou technologie
    if (activeFilter !== "All") {
      filtered = filtered.filter(project => 
        project.category.includes(activeFilter) || 
        project.technologies.includes(activeFilter)
      );
    }

    // Filtre par recherche
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    return filtered;
  }, [stableProjects, activeFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Arrière-plan sophistiqué et esthétique */}
      <SophisticatedBackground />
      <ProjectNetwork />
      <ConnectionNetwork />
      <EnergyWaves />
      <TechParticles />
      <MatrixGlitch />
      <EnergyVortex />
      <DataFlow />
      <FloatingTechStack />
      <TechConnections />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-8 sm:pb-12">
        {/* Bouton retour - déplacé en dehors de l'en-tête centré */}
        <div className="flex justify-start mb-6 sm:mb-8">
          <Link href="/">
            <motion.button
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-600/50 text-gray-300 hover:bg-gray-700/50 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </motion.button>
          </Link>
        </div>

        {/* En-tête de page */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center rounded-lg border border-green-500/30 bg-green-500/10 backdrop-blur-sm px-3 sm:px-4 py-2 text-xs sm:text-sm font-mono text-green-400 mb-4 sm:mb-6">
            <Terminal className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            projects.js
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight font-mono px-2">
            <span className="text-blue-400">const</span>{" "}
            <span className="text-green-400">portfolio</span>{" "}
            <span className="text-yellow-400">=</span>{" "}
            <span className="text-cyan-400">&quot;Projects&quot;;</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-mono px-4">
            <span className="text-white">A collection of innovative projects showcasing modern web development,</span>
            <br className="hidden sm:block" />
            <span className="text-white">creative problem-solving, and cutting-edge technologies.</span>
          </p>
        </motion.div>

        {/* Barre de recherche */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative max-w-md mx-auto px-4 sm:px-0">
            <Search className="absolute left-7 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 sm:pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:bg-gray-700/50 transition-colors text-sm sm:text-base"
            />
          </div>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="px-4 sm:px-0"
        >
          <FilterSection 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
            technologies={allTechnologies}
          />
        </motion.div>

        {/* Grille des projets */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Message si aucun projet trouvé */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12 sm:py-16 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-400 text-base sm:text-lg mb-4">
              No projects found for &quot;{searchQuery}&quot; in category &quot;{activeFilter}&quot;
            </div>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("All");
              }}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-mono text-sm sm:text-base"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
