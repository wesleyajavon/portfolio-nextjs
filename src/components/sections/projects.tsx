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
    'Framer Motion': 'https://img.icons8.com/color/48/framer.png',
    'Motion.dev': 'https://img.icons8.com/color/48/framer.png'
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
    'Motion.dev': '🎭',
    
    // Technologies supplémentaires identifiées dans les projets
    'Prism.js': '✨',
    'Vercel': '🚀'
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
    'Motion.dev': '🎭',
    
    // Technologies supplémentaires identifiées dans les projets
    'Prism.js': '✨',
    'Vercel': '🚀'
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

// Composant de grille de code améliorée
function EnhancedCodeGrid() {
  return (
    <div className="absolute inset-0 opacity-8 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(0,255,255,0.08)_50%),linear-gradient(0deg,transparent_50%,rgba(16,185,129,0.08)_50%)] bg-[length:80px_80px]" />
      
      {/* Lignes de code flottantes */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xs text-cyan-400/25"
          style={{
            left: `${(i * 8) % 90}%`,
            top: `${(i * 7) % 95}%`,
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {[
            "const project = 'Amazing';",
            "function build() {",
            "  return <Awesome />;",
            "}",
            "class Innovation {",
            "  create() {",
            "    return 'Magic';",
            "  }",
            "}",
            "export default project;",
            "const future = 'Bright';",
            "let creativity = 'Infinite';",
            "const passion = 'Coding';"
          ][i]}
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
      {/* Arrière-plan captivant et unique pour les projets */}
      <ProjectNetwork />
      <DataFlow />
      <CreationWaves />
      <TechParticles />
      <ProjectConstruction />
      <EnhancedCodeGrid />
      
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
