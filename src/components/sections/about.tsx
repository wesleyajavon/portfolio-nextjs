"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database,
  BookOpen,
  Globe, 
  Star,
  CheckCircle,
  Terminal,
  Target,
  User,
  Brain,
  LucideIcon
} from "lucide-react";
import Image from "next/image";

// Mapping des technologies vers leurs logos Icons8
const getTechLogo = (techName: string) => {
  const techLogos: { [key: string]: string } = {
    // Frontend
    'React': 'https://img.icons8.com/color/48/react-native.png',
    'Next.js': 'https://img.icons8.com/color/48/next.js.png',
    'TypeScript': 'https://img.icons8.com/color/48/typescript.png',
    'Tailwind CSS': 'https://img.icons8.com/color/48/tailwind-css.png',
    'HTML5': 'https://img.icons8.com/color/48/html-5.png',
    'CSS3': 'https://img.icons8.com/color/48/css3.png',
    'JavaScript': 'https://img.icons8.com/color/48/javascript.png',
    'ES6+': 'https://img.icons8.com/color/48/javascript.png',
    
    // Backend
    'Node.js': 'https://img.icons8.com/color/48/nodejs.png',
    'Express': 'https://img.icons8.com/color/48/express-js.png',
    'MongoDB': 'https://img.icons8.com/color/48/mongodb.png',
    'PostgreSQL': 'https://img.icons8.com/color/48/postgresql.png',
    'REST APIs': 'https://img.icons8.com/color/48/api-settings.png',
    
    // Web Technologies
    'Web APIs': 'https://img.icons8.com/color/48/web.png',
    'PWA': 'https://img.icons8.com/color/48/progressive-web-apps.png',
    
    // Génériques
    'Responsive Design': 'https://img.icons8.com/color/48/responsive-design.png',
    'Authentication': 'https://img.icons8.com/color/48/authentication.png',
    'Real-time': 'https://img.icons8.com/color/48/real-time.png',
    'Payment Integration': 'https://img.icons8.com/color/48/payment-history.png',
    'Admin Dashboard': 'https://img.icons8.com/color/48/admin-settings-male.png',
    'Analytics': 'https://img.icons8.com/color/48/analytics.png',
    'Video Conferencing': 'https://img.icons8.com/color/48/video-conference.png',
    'Course Management': 'https://img.icons8.com/color/48/course.png',
    'Progress Tracking': 'https://img.icons8.com/color/48/progress-indicator.png',
    'Interactive Whiteboard': 'https://img.icons8.com/color/48/whiteboard.png',
    'File Sharing': 'https://img.icons8.com/color/48/file-sharing.png',
    'Syntax Highlighting': 'https://img.icons8.com/color/48/code.png',
    'Code Organization': 'https://img.icons8.com/color/48/folder-structure.png',
    'User Collections': 'https://img.icons8.com/color/48/user-group.png',
    'Search & Filters': 'https://img.icons8.com/color/48/search.png',
    'Social Sharing': 'https://img.icons8.com/color/48/share.png',
    'API Integration': 'https://img.icons8.com/color/48/api-settings.png',
    'Interactive Animations': 'https://img.icons8.com/color/48/animation.png',
    'Dark/light Themes': 'https://img.icons8.com/color/48/theme.png',
    'Blog System': 'https://img.icons8.com/color/48/blog.png',
    'Contact Forms': 'https://img.icons8.com/color/48/form.png',
    'Performance Optimization': 'https://img.icons8.com/color/48/performance.png',
    'SEO Optimization': 'https://img.icons8.com/color/48/seo.png',
    'Hero Section': 'https://img.icons8.com/color/48/hero.png',
    'Feature Showcase': 'https://img.icons8.com/color/48/feature.png',
    'Pricing Tables': 'https://img.icons8.com/color/48/price-tag.png',
    'Testimonials': 'https://img.icons8.com/color/48/testimonial.png',
    'Mobile Responsive': 'https://img.icons8.com/color/48/mobile.png',
    'Real-time Analytics': 'https://img.icons8.com/color/48/analytics.png',
    'Interactive Charts': 'https://img.icons8.com/color/48/chart.png',
    'Custom Dashboards': 'https://img.icons8.com/color/48/dashboard.png',
    'Data Export': 'https://img.icons8.com/color/48/export.png',
    'User Permissions': 'https://img.icons8.com/color/48/permission.png',
    'API Monitoring': 'https://img.icons8.com/color/48/monitoring.png',
    'Carbon Footprint Tracking': 'https://img.icons8.com/color/48/eco-friendly.png',
    'Goal Setting': 'https://img.icons8.com/color/48/goal.png',
    'Progress Visualization': 'https://img.icons8.com/color/48/visualization.png',
    'Community Challenges': 'https://img.icons8.com/color/48/community.png',
    'Offline Support': 'https://img.icons8.com/color/48/offline.png',
    'Push Notifications': 'https://img.icons8.com/color/48/notification.png',
    'Real-time Editing': 'https://img.icons8.com/color/48/edit.png',
    'Live Collaboration': 'https://img.icons8.com/color/48/collaboration.png',
    'Version History': 'https://img.icons8.com/color/48/history.png',
    'Code Comments': 'https://img.icons8.com/color/48/comment.png',
    'File Management': 'https://img.icons8.com/color/48/file-management.png',
    'Team Rooms': 'https://img.icons8.com/color/48/team.png'
  };

  // Mapping des emojis de fallback pour les technologies
  const techEmojis: { [key: string]: string } = {
    // Frontend
    'React': '⚛️',
    'Next.js': '⚡',
    'TypeScript': '🔷',
    'Tailwind CSS': '🎨',
    'HTML5': '🌐',
    'CSS3': '🎨',
    'JavaScript': '🟨',
    'ES6+': '🟨',
    
    // Backend
    'Node.js': '🟢',
    'Express': '🚀',
    'MongoDB': '🍃',
    'PostgreSQL': '🐘',
    'REST APIs': '🔌',
    
    // Web Technologies
    'Web APIs': '🌍',
    'PWA': '📱',
    
    // Génériques
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
    'HTML5': '🌐',
    'CSS3': '🎨',
    'JavaScript': '🟨',
    'ES6+': '🟨',
    
    // Backend
    'Node.js': '🟢',
    'Express': '🚀',
    'MongoDB': '🍃',
    'PostgreSQL': '🐘',
    'REST APIs': '🔌',
    
    // Web Technologies
    'Web APIs': '🌍',
    'PWA': '📱',
    
    // Génériques
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

// Composant de forme géométrique flottante avec animation
function FloatingShape({ 
  shape, 
  size, 
  color, 
  x, 
  y, 
  delay, 
  duration 
}: {
  shape: "circle" | "square" | "triangle" | "hexagon";
  size: number;
  color: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
}) {
  const getShape = () => {
    switch (shape) {
      case "circle":
        return "rounded-full";
      case "square":
        return "rotate-45";
      case "triangle":
        return "w-0 h-0 border-l-transparent border-r-transparent border-b-transparent";
      case "hexagon":
        return "w-0 h-0 border-l-transparent border-r-transparent";
      default:
        return "rounded-full";
    }
  };

  const getTriangleStyle = () => {
    if (shape === "triangle") {
      return {
        borderLeft: `${size/2}px solid transparent`,
        borderRight: `${size/2}px solid transparent`,
        borderBottom: `${size}px solid ${color}`,
      };
    }
    return {};
  };

  return (
    <motion.div
      className={`absolute ${getShape()}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: shape === "triangle" ? 0 : size,
        height: shape === "triangle" ? 0 : size,
        backgroundColor: shape === "triangle" ? "transparent" : color,
        ...getTriangleStyle(),
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 10, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Composant de ligne de code flottante avec effet de glitch
function FloatingCodeLine({ 
  code, 
  x, 
  y, 
  delay, 
  color 
}: {
  code: string;
  x: number;
  y: number;
  delay: number;
  color: string;
}) {
  return (
    <motion.div
      className="absolute font-mono text-xs opacity-20 pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        color: color,
      }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.1, 0.4, 0.1],
        x: [0, 5, 0],
      }}
      transition={{
        duration: 4,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {code}
    </motion.div>
  );
}

// Composant de grille de particules avec connexions
function ParticleGrid() {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: (i * 3.7 + 15) % 100,
    y: (i * 2.9 + 25) % 100,
    size: (i % 3) + 1.5,
    color: ["#00ffff", "#10b981", "#06b6d4", "#8b5cf6", "#f59e0b"][i % 5],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 3 + particle.id * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Lignes de connexion entre particules */}
      {particles.slice(0, 10).map((particle, i) => {
        const nextParticle = particles[(i + 1) % particles.length];
        return (
          <motion.div
            key={`line-${i}`}
            className="absolute bg-gradient-to-r from-cyan-400/20 to-blue-400/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${Math.sqrt(Math.pow(nextParticle.x - particle.x, 2) + Math.pow(nextParticle.y - particle.y, 2))}%`,
              height: "1px",
              transformOrigin: "left center",
              transform: `rotate(${Math.atan2(nextParticle.y - particle.y, nextParticle.x - particle.x) * 180 / Math.PI}deg)`,
            }}
            animate={{
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

// Composant de gradient animé circulaire
function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, rgba(16, 185, 129, 0.05) 30%, rgba(6, 182, 212, 0.03) 60%, transparent 100%)",
        }}
        animate={{
          scale: [1, 1.5, 1],
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
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(245, 158, 11, 0.05) 40%, rgba(0, 255, 255, 0.03) 70%, transparent 100%)",
        }}
        animate={{
          scale: [1.5, 1, 1.5],
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

// Composant de motif de code en arrière-plan
function CodePattern() {
  const codeLines = [
    "const developer = 'Wesley';",
    "function createPortfolio() {",
    "  return <AmazingWebsite />;",
    "}",
    "class Skills {",
    "  constructor() {",
    "    this.level = 'Growing';",
    "  }",
    "}",
    "const future = 'Bright';",
    "export default developer;",
    "const passion = 'Coding';",
    "let creativity = 'Infinite';",
    "class Innovation {",
    "  static create() {",
    "    return 'Magic';",
    "  }",
    "}"
  ];

  return (
    <div className="absolute inset-0 opacity-12 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(0,255,255,0.08)_50%),linear-gradient(0deg,transparent_50%,rgba(16,185,129,0.08)_50%)] bg-[length:80px_80px]" />
      
      {codeLines.map((line, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-sm text-cyan-400/35"
          style={{
            left: `${(i * 12) % 85}%`,
            top: `${(i * 10) % 95}%`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
}

// Composant de carte de compétence avec style de code
function SkillCard({ skill, index }: {
  skill: {
    icon: LucideIcon;
    title: string;
    description: string;
    level: number;
    color: string;
  };
  index: number;
}) {

  // Diviser la description en compétences individuelles
  const skillItems = skill.description.split(', ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-green-500/50 hover:bg-gray-800/50 transition-all duration-300 font-mono"
    >
      {/* Icône avec effet de lueur */}
      <div className="flex items-center justify-between mb-4">
        <div className="relative">
          <skill.icon className={`w-8 h-8 ${skill.color === "#00ffff" ? "text-cyan-400" : skill.color === "#10b981" ? "text-green-400" : "text-blue-400"}`} />
          <motion.div
            className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ 
              background: `radial-gradient(circle, ${skill.color}20, transparent 70%)`,
              filter: 'blur(8px)'
            }}
          />
        </div>
        <span className="text-xs text-gray-500 font-mono">skill.js</span>
      </div>

      {/* Titre */}
      <h3 className="text-lg font-semibold text-white mb-4">{skill.title}</h3>

      {/* Badges des compétences */}
      <div className="space-y-3">
        {skillItems.map((skillItem, skillIndex) => (
          <motion.div
            key={skillIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.1 }}
            className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden text-white border-white/20 bg-gray-800/50 hover:bg-gray-700/50"
          >
            <TechLogo tech={skillItem.trim()} size="w-4 h-4" />
            <span>{skillItem.trim()}</span>
          </motion.div>
        ))}
      </div>

      {/* Particules de code flottantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { x: 15, y: 25, symbol: '<' },
          { x: 35, y: 45, symbol: '>' },
          { x: 55, y: 65, symbol: '/' },
          { x: 75, y: 85, symbol: '\\' }
        ].map((particle, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/20 text-xs"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.4,
              repeat: Infinity,
            }}
          >
            {particle.symbol}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Composant de carte de statistique avec style de code
function StatCard({ stat, index }: {
  stat: { icon: LucideIcon; value: string; label: string; color: string };
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.05,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center hover:border-green-500/50 hover:bg-gray-800/50 transition-all duration-300 font-mono cursor-pointer"
    >
      {/* Effet de lueur au survol */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ 
          background: `radial-gradient(circle at center, ${stat.color}15, transparent 70%)`,
          filter: 'blur(20px)'
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Icône avec effet de lueur et animation */}
      <div className="relative inline-block mb-4">
        <motion.div
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? [0, -5, 5, 0] : 0
          }}
          transition={{ 
            scale: { duration: 0.3 },
            rotate: { duration: 0.6, repeat: isHovered ? Infinity : 0, repeatType: "reverse" }
          }}
        >
          <stat.icon className="w-12 h-12 text-green-400 mx-auto" />
        </motion.div>
        
        {/* Lueur autour de l'icône */}
        <motion.div
          className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ 
            background: `radial-gradient(circle, ${stat.color}30, transparent 70%)`,
            filter: 'blur(12px)'
          }}
          animate={{
            scale: isHovered ? 1.3 : 1,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Valeur avec effet de compteur et animation au survol */}
      <motion.div
        className="text-3xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
        whileHover={{
          scale: 1.1,
          color: stat.color,
          textShadow: `0 0 20px ${stat.color}`
        }}
      >
        {stat.value}
      </motion.div>

      {/* Label avec animation au survol */}
      <motion.p 
        className="text-gray-400 text-sm font-medium"
        animate={{
          color: isHovered ? "#ffffff" : "#9ca3af",
          y: isHovered ? -2 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {stat.label}
      </motion.p>

      {/* Particules de code flottantes avec animation au survol */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { x: 25, y: 35, symbol: '<', color: 'text-blue-400' },
          { x: 45, y: 55, symbol: '>', color: 'text-cyan-400' },
          { x: 65, y: 75, symbol: '/', color: 'text-green-400' },
          { x: 85, y: 25, symbol: '\\', color: 'text-purple-400' }
        ].map((particle, i) => (
          <motion.div
            key={i}
            className={`absolute ${particle.color}/20 text-xs`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: isHovered ? [0, -25, 0] : [0, -15, 0],
              opacity: isHovered ? [0, 0.8, 0] : [0, 0.3, 0],
              scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
              rotate: isHovered ? [0, 180, 360] : [0, 0, 0]
            }}
            transition={{
              duration: isHovered ? 1.5 : 2.5,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {particle.symbol}
          </motion.div>
        ))}
      </div>

      {/* Effet de bordure animée au survol */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-transparent"
        style={{
          background: `linear-gradient(45deg, ${stat.color}40, transparent, ${stat.color}40)`,
          backgroundSize: '200% 200%'
        }}
        animate={{
          backgroundPosition: isHovered ? ['0% 0%', '100% 100%', '0% 0%'] : ['0% 0%']
        }}
        transition={{ 
          duration: isHovered ? 2 : 0,
          repeat: isHovered ? Infinity : 0,
          ease: "linear"
        }}
      />
    </motion.div>
  );
}

export function About() {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS, Responsive Design",
      level: 85,
      color: "#00ffff"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Express, MongoDB, PostgreSQL, REST APIs",
      level: 75,
      color: "#10b981"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "HTML5, CSS3, JavaScript ES6+, Web APIs, PWA",
      level: 90,
      color: "#06b6d4"
    }
  ];

  const stats = [
    { icon: BookOpen, value: "10+", label: "Projects Built", color: "#00ffff" },
    { icon: Target, value: "Entry", label: "Level Position", color: "#10b981" },
    { icon: User, value: "Self", label: "Taught Developer", color: "#06b6d4" },
    { icon: Brain, value: "Learning", label: "Mode", color: "#8b5cf6" }
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden bg-black">
      {/* Arrière-plan esthétique sophistiqué */}
      <AnimatedGradient />
      <CodePattern />
      <ParticleGrid />
      
      {/* Formes géométriques flottantes - Plus visibles */}
      <FloatingShape shape="circle" size={120} color="rgba(0, 255, 255, 0.25)" x={10} y={20} delay={0} duration={15} />
      <FloatingShape shape="square" size={100} color="rgba(16, 185, 129, 0.22)" x={85} y={15} delay={2} duration={18} />
      <FloatingShape shape="triangle" size={140} color="rgba(6, 182, 212, 0.20)" x={15} y={80} delay={4} duration={20} />
      <FloatingShape shape="hexagon" size={110} color="rgba(139, 92, 246, 0.23)" x={80} y={75} delay={6} duration={16} />
      <FloatingShape shape="circle" size={90} color="rgba(245, 158, 11, 0.24)" x={50} y={10} delay={8} duration={22} />
      <FloatingShape shape="square" size={130} color="rgba(0, 255, 255, 0.18)" x={5} y={50} delay={10} duration={17} />
      
      {/* Formes supplémentaires pour plus d'impact visuel */}
      <FloatingShape shape="circle" size={80} color="rgba(255, 99, 132, 0.20)" x={70} y={60} delay={3} duration={19} />
      <FloatingShape shape="triangle" size={110} color="rgba(54, 162, 235, 0.21)" x={25} y={40} delay={7} duration={21} />
      <FloatingShape shape="hexagon" size={95} color="rgba(255, 205, 86, 0.19)" x={90} y={45} delay={11} duration={14} />
      
      {/* Lignes de code flottantes - Plus visibles */}
      <FloatingCodeLine code="const skills = ['React', 'Next.js', 'Node.js'];" x={20} y={30} delay={1} color="#00ffff" />
      <FloatingCodeLine code="function buildPortfolio() {" x={70} y={40} delay={3} color="#10b981" />
      <FloatingCodeLine code="  return <Amazing />;" x={25} y={70} delay={5} color="#06b6d4" />
      <FloatingCodeLine code="}" x={75} y={85} delay={7} color="#8b5cf6" />
      <FloatingCodeLine code="export default developer;" x={45} y={60} delay={9} color="#f59e0b" />
      
      {/* Lignes de code supplémentaires pour plus d'impact */}
      <FloatingCodeLine code="const passion = 'Coding';" x={15} y={50} delay={2} color="#ec4899" />
      <FloatingCodeLine code="let future = 'Bright';" x={80} y={25} delay={4} color="#f97316" />
      <FloatingCodeLine code="class Developer {" x={35} y={85} delay={6} color="#22c55e" />
      <FloatingCodeLine code="  constructor() {" x={65} y={65} delay={8} color="#a855f7" />
              <FloatingCodeLine code="    this.skills = 'Growing';" x={40} y={15} delay={10} color="#06b6d4" />
      
      {/* Overlay de profondeur avec effet de brouillard */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      
      {/* Ondes animées en arrière-plan - Plus visibles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-25"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0, 255, 255, 0.25) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.22) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Troisième onde pour plus d'impact */}
        <motion.div
          className="absolute inset-0 opacity-18"
          style={{
            background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.20) 0%, transparent 65%)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 12, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Effet de lumière ambiante - Plus visible */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-35 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0, 255, 255, 0.45) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 120, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.40) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Troisième source de lumière pour plus d'impact */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* En-tête de section avec style de code */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center rounded-lg border border-green-500/30 bg-green-500/10 backdrop-blur-sm px-4 py-2 text-sm font-mono text-green-400 mb-6">
            <Terminal className="w-4 h-4 mr-2" />
            about.js
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-mono">
            <span className="text-blue-400">const</span>{" "}
            <span className="text-green-400">aboutMe</span>{" "}
            <span className="text-yellow-400">=</span>{" "}
            <span className="text-cyan-400">&quot;Developer&quot;;</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-mono">
            <span className="text-white">Passionate about clean code, problem-solving, and continuous learning.</span>
            <br />
            <span className="text-white">Building innovative solutions with modern web technologies.</span>
          </p>
        </motion.div>

        {/* Grille des statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </motion.div>

        {/* Grille des compétences */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Section de présentation personnelle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-gray-900/30 border border-gray-700 rounded-lg p-8 lg:p-12 backdrop-blur-sm"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-2xl font-bold text-white font-mono">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-green-400">myJourney</span>
                <span className="text-yellow-400">()</span>
              </h3>
              <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
            
            <div className="space-y-6 text-gray-300 leading-relaxed font-mono">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg"
              >
                <span className="text-white">After graduating from the University of Luxembourg with a Bachelor in Computer Sciences, I took a break from coding to fully commit to my college soccer career and pursue a Master in Business Analytics—an experience that shaped my discipline, resilience, and teamwork. ⚽️😎</span>
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-lg"
              >
                <span className="text-white">Now, I&apos;m diving back into tech with renewed focus and curiosity, building interactive and responsive full-stack web apps using tools like Next.js, React, Node.js, and other frameworks.</span>
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-lg"
              >
                <span className="text-white">Outside of tech and athletics, I&apos;m also a pianist 🎹 — I love exploring the creative intersection between structure and expression, both in music and in code.</span>
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-lg"
              >
                <span className="text-white">🧠 I&apos;m always eager to learn, collaborate, and grow — and this portfolio reflects that journey toward a MERN and T3 tech stack career.</span>
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Section des qualités personnelles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="bg-gray-900/30 border border-gray-700 rounded-lg p-8 lg:p-12 backdrop-blur-sm mt-8"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-2xl font-bold text-white font-mono">
                <span className="text-blue-400">function</span>{" "}
                <span className="text-green-400">whyChooseMe</span>
                <span className="text-yellow-400">()</span>
              </h3>
              <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { text: "Fast Learner : I quickly adapt to new technologies and frameworks.", color: "green" },
                { text: "Project-Driven : I learn best by building real applications and solving problems.", color: "blue" },
                { text: "Problem Solver : I enjoy debugging and finding elegant solutions to complex challenges.", color: "cyan" },
                { text: "Team Player : I&apos;m eager to collaborate, learn from others, and contribute to team success.", color: "green" },
                { text: "Quality Focus : I write clean, maintainable code and follow best practices.", color: "blue" },
                { text: "Growth Mindset : I see every challenge as an opportunity to learn and improve.", color: "cyan" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                >
                  <CheckCircle className={`
                    ${item.color === "green" ? "text-green-400" : 
                      item.color === "blue" ? "text-blue-400" : "text-cyan-400"
                    }`} 
                  />
                  <p className="text-gray-300 leading-relaxed font-mono">
                    {item.text.split(' : ')[0]}
                    <span className="text-gray-400">: </span>
                    {item.text.split(' : ')[1]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}