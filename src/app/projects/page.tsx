"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  ArrowLeft, 
  Terminal, 
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
import { ProjectCardUpgraded, FilterSection } from "@/components/ui";
import { useProjects } from "@/hooks/useProjects";



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
              <ProjectCardUpgraded 
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
