"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Terminal,
  Code2,
  Globe,
  Smartphone,
  Database,
  Server,
  Filter,
  Search,
  Star,
  Zap,
  Eye,
  Heart
} from "lucide-react";
import Link from "next/link";
import {
  SophisticatedBackground,
  ProjectNetwork,
  CreationWaves,
  DataFlow,
  TechParticles,
  ProjectConstruction,
  EnhancedCodeGrid
} from "@/components/backgrounds";

// Mapping des technologies vers leurs logos Icons8
const getTechLogo = (techName: string) => {
  const techLogos: { [key: string]: string } = {
    // Frontend
    'React': 'https://img.icons8.com/color/48/react-native.png',
    'Next.js': 'https://img.icons8.com/color/48/next.js.png',
    'TypeScript': 'https://img.icons8.com/color/48/typescript.png',
    'Tailwind CSS': 'https://img.icons8.com/color/48/tailwind-css.png',
    'Vue.js': 'https://img.icons8.com/color/48/vue-js.png',
    'Vite': 'https://img.icons8.com/color/48/vite.png',
    
    // Backend
    'Node.js': 'https://img.icons8.com/color/48/nodejs.png',
    'Express': 'https://img.icons8.com/color/48/express-js.png',
    'MongoDB': 'https://img.icons8.com/color/48/mongodb.png',
    'PostgreSQL': 'https://img.icons8.com/color/48/postgresql.png',
    'Redis': 'https://img.icons8.com/color/48/redis.png',
    'Docker': 'https://img.icons8.com/color/48/docker.png',
    
    // Web Technologies
    'WebSocket': 'https://img.icons8.com/color/48/websocket.png',
    'Socket.io': 'https://img.icons8.com/color/48/socket-io.png',
    'Monaco': 'https://img.icons8.com/color/48/visual-studio-code.png',
    'Monaco Editor': 'https://img.icons8.com/color/48/visual-studio-code.png',
    'D3.js': 'https://img.icons8.com/color/48/d3-js.png',
    'Chart.js': 'https://img.icons8.com/color/48/chart-js.png',
    
    // Mobile & Others
    'React Native': 'https://img.icons8.com/color/48/react-native.png',
    'Expo': 'https://img.icons8.com/color/48/expo.png',
    'Firebase': 'https://img.icons8.com/color/48/firebase.png',
    'AWS': 'https://img.icons8.com/color/48/amazon-web-services.png',
    'Lambda': 'https://img.icons8.com/color/48/aws-lambda.png',
    'DynamoDB': 'https://img.icons8.com/color/48/amazon-dynamodb.png',
    'OpenAI': 'https://img.icons8.com/color/48/openai.png',
    'FastAPI': 'https://img.icons8.com/color/48/fastapi.png',
    'Solidity': 'https://img.icons8.com/color/48/solidity.png',
    'Web3.js': 'https://img.icons8.com/color/48/web3-js.png',
    'IPFS': 'https://img.icons8.com/color/48/ipfs.png',
    'Stripe': 'https://img.icons8.com/color/48/stripe.png',
    'Prisma': 'https://img.icons8.com/color/48/prisma.png',
    'Auth.js': 'https://img.icons8.com/color/48/auth0.png',
    'MDX': 'https://img.icons8.com/color/48/markdown.png',
    'Zustand': 'https://img.icons8.com/color/48/zustand.png',
    'Zod': 'https://img.icons8.com/color/48/zod.png',
    'Redux': 'https://img.icons8.com/color/48/redux.png',
    'NativeWind': 'https://img.icons8.com/color/48/tailwind-css.png',
    'Framer Motion': 'https://img.icons8.com/color/48/framer.png'
  };

  // Mapping des emojis de fallback pour les technologies
  const techEmojis: { [key: string]: string } = {
    // Frontend
    'React': '⚛️',
    'Next.js': '⚡',
    'TypeScript': '🔷',
    'Tailwind CSS': '🎨',
    'Vue.js': '💚',
    'Vite': '🚀',
    
    // Backend
    'Node.js': '🟢',
    'Express': '🚀',
    'MongoDB': '🍃',
    'PostgreSQL': '🐘',
    'Redis': '🔴',
    'Docker': '🐳',
    
    // Web Technologies
    'WebSocket': '🔌',
    'Socket.io': '🔌',
    'Monaco': '💻',
    'Monaco Editor': '💻',
    'D3.js': '📊',
    'Chart.js': '📈',
    
    // Mobile & Others
    'React Native': '📱',
    'Expo': '📱',
    'Firebase': '🔥',
    'AWS': '☁️',
    'Lambda': 'λ',
    'DynamoDB': '🗄️',
    'OpenAI': '🤖',
    'FastAPI': '🐍',
    'Solidity': '🔗',
    'Web3.js': '🌐',
    'IPFS': '🌐',
    'Stripe': '💳',
    'Prisma': '🗃️',
    'Auth.js': '🔐',
    'MDX': '📝',
    'Zustand': '🐻',
    'Zod': '🛡️',
    'Redux': '🔄',
    'NativeWind': '🎨',
    'Framer Motion': '🎭',
    
    // Technologies supplémentaires identifiées dans les projets
    'Prism.js': '✨',
    'Vercel': '🚀',
    
    // Technologies génériques et fonctionnalités
    'REST APIs': '🔌',
    'Web APIs': '🌍',
    'PWA': '📱',
    'Responsive Design': '📱',
    'Authentication': '🔐',
    'Real-time': '⚡',
    'Payment Integration': '💳',
    'Admin Dashboard': '📊',
    'Analytics': '📈',
    'Video Conferencing': '📹',
    'Course Management': '📚',
    'Progress Tracking': '📊',
    'Interactive Whiteboard': '✏️',
    'File Sharing': '📁',
    'Syntax Highlighting': '✨',
    'Code Organization': '🗂️',
    'User Collections': '👥',
    'Search & Filters': '🔍',
    'Social Sharing': '📤',
    'API Integration': '🔗',
    'Interactive Animations': '🎭',
    'Dark/light Themes': '🌓',
    'Blog System': '📝',
    'Contact Forms': '📧',
    'Performance Optimization': '⚡',
    'SEO Optimization': '🔍',
    'Hero Section': '🎯',
    'Feature Showcase': '✨',
    'Pricing Tables': '💰',
    'Testimonials': '💬',
    'Mobile Responsive': '📱',
    'Real-time Analytics': '📊',
    'Interactive Charts': '📈',
    'Custom Dashboards': '🎛️',
    'Data Export': '📤',
    'User Permissions': '🔐',
    'API Monitoring': '📡',
    'Carbon Footprint Tracking': '🌱',
    'Goal Setting': '🎯',
    'Progress Visualization': '📊',
    'Community Challenges': '🏆',
    'Offline Support': '📴',
    'Push Notifications': '🔔',
    'Real-time Editing': '✏️',
    'Live Collaboration': '👥',
    'Version History': '📜',
    'Code Comments': '💬',
    'File Management': '📁',
    'Team Rooms': '🏠'
  };

  // Retourner l'icône Icons8 si disponible, sinon l'emoji de fallback
  return techLogos[techName] || techEmojis[techName] || '💻'; // Icône par défaut si rien n'est trouvé
};

// Fonction helper pour obtenir l'emoji de fallback d'une technologie
const getTechEmoji = (techName: string) => {
  const techEmojis: { [key: string]: string } = {
    // Frontend
    'React': '⚛️',
    'Next.js': '⚡',
    'TypeScript': '🔷',
    'Tailwind CSS': '🎨',
    'Vue.js': '💚',
    'Vite': '🚀',
    
    // Backend
    'Node.js': '🟢',
    'Express': '🚀',
    'MongoDB': '🍃',
    'PostgreSQL': '🐘',
    'Redis': '🔴',
    'Docker': '🐳',
    
    // Web Technologies
    'WebSocket': '🔌',
    'Socket.io': '🔌',
    'Monaco': '💻',
    'Monaco Editor': '💻',
    'D3.js': '📊',
    'Chart.js': '📈',
    
    // Mobile & Others
    'React Native': '📱',
    'Expo': '📱',
    'Firebase': '🔥',
    'AWS': '☁️',
    'Lambda': 'λ',
    'DynamoDB': '🗄️',
    'OpenAI': '🤖',
    'FastAPI': '🐍',
    'Solidity': '🔗',
    'Web3.js': '🌐',
    'IPFS': '🌐',
    'Stripe': '💳',
    'Prisma': '🗃️',
    'Auth.js': '🔐',
    'MDX': '📝',
    'Zustand': '🐻',
    'Zod': '🛡️',
    'Redux': '🔄',
    'NativeWind': '🎨',
    'Framer Motion': '🎭',
    
    // Technologies supplémentaires identifiées dans les projets
    'Prism.js': '✨',
    'Vercel': '🚀',
    
    // Technologies génériques et fonctionnalités
    'REST APIs': '🔌',
    'Web APIs': '🌍',
    'PWA': '📱',
    'Responsive Design': '📱',
    'Authentication': '🔐',
    'Real-time': '⚡',
    'Payment Integration': '💳',
    'Admin Dashboard': '📊',
    'Analytics': '📈',
    'Video Conferencing': '📹',
    'Course Management': '📚',
    'Progress Tracking': '📊',
    'Interactive Whiteboard': '✏️',
    'File Sharing': '📁',
    'Syntax Highlighting': '✨',
    'Code Organization': '🗂️',
    'User Collections': '👥',
    'Search & Filters': '🔍',
    'Social Sharing': '📤',
    'API Integration': '🔗',
    'Interactive Animations': '🎭',
    'Dark/light Themes': '🌓',
    'Blog System': '📝',
    'Contact Forms': '📧',
    'Performance Optimization': '⚡',
    'SEO Optimization': '🔍',
    'Hero Section': '🎯',
    'Feature Showcase': '✨',
    'Pricing Tables': '💰',
    'Testimonials': '💬',
    'Mobile Responsive': '📱',
    'Real-time Analytics': '📊',
    'Interactive Charts': '📈',
    'Custom Dashboards': '🎛️',
    'Data Export': '📤',
    'User Permissions': '🔐',
    'API Monitoring': '📡',
    'Carbon Footprint Tracking': '🌱',
    'Goal Setting': '🎯',
    'Progress Visualization': '📊',
    'Community Challenges': '🏆',
    'Offline Support': '📴',
    'Push Notifications': '🔔',
    'Real-time Editing': '✏️',
    'Live Collaboration': '👥',
    'Version History': '📜',
    'Code Comments': '💬',
    'File Management': '📁',
    'Team Rooms': '🏠'
  };

  return techEmojis[techName] || '💻';
};

// Fonction helper pour déterminer si le logo est une URL ou un emoji
const isImageUrl = (logo: string) => {
  return logo.startsWith('http');
};

// Composant pour afficher le logo (image ou emoji)
const TechLogo = ({ tech, size = "w-4 h-4" }: { tech: string; size?: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const logo = getTechLogo(tech);
  
  // Si c'est un emoji, l'afficher directement
  if (!isImageUrl(logo)) {
    const emojiSize = size === "w-3 h-3" ? "text-xs" : "text-sm";
    return <span className={`${emojiSize} flex items-center justify-center`}>{logo}</span>;
  }
  
  // Si c'est une URL d'image, essayer de la charger
  if (isImageUrl(logo)) {
    return (
      <>
        {/* Image avec gestion d'erreur */}
        <img 
          src={logo} 
          alt={tech}
          className={`${size} rounded-sm ${imageError ? 'hidden' : ''}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
        
        {/* Emoji de fallback en cas d'erreur */}
        {imageError && (
          <span className={`${size === "w-3 h-3" ? "text-xs" : "text-sm"} flex items-center justify-center`}>
            {getTechEmoji(tech)}
          </span>
        )}
      </>
    );
  }
  
  // Fallback final
  return <span className={`${size === "w-3 h-3" ? "text-xs" : "text-sm"} flex items-center justify-center`}>💻</span>;
};

// Composant de carte de projet améliorée
function ProjectCard({ project, index }: {
  project: {
    title: string;
    description: string;
    image: string;
    gradient: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    accentColor: string;
    category: string;
    difficulty: string;
    features: string[];
  };
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-900/30 backdrop-blur-sm"
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
      
      <div className="p-6">
        {/* En-tête du projet */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2 font-mono">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              {project.description}
            </p>
            
            {/* Métadonnées du projet */}
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
              <span className="flex items-center gap-1">
                <Code2 className="w-3 h-3" />
                {project.category}
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3" />
                {project.difficulty}
              </span>
            </div>
          </div>
          
          {/* Icône de catégorie */}
          <div className="ml-4 p-3 rounded-full bg-gray-800/50 border border-gray-600/50">
            {project.category === 'Frontend' && <Globe className="w-6 h-6 text-blue-400" />}
            {project.category === 'Full Stack' && <Server className="w-6 h-6 text-green-400" />}
            {project.category === 'Mobile' && <Smartphone className="w-6 h-6 text-purple-400" />}
            {project.category === 'Backend' && <Database className="w-6 h-6 text-cyan-400" />}
          </div>
        </div>
        
        {/* Image du projet */}
        <div className="relative mb-6 overflow-hidden rounded-xl">
          <motion.img 
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Overlay au survol */}
          <motion.div
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-4">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
        
        {/* Technologies utilisées */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-xs rounded-full border border-gray-600/50 bg-gray-800/50 text-gray-300 hover:border-gray-500/50 transition-colors flex items-center gap-2"
              >
                <TechLogo tech={tech} size="w-3 h-3" />
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Fonctionnalités clés */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center gap-2 text-xs text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              View Project
            </span>
          </div>
          
          <motion.button
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            style={{
              backgroundColor: project.accentColor,
              color: 'white',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// Composant de filtre
function FilterSection({ activeFilter, setActiveFilter, technologies }: {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  technologies: string[];
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <Filter className="w-5 h-5 text-gray-400" />
        <h3 className="text-lg font-semibold text-white">Filter by Technology</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <motion.button
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            activeFilter === 'All' 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
          }`}
          onClick={() => setActiveFilter('All')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Projects
        </motion.button>
        
        {technologies.map((tech) => (
          <motion.button
            key={tech}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeFilter === tech 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
            }`}
            onClick={() => setActiveFilter(tech)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <TechLogo tech={tech} />
            {tech}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      title: "Next Ventures",
      description: "A comprehensive online platform for entrepreneurs to pitch ideas, explore innovative concepts, and gain exposure with a clean, modern design that enhances user engagement.",
      image: "/api/placeholder/600/400",
      gradient: "linear-gradient(188.62deg, #6B0D33 49.9%, #DB2777 81.7%, #F472B6 93.88%, #F9D793 113.5%)",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Stripe"],
      liveUrl: "/projects/next-venture",
      githubUrl: "#",
      accentColor: "#DB2777",
      category: "Full Stack",
      difficulty: "Advanced",
      features: ["User authentication & profiles", "Real-time notifications", "Payment integration", "Responsive design", "Admin dashboard", "Analytics tracking"]
    },
    {
      title: "Zenith Minds",
      description: "An innovative educational platform that seamlessly connects students and instructors, creating enhanced learning experiences through interactive features and intuitive design.",
      image: "/api/placeholder/600/400",
      gradient: "linear-gradient(188.62deg, #070E57 49.9%, #2932CB 81.7%, #7980FF 93.88%, #F9D793 113.5%)",
      technologies: ["React", "Node.js", "Express", "Socket.io", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "/projects/zenith-minds",
      githubUrl: "#",
      accentColor: "#2932CB",
      category: "Full Stack",
      difficulty: "Advanced",
      features: ["Real-time messaging", "Video conferencing", "Course management", "Progress tracking", "Interactive whiteboard", "File sharing"]
    },
    {
      title: "Snippix",
      description: "A powerful and intuitive platform for creating, organizing, and sharing code snippets with developers worldwide, featuring syntax highlighting and collaborative features.",
      image: "/api/placeholder/600/400",
      gradient: "linear-gradient(188.62deg, #134E4A 49.9%, #14B8A6 81.7%, #5EEAD4 93.88%, #F9D793 113.5%)",
      technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "Prism.js", "Vercel"],
      liveUrl: "/projects/snippix",
      githubUrl: "#",
      accentColor: "#14B8A6",
      category: "Full Stack",
      difficulty: "Intermediate",
      features: ["Syntax highlighting", "Code organization", "User collections", "Search & filters", "Social sharing", "API integration"]
    },
    {
      title: "Personal Portfolio",
      description: "A stunning and innovative portfolio website showcasing cutting-edge web development techniques, creative UI/UX design, and modern development practices.",
      image: "/api/placeholder/600/400",
      gradient: "linear-gradient(188.62deg, #3D1A7A 49.9%, #7E22CE 81.7%, #C084FC 93.88%, #F9D793 113.5%)",
      technologies: ["Next.js", "React", "TypeScript", "MDX", "Tailwind CSS", "Framer Motion", "Zustand", "Zod", "PostgreSQL", "Prisma", "Auth.js"],
      liveUrl: "/projects/portfolio",
      githubUrl: "#",
      accentColor: "#7E22CE",
      category: "Frontend",
      difficulty: "Advanced",
      features: ["Interactive animations", "Dark/light themes", "Blog system", "Contact forms", "Performance optimization", "SEO optimization"]
    },
    {
      title: "StarForge",
      description: "A sleek and modern AI SaaS landing page designed to maximize user engagement and conversion rates through compelling design and seamless user experience.",
      image: "/api/placeholder/600/400",
      gradient: "linear-gradient(188.62deg, #6B0D33 49.9%, #DB2777 81.7%, #F472B6 93.88%, #F9D793 113.5%)",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
      liveUrl: "/projects/star-forge",
      githubUrl: "#",
      accentColor: "#DB2777",
      category: "Frontend",
      difficulty: "Intermediate",
      features: ["Hero section", "Feature showcase", "Pricing tables", "Testimonials", "Contact forms", "Mobile responsive"]
    },
    {
      title: "TechFlow Dashboard",
      description: "A comprehensive analytics dashboard for developers and teams, providing insights into project performance, code quality, and team productivity metrics.",
      image: "/api/placeholder/600/400",
      gradient: "linear-gradient(188.62deg, #1E3A8A 49.9%, #3B82F6 81.7%, #60A5FA 93.88%, #93C5FD 113.5%)",
      technologies: ["React", "TypeScript", "D3.js", "Chart.js", "Node.js", "PostgreSQL"],
      liveUrl: "/projects/techflow",
      githubUrl: "#",
      accentColor: "#3B82F6",
      category: "Full Stack",
      difficulty: "Advanced",
      features: ["Real-time analytics", "Interactive charts", "Custom dashboards", "Data export", "User permissions", "API monitoring"]
    },
    {
      title: "EcoTracker",
      description: "A mobile-first web application for tracking environmental impact and sustainability goals, helping users make eco-conscious decisions in their daily lives.",
      image: "/api/placeholder/600/400",
      gradient: "linear-gradient(188.62deg, #065F46 49.9%, #10B981 81.7%, #34D399 93.88%, #6EE7B7 113.5%)",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "TypeScript", "NativeWind"],
      liveUrl: "/projects/ecotracker",
      githubUrl: "#",
      accentColor: "#10B981",
      category: "Mobile",
      difficulty: "Intermediate",
      features: ["Carbon footprint tracking", "Goal setting", "Progress visualization", "Community challenges", "Offline support", "Push notifications"]
    },
    {
      title: "CodeCollab",
      description: "A real-time collaborative code editor with features like live sharing, version control, and team collaboration tools for remote development teams.",
      image: "/api/placeholder/600/400",
      gradient: "linear-gradient(188.62deg, #7C2D12 49.9%, #EA580C 81.7%, #FB923C 93.88%, #FED7AA 113.5%)",
      technologies: ["WebSocket", "Monaco Editor", "React", "Node.js", "Redis", "Docker"],
      liveUrl: "/projects/codecollab",
      githubUrl: "#",
      accentColor: "#EA580C",
      category: "Full Stack",
      difficulty: "Advanced",
      features: ["Real-time editing", "Live collaboration", "Version history", "Code comments", "File management", "Team rooms"]
    }
  ];

  // Extraire toutes les technologies uniques
  const allTechnologies = Array.from(new Set(projects.flatMap(p => p.technologies))).sort();

  // Filtrer les projets
  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'All' || project.technologies.includes(activeFilter);
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Arrière-plan sophistiqué et esthétique */}
      <SophisticatedBackground />
      <ProjectNetwork />
      <CreationWaves />
      <DataFlow />
      <TechParticles />
      <ProjectConstruction />
      <EnhancedCodeGrid />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12">
        {/* Bouton retour - déplacé en dehors de l'en-tête centré */}
        <div className="flex justify-start mb-8">
          <Link href="/">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-600/50 text-gray-300 hover:bg-gray-700/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </motion.button>
          </Link>
        </div>

        {/* En-tête de page */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center rounded-lg border border-green-500/30 bg-green-500/10 backdrop-blur-sm px-4 py-2 text-sm font-mono text-green-400 mb-6">
            <Terminal className="w-4 h-4 mr-2" />
            projects.js
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-mono">
            <span className="text-blue-400">const</span>{" "}
            <span className="text-green-400">portfolio</span>{" "}
            <span className="text-yellow-400">=</span>{" "}
            <span className="text-cyan-400">"Projects";</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-mono">
            <span className="text-white">A collection of innovative projects showcasing modern web development,</span>
            <br />
            <span className="text-white">creative problem-solving, and cutting-edge technologies.</span>
          </p>
        </motion.div>

        {/* Barre de recherche */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:bg-gray-700/50 transition-colors"
            />
          </div>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FilterSection 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
            technologies={allTechnologies}
          />
        </motion.div>

        {/* Grille des projets */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
          </motion.div>
        )}

        {/* Statistiques */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Code2, value: projects.length, label: "Total Projects", color: "text-cyan-400" },
              { icon: Star, value: "8", label: "Technologies", color: "text-yellow-400" },
              { icon: Zap, value: "3", label: "Categories", color: "text-green-400" },
              { icon: Heart, value: "100%", label: "Passion", color: "text-pink-400" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl mb-2 ${stat.color}`}>
                  <stat.icon className="w-12 h-12 mx-auto" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
