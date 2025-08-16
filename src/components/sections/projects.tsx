"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
    'JavaScript': 'https://img.icons8.com/color/48/javascript.png',
    'HTML': 'https://img.icons8.com/color/48/html-5.png',
    'CSS': 'https://img.icons8.com/color/48/css3.png',
    'CSS Modules': 'https://img.icons8.com/color/48/css3.png',
    'TailwindCSS': 'https://img.icons8.com/color/48/tailwind-css.png',
    
    // Backend
    'Node.js': 'https://img.icons8.com/color/48/nodejs.png',
    'Express': 'https://img.icons8.com/color/48/express-js.png',
    'Express.js': 'https://img.icons8.com/color/48/express-js.png',
    'MongoDB': 'https://img.icons8.com/color/48/mongodb.png',
    'PostgreSQL': 'https://img.icons8.com/color/48/postgresql.png',
    'Redis': 'https://img.icons8.com/color/48/redis.png',
    'Docker': 'https://img.icons8.com/color/48/docker.png',
    'SQLite': 'https://img.icons8.com/color/48/sqlite.png',
    'FastAPI': 'https://img.icons8.com/color/48/fastapi.png',
    
    // Web Technologies
    'WebSocket': 'https://img.icons8.com/color/48/websocket.png',
    'Socket.io': 'https://img.icons8.com/color/48/socket-io.png',
    'Monaco': 'https://img.icons8.com/color/48/visual-studio-code.png',
    'Monaco Editor': 'https://img.icons8.com/color/48/visual-studio-code.png',
    'D3.js': 'https://img.icons8.com/color/48/d3-js.png',
    'Chart.js': 'https://img.icons8.com/color/48/chart-js.png',
    'Fetch API': 'https://img.icons8.com/color/48/api-settings.png',
    'API': 'https://img.icons8.com/color/48/api-settings.png',
    'LocalStorage': 'https://img.icons8.com/color/48/database.png',
    
    // Mobile & Others
    'React Native': 'https://img.icons8.com/color/48/react-native.png',
    'Expo': 'https://img.icons8.com/color/48/expo.png',
    'Firebase': 'https://img.icons8.com/color/48/firebase.png',
    'AWS': 'https://img.icons8.com/color/48/amazon-web-services.png',
    'Lambda': 'https://img.icons8.com/color/48/aws-lambda.png',
    'DynamoDB': 'https://img.icons8.com/color/48/amazon-dynamodb.png',
    'OpenAI': 'https://img.icons8.com/color/48/openai.png',
    'Solidity': 'https://img.icons8.com/color/48/solidity.png',
    'Web3.js': 'https://img.icons8.com/color/48/web3-js.png',
    'IPFS': 'https://img.icons8.com/color/48/ipfs.png',
    'Stripe': 'https://img.icons8.com/color/48/stripe.png',
    'Prisma': 'https://img.icons8.com/color/48/prisma.png',
    'Auth.js': 'https://img.icons8.com/color/48/auth0.png',
    'NextAuth': 'https://img.icons8.com/color/48/authentication.png',
    'JWT authentication': 'https://img.icons8.com/color/48/authentication.png',
    'MDX': 'https://img.icons8.com/color/48/markdown.png',
    'Zustand': 'https://img.icons8.com/color/48/zustand.png',
    'Zod': 'https://img.icons8.com/color/48/zod.png',
    'Redux': 'https://img.icons8.com/color/48/redux.png',
    'NativeWind': 'https://img.icons8.com/color/48/tailwind-css.png',
    'Framer Motion': 'https://img.icons8.com/color/48/framer.png',
    'Claude Anthropic AI': 'https://img.icons8.com/color/48/artificial-intelligence.png',
    'JavaScript (ES6+)': 'https://img.icons8.com/color/48/javascript.png'
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
    'JavaScript': '🟨',
    'HTML': '🌐',
    'CSS': '🎨',
    'CSS Modules': '🎨',
    'TailwindCSS': '🎨',
    
    // Backend
    'Node.js': '🟢',
    'Express': '🚀',
    'Express.js': '🚀',
    'MongoDB': '🍃',
    'PostgreSQL': '🐘',
    'Redis': '🔴',
    'Docker': '🐳',
    'SQLite': '🗄️',
    'FastAPI': '🐍',
    
    // Web Technologies
    'WebSocket': '🔌',
    'Socket.io': '🔌',
    'Monaco': '💻',
    'Monaco Editor': '💻',
    'D3.js': '📊',
    'Chart.js': '📈',
    'Fetch API': '🔗',
    'API': '🔗',
    'LocalStorage': '💾',
    
    // Mobile & Others
    'React Native': '📱',
    'Expo': '📱',
    'Firebase': '🔥',
    'AWS': '☁️',
    'Lambda': 'λ',
    'DynamoDB': '🗄️',
    'OpenAI': '🤖',
    'Solidity': '🔷',
    'Web3.js': '⛓️',
    'IPFS': '🌐',
    'Stripe': '💳',
    'Prisma': '🗄️',
    'Auth.js': '🔐',
    'NextAuth': '🔐',
    'JWT authentication': '🔐',
    'MDX': '📝',
    'Zustand': '🐻',
    'Zod': '🛡️',
    'Redux': '🔄',
    'NativeWind': '🎨',
    'Framer Motion': '🎭',
    'Claude Anthropic AI': '🤖',
    'JavaScript (ES6+)': '🟨'
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
    'Express.js': '🚀',
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
    
    // Nouvelles technologies des projets
    'NextAuth': '🔐',
    'SQLite': '🗄️',
    'JWT authentication': '🔐',
    'Claude Anthropic AI': '🤖',
    'API': '🔌',
    'JavaScript (ES6+)': '🟨',
    'CSS Modules': '🎨',
    'Fetch API': '🔌',
    'HTML': '🌐',
    'CSS': '🎨',
    'LocalStorage': '💾',
    'TailwindCSS': '🎨'
  };

  return techEmojis[techName] || '💻';
};

// Fonction helper pour déterminer si le logo est une URL ou un emoji
const isImageUrl = (logo: string) => {
  return logo.startsWith('http');
};

// Composant pour afficher le logo (image ou emoji)
const TechLogo = ({ tech, size = "w-4 h-4" }: { tech: string; size?: string }) => {
  const [imageError, setImageError] = useState(false);
  const logo = getTechLogo(tech);

  // Si c'est un emoji, l'afficher directement
  if (!isImageUrl(logo)) {
    const emojiSize = size === "w-3 h-3" ? "text-xs" : "text-sm";
    return <span className={`${emojiSize} flex items-center justify-center`}>{logo}</span>;
  }

  // Si c'est une URL d'image, essayer de la charger avec Next.js Image
  if (isImageUrl(logo)) {
    return (
      <>
        {/* Image avec gestion d'erreur silencieuse */}
        <Image
          src={logo}
          alt={tech}
          width={16}
          height={16}
          className={`${size} rounded-sm ${imageError ? 'hidden' : ''}`}
          onError={() => setImageError(true)}
          unoptimized
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





// Composant de réseau de connexions de projets
function ProjectNetwork() {
  const projectNodes = [
    { id: 0, x: 20, y: 25, name: "Next Ventures", color: "#DB2777" },
    { id: 1, x: 80, y: 30, name: "Zenith Minds", color: "#2932CB" },
    { id: 2, x: 15, y: 70, name: "Snippix", color: "#14B8A6" },
    { id: 3, x: 75, y: 75, name: "Portfolio", color: "#7E22CE" },
    { id: 4, x: 50, y: 50, name: "StarForge", color: "#DB2777" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {projectNodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
        >
          {/* Nœud principal */}
          <motion.div
            className="absolute w-4 h-4 rounded-full"
            style={{
              backgroundColor: node.color,
              boxShadow: `0 0 20px ${node.color}`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Anneaux concentriques */}
          <motion.div
            className="absolute w-8 h-8 rounded-full border border-current"
            style={{
              left: "-8px",
              top: "-8px",
              borderColor: node.color,
              opacity: 0.3,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          
          {/* Nom du projet */}
          <motion.div
            className="absolute text-xs font-mono text-white/60 whitespace-nowrap"
            style={{
              left: "20px",
              top: "0px",
              color: node.color,
            }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {node.name}
          </motion.div>
        </motion.div>
      ))}
      
      {/* Lignes de connexion entre projets */}
      {projectNodes.map((node, i) => {
        const nextNode = projectNodes[(i + 1) % projectNodes.length];
        const distance = Math.sqrt(Math.pow(nextNode.x - node.x, 2) + Math.pow(nextNode.y - node.y, 2));
        
        if (distance < 60) {
          return (
            <motion.div
              key={`project-connection-${i}`}
              className="absolute bg-gradient-to-r from-pink-500/30 to-blue-500/30"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: `${distance}%`,
                height: "1px",
                transformOrigin: "left center",
                transform: `rotate(${Math.atan2(nextNode.y - node.y, nextNode.x - node.x) * 180 / Math.PI}deg)`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                delay: i * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

// Composant de flux de données animés
function DataFlow() {
  const dataStreams = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: (i * 12) % 100,
    delay: i * 0.5,
    color: ["#00ffff", "#10b981", "#06b6d4", "#8b5cf6", "#f59e0b", "#ec4899", "#22c55e", "#06b6d4"][i % 8],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {dataStreams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute w-1 h-20 rounded-full"
          style={{
            left: `${stream.x}%`,
            top: "-20px",
            background: `linear-gradient(to bottom, ${stream.color}, transparent)`,
            opacity: 0.4,
          }}
          animate={{
            y: [0, 120],
            opacity: [0, 0.8, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            delay: stream.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Composant d'ondes de création
function CreationWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 w-80 h-80 rounded-full border border-current"
          style={{
            transform: "translate(-50%, -50%)",
            borderColor: i % 2 === 0 ? "rgba(0, 255, 255, 0.2)" : "rgba(16, 185, 129, 0.2)",
          }}
          animate={{
            scale: [0.2, 1.8, 0.2],
            opacity: [0.6, 0, 0.6],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            delay: i * 1.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

// Composant de particules de technologie
function TechParticles() {
  const techIcons = [
    { symbol: "⚛️", x: 10, y: 20, color: "#00ffff" },
    { symbol: "⚡", x: 90, y: 15, color: "#10b981" },
    { symbol: "🔧", x: 5, y: 80, color: "#06b6d4" },
    { symbol: "🚀", x: 85, y: 85, color: "#8b5cf6" },
    { symbol: "💻", x: 50, y: 10, color: "#f59e0b" },
    { symbol: "🌐", x: 45, y: 90, color: "#ec4899" },
    { symbol: "📱", x: 95, y: 60, color: "#22c55e" },
    { symbol: "🎨", x: 25, y: 40, color: "#06b6d4" },
    { symbol: "🔒", x: 70, y: 25, color: "#8b5cf6" },
    { symbol: "📊", x: 30, y: 90, color: "#f59e0b" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {techIcons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-lg"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            filter: `drop-shadow(0 0 8px ${icon.color})`,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {icon.symbol}
        </motion.div>
      ))}
    </div>
  );
}

// Composant d'effet de construction de projet
function ProjectConstruction() {
  const constructionElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: (i * 6.5) % 100,
    y: (i * 4.3) % 100,
    type: ["block", "line", "dot"][i % 3],
    color: ["#00ffff", "#10b981", "#06b6d4", "#8b5cf6", "#f59e0b"][i % 5],
    delay: i * 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {constructionElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            backgroundColor: element.color,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 3,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {element.type === "block" && (
            <div className="w-2 h-2 rounded-sm" />
          )}
          {element.type === "line" && (
            <div className="w-3 h-0.5 rounded-full" />
          )}
          {element.type === "dot" && (
            <div className="w-1 h-1 rounded-full" />
          )}
        </motion.div>
      ))}
    </div>
  );
}



// Composant de carte de projet avec style de code
function ProjectCard({ project, index, onProjectHover }: {
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
              className="lg:group-hover:translate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-gray-600 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3"
              style={{ 
                boxShadow: `0 0 30px ${project.accentColor}`,
                filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
              }}
              src={project.image}
              unoptimized
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
    fullDescription: string;
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
              <h3 className="text-2xl font-bold font-mono text-white">
                {selectedProject.title}
              </h3>
            </div>
            <p className="text-muted-foreground my-2 text-base font-light font-mono">
              {selectedProject.fullDescription}
            </p>
            
            {/* Points de détail du projet */}
            <ul className="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base font-mono">
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
                  <TechLogo tech={tech} />
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
      title: "YouCode",
      shortDescription: "Modern LMS platform",
      fullDescription: "💻 A modern Learning Management System (LMS) built with Next.js, featuring NextAuth authentication and PostgreSQL database for seamless educational content management.",
      image: "/YouCode.png",
      gradient: "linear-gradient(188.62deg, #1E3A8A 49.9%, #3B82F6 81.7%, #60A5FA 93.88%, #93C5FD 113.5%)",
      technologies: ["Next.js", "NextAuth", "TypeScript", "PostgreSQL"],
      liveUrl: "https://youcode-nextjs.vercel.app/",
      githubUrl: "https://github.com/wesleyajavon/youcode-nextjs",
      accentColor: "#3B82F6"
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
      accentColor: "#10B981"
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
      accentColor: "#EA580C"
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
      accentColor: "#7E22CE"
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
      accentColor: "#14B8A6"
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
      accentColor: "#DB2777"
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
      accentColor: "#3B82F6"
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
      accentColor: "#EA580C"
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
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
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
