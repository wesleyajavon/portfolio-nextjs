"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProjectNetwork } from "../network";
import { 
  DataFlow, 
  TechParticles, 
  CreationWaves, 
  ProjectConstruction 
} from "../background";
import { ProjectCard, ProjectDetails } from "../ui";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  
  // Fonction pour mettre à jour le projet sélectionné
  const handleProjectHover = (index: number) => {
    setSelectedProject(index);
  };

  const projects = [
    {
      title: "YouCode",
      shortDescription: "Modern LMS platform",
      fullDescription: "💻 A modern Learning Management System (LMS) built with Next.js, featuring NextAuth authentication and PostgreSQL database for seamless educational content management.",
      image: "/YouCode.png",
      gradient: "linear-gradient(188.62deg, #1E3A8A 49.9%, #3B82F6 81.7%, #60A5FA 93.88%, #93C5FD 113.5%)",
      technologies: ["Next.js", "NextAuth", "TypeScript", "PostgreSQL", "Grok AI"],
      liveUrl: "https://youcode-nextjs.vercel.app/",
      githubUrl: "https://github.com/wesleyajavon/youcode-nextjs",
      accentColor: "#3B82F6",
      features: ["Course Management System", "User-Friendly Learning Experience", "Artificial Intelligence", "NextAuth Authentication", "PostgreSQL Database", "Responsive Design"],
      category: "Full Stack",
      difficulty: "Difficult",
    },
    {
      title: "Finly",
      shortDescription: "Financial dashboard app",
      fullDescription: "💶 A modern financial dashboard built with Next.js and TypeScript, featuring interactive charts and comprehensive financial data visualization.",
      image: "/Finly.png",
      gradient: "linear-gradient(188.62deg, #065F46 49.9%, #10B981 81.7%, #34D399 93.88%, #6EE7B7 113.5%)",
      technologies: ["Next.js", "React", "TypeScript", "PostgreSQL"],
      liveUrl: "https://finly-nextjs.vercel.app/",
      githubUrl: "https://github.com/wesleyajavon/finly-nextjs",
      accentColor: "#10B981",
      features: ["Financial Dashboard", "Interactive Charts", "Comprehensive Financial Data Visualization", "Real-time Data Updates", "Responsive Design", "Loading State"],
      category: "Full Stack",
      difficulty: "Easy",
    },
    {
      title: "Task Manager V2.1",
      shortDescription: "Full-stack task app",
      fullDescription: "📝 A full-stack task management application with MongoDB backend, JWT authentication, and comprehensive CRUD operations for seamless task organization.",
      image: "/TaskManager.png",
      gradient: "linear-gradient(188.62deg, #7C2D12 49.9%, #EA580C 81.7%, #FB923C 93.88%, #FED7AA 113.5%)",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "TypeScript", "JWT authentication"],
      liveUrl: "https://task-manager-react-v2.vercel.app/",
      githubUrl: "https://github.com/wesleyajavon/task-manager-react-v2",
      accentColor: "#EA580C",
      features: ["Task Management", "CRUD Operations", "JWT Authentication", "MongoDB Backend", "Filtering", "Task Categories"],
      category: "Full Stack",
      difficulty: "Intermediate"
    },
    {
      title: "Chef Claude",
      shortDescription: "AI recipe generator",
      fullDescription: "👨🏾‍🍳 An interactive React app powered by Claude Anthropic AI that generates random recipes with detailed ingredients and cooking instructions.",
      image: "/ChefClaude.png",
      gradient: "linear-gradient(188.62deg, #3D1A7A 49.9%, #7E22CE 81.7%, #C084FC 93.88%, #F9D793 113.5%)",
      technologies: ["React", "Claude Anthropic AI", "API"],
      liveUrl: "https://chef-claude-react.vercel.app/",
      githubUrl: "https://github.com/wesleyajavon/chef-claude-react/tree/main/chef_claude",
      accentColor: "#7E22CE",
      features: ["AI Recipe Generator", "Interactive UI", "Recipe Search", "Claude AI Integration", "Ingredient Lists"],
      category: "Full Stack",
      difficulty: "Easy"
    },
    {
      title: "Blog",
      shortDescription: "RESTful blog API",
      fullDescription: "💻 A RESTful Blog API built with Node.js and Express, featuring SQLite database and JWT authentication for secure blog post management.",
      image: "/Blog.png",
      gradient: "linear-gradient(188.62deg, #134E4A 49.9%, #14B8A6 81.7%, #5EEAD4 93.88%, #F9D793 113.5%)",
      technologies: ["Node.js", "Express.js", "SQLite", "JWT authentication"],
      liveUrl: "https://blog-nodejs-t006.onrender.com/",
      githubUrl: "https://github.com/wesleyajavon/blog-nodejs",
      accentColor: "#14B8A6",
      features: ["Blog System", "RESTful API", "JWT Authentication", "SQLite Database", "CRUD Operations", "Secure Endpoints"],
      category: "Full Stack",
      difficulty: "Intermediate"
    },
    {
      title: "Assembly Endgame",
      shortDescription: "React Hangman game",
      fullDescription: "🎮 A modern React-based Hangman game featuring clean UI design, CSS Modules styling, and dynamic word fetching via API integration.",
      image: "/Assembly.png",
      gradient: "linear-gradient(188.62deg, #6B0D33 49.9%, #DB2777 81.7%, #F472B6 93.88%, #F9D793 113.5%)",
      technologies: ["React", "JavaScript (ES6+)", "CSS Modules", "Fetch API"],
      liveUrl: "https://assembly-react-endgame.vercel.app/",
      githubUrl: "https://github.com/wesleyajavon/assembly-react-endgame/tree/main/assembly-endgame",
      accentColor: "#DB2777",
      features: ["Hangman Game", "Dynamic Word Fetching", "CSS Modules", "Responsive Design", "Score Tracking"],
      category: "Frontend",
      difficulty: "Easy"
    },
    {
      title: "Tenzies",
      shortDescription: "React dice game",
      fullDescription: "🎲 A React-based dice game built to reinforce fundamental React concepts with clean component architecture and smooth user interactions.",
      image: "/Tenzies.png",
      gradient: "linear-gradient(188.62deg, #1E3A8A 49.9%, #3B82F6 81.7%, #60A5FA 93.88%, #93C5FD 113.5%)",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      liveUrl: "https://tenzies-react-nine.vercel.app/",
      githubUrl: "https://github.com/wesleyajavon/tenzies-react/tree/main/tenzies",
      accentColor: "#3B82F6",
      features: ["Dice Game", "React Concepts Reinforcement", "Clean Component Architecture", "Smooth Animations", "Win Detection", "Game Reset"],
      category: "Frontend",
      difficulty: "Easy"
    },
    {
      title: "Meme Generator",
      shortDescription: "Interactive meme app",
      fullDescription: "🧑🏾‍💻 An interactive React meme generator that fetches random meme images and allows users to overlay custom top and bottom text.",
      image: "/MemeGenerator.png",
      gradient: "linear-gradient(188.62deg, #7C2D12 49.9%, #EA580C 81.7%, #FB923C 93.88%, #FED7AA 113.5%)",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      liveUrl: "https://meme-generator-react-ten.vercel.app/",
      githubUrl: "https://github.com/wesleyajavon/meme-generator-react/tree/main/meme-generator",
      accentColor: "#EA580C",
      features: ["Meme Generator", "Image Fetching", "Custom Text Overlay", "Responsive Layout"],
      category: "Frontend",
      difficulty: "Easy"
    },
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
      {/* Arrière-plan captivant et unique pour les projets */}
      <ProjectNetwork />
      <DataFlow />
      <CreationWaves />
      <TechParticles />
      <ProjectConstruction />
      
      
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
