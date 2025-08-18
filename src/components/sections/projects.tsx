"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { ProjectNetwork } from "../network";
import {
  DataFlow,
  TechParticles,
  CreationWaves,
  ProjectConstruction,
  AnimatedGradient,
  CodePattern,
  ConnectionNetwork,
  EnergyWaves,
  MatrixGlitch,
  EnergyVortex,
  ParticleGrid
} from "../background";
import { ProjectCard, ProjectDetails } from "../ui";
import { useProjects, Project } from "../../hooks/useProjects";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  // Utiliser le hook pour récupérer les projets depuis MongoDB
  const { projects, loading, error } = useProjects({ limit: 4 });

  // Fonction pour mettre à jour le projet sélectionné
  const handleProjectHover = (index: number) => {
    setSelectedProject(index);
  };

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

  // Gérer les états de chargement et d'erreur
  if (loading) {
    return (
      <section className="relative min-h-screen bg-black py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-400 mx-auto mb-4"></div>
              <p className="text-white/60 font-mono">Loading projects...</p>
              <Loader2 className="w-10 h-10 animate-spin mx-auto mb-4" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative min-h-screen bg-black py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="text-red-400 text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-white mb-2">Loading error</h2>
              <p className="text-white/60 font-mono mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-green-500 text-black font-mono rounded-lg hover:bg-green-400 transition-colors"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <section className="relative min-h-screen bg-black py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="text-gray-400 text-6xl mb-4">📁</div>
              <h2 className="text-2xl font-bold text-white mb-2">No project found</h2>
              <p className="text-white/60 font-mono">Projects will be available soon.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="relative mx-auto mt-28 w-full max-w-7xl py-10">
      {/* Arrière-plan captivant et unique pour les projets */}
      <AnimatedGradient />
      <ProjectNetwork />
      <DataFlow />
      <CreationWaves />
      <TechParticles />
      <ProjectConstruction />
      <CodePattern />
      <ConnectionNetwork />
      <EnergyWaves />
      <MatrixGlitch />
      <EnergyVortex />
      <DataFlow />
      <ParticleGrid />
      <AnimatedGradient />
      <CodePattern />


      {/* Overlay de profondeur avec effet de brouillard */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Effet de lumière ambiante */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%)",
          }}
        />
      </div>

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
          <span className="text-cyan-400">&quot;Portfolio&quot;;</span>
        </span>
      </motion.h2>

      {/* Grille des projets */}
      <div className="relative mx-auto flex w-full">
        {/* Colonne de gauche avec les projets */}
        <div className="mx-auto grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:flex lg:max-w-[65%] lg:flex-col lg:gap-y-24">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={project._id}
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
        className="group flex w-fit items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-slate-800 to-gray-900 border border-gray-600/50 text-white transition-all duration-300 hover:from-slate-700 hover:to-gray-800 hover:border-green-500/50 hover:scale-105 mx-auto md:mt-20 font-mono shadow-xl shadow-black/50 relative z-20 backdrop-blur-sm"
        href="/projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center gap-3">
          <span className="text-green-400 font-semibold">const</span>
          <span className="text-white font-semibold">explorePortfolio</span>
          <span className="text-yellow-400">=</span>
          <span className="text-cyan-400">()</span>
          <span className="text-green-400">=&gt;</span>
          <span className="text-white">"</span>
          <span className="text-cyan-400">View All Projects</span>
          <span className="text-white">"</span>
        </div>

        {/* Icône animée avec effet de code */}
        <div className="relative ml-2">
          <div className="w-8 h-8 rounded-lg border border-green-500/50 bg-green-500/10 transition-all duration-300 group-hover:border-green-400 group-hover:bg-green-500/20 group-hover:scale-110">
            <div className="flex items-center justify-center h-full">
              <ArrowRight className="w-4 h-4 text-green-400 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>

          {/* Effet de particule au survol */}
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.5,
            }}
          />
        </div>
      </motion.a>
    </section>
  );
}
