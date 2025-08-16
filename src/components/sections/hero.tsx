"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Code2, 
  Github, 
  Linkedin, 
  Mail, 
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Composant de ligne de code animée
function CodeLine({ code, delay = 0, isTyping = false }: { 
  code: string; 
  delay?: number; 
  isTyping?: boolean;
}) {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isTyping && currentIndex < code.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(code.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, code, isTyping]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center space-x-2 text-green-400 font-mono text-sm"
    >
      <span className="text-blue-400">$</span>
      <span className="text-white">{isTyping ? displayedCode : code}</span>
      {isTyping && currentIndex < code.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="w-2 h-4 bg-green-400"
        />
      )}
    </motion.div>
  );
}

// Composant de terminal stylisé
function TerminalWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-4xl mx-auto mb-12"
    >
      {/* Barre de titre du terminal */}
      <div className="bg-gray-800 rounded-t-lg px-4 py-2 flex items-center space-x-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-400 text-sm ml-4">terminal</span>
      </div>
      
      {/* Contenu du terminal */}
      <div className="bg-black rounded-b-lg p-6 font-mono text-sm">
        <CodeLine code="npm install @developer/portfolio" delay={0.5} isTyping={true} />
        <CodeLine code="cd portfolio && npm run dev" delay={1.5} />
        <CodeLine code="// Starting development server..." delay={2.5} />
        <CodeLine code="✓ Ready on http://localhost:3000" delay={3.5} />
        <CodeLine code="✓ Compiled successfully" delay={4.5} />
        <CodeLine code="> Welcome to Wesley's Portfolio" delay={5.5} />
      </div>
    </motion.div>
  );
}

// Composant de réseau de connexions dynamiques
function ConnectionNetwork() {
  const nodes = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: (i * 3.6 + 12) % 88,
    y: (i * 2.9 + 18) % 82,
    size: (i % 4) + 1.5,
    color: ["#00ffff", "#10b981", "#06b6d4", "#8b5cf6", "#f59e0b", "#ec4899"][i % 6],
    pulse: i * 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
            backgroundColor: node.color,
            boxShadow: `0 0 25px ${node.color}`,
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 1, 0.4],
            boxShadow: [
              `0 0 25px ${node.color}`,
              `0 0 50px ${node.color}`,
              `0 0 25px ${node.color}`,
            ],
          }}
          transition={{
            duration: 3 + node.pulse,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Lignes de connexion animées */}
      {nodes.slice(0, 20).map((node, i) => {
        const nextNode = nodes[(i + 1) % nodes.length];
        const distance = Math.sqrt(Math.pow(nextNode.x - node.x, 2) + Math.pow(nextNode.y - node.y, 2));
        
        if (distance < 35) {
          return (
            <motion.div
              key={`connection-${i}`}
              className="absolute bg-gradient-to-r from-cyan-400/30 to-blue-400/30"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: `${distance}%`,
                height: "1.5px",
                transformOrigin: "left center",
                transform: `rotate(${Math.atan2(nextNode.y - node.y, nextNode.x - node.x) * 180 / Math.PI}deg)`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                delay: i * 0.3,
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

// Composant d'ondes d'énergie
function EnergyWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 w-96 h-96 rounded-full border-2 border-current"
          style={{
            transform: "translate(-50%, -50%)",
            borderColor: i % 2 === 0 ? "rgba(0, 255, 255, 0.15)" : "rgba(16, 185, 129, 0.12)",
          }}
          animate={{
            scale: [0.3, 2, 0.3],
            opacity: [0.6, 0, 0.6],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 8 + i * 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

// Composant de particules de technologie avancées
function TechParticles() {
  const techIcons = [
    { symbol: "⚛️", x: 8, y: 15, color: "#00ffff", size: 1.2 },
    { symbol: "⚡", x: 92, y: 20, color: "#10b981", size: 1.1 },
    { symbol: "🔧", x: 15, y: 80, color: "#06b6d4", size: 1.3 },
    { symbol: "🚀", x: 85, y: 85, color: "#8b5cf6", size: 1.0 },
    { symbol: "💻", x: 50, y: 12, color: "#f59e0b", size: 1.4 },
    { symbol: "🌐", x: 45, y: 90, color: "#ec4899", size: 1.1 },
    { symbol: "📱", x: 95, y: 65, color: "#22c55e", size: 1.2 },
    { symbol: "🎨", x: 25, y: 45, color: "#06b6d4", size: 1.3 },
    { symbol: "🔒", x: 75, y: 30, color: "#8b5cf6", size: 1.0 },
    { symbol: "📊", x: 35, y: 95, color: "#f59e0b", size: 1.1 },
    { symbol: "⚙️", x: 65, y: 18, color: "#ec4899", size: 1.2 },
    { symbol: "🔮", x: 18, y: 70, color: "#22c55e", size: 1.3 },
    { symbol: "🎯", x: 88, y: 55, color: "#06b6d4", size: 1.1 },
    { symbol: "💡", x: 42, y: 25, color: "#8b5cf6", size: 1.4 },
    { symbol: "🌟", x: 72, y: 75, color: "#f59e0b", size: 1.2 }
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
            filter: `drop-shadow(0 0 12px ${icon.color})`,
            fontSize: `${icon.size}rem`,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 12, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 7 + i * 0.4,
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

// Composant d'effet de glitch matrix
function MatrixGlitch() {
  const glitchLines = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: (i * 6.5) % 100,
    delay: i * 0.4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-15">
      {glitchLines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
          style={{
            left: `${line.x}%`,
            top: `${(line.id * 6.5) % 100}%`,
            width: "250px",
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
            x: [0, 25, 0],
          }}
          transition={{
            duration: 3,
            delay: line.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Composant de vortex énergétique
function EnergyVortex() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-1/2 w-80 h-80 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          background: "conic-gradient(from 0deg, transparent, rgba(0, 255, 255, 0.2), transparent, rgba(16, 185, 129, 0.2), transparent)",
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute left-1/2 top-1/2 w-56 h-56 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          background: "conic-gradient(from 180deg, transparent, rgba(139, 92, 246, 0.25), transparent, rgba(245, 158, 11, 0.25), transparent)",
        }}
        animate={{
          rotate: [360, 0],
          scale: [1.3, 1, 1.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

// Composant de flux de données
function DataFlow() {
  const dataStreams = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: (i * 8.3) % 100,
    delay: i * 0.6,
    color: ["#00ffff", "#10b981", "#06b6d4", "#8b5cf6", "#f59e0b", "#ec4899"][i % 6],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {dataStreams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute w-1 h-24 rounded-full"
          style={{
            left: `${stream.x}%`,
            top: "-24px",
            background: `linear-gradient(to bottom, ${stream.color}, transparent)`,
            opacity: 0.3,
          }}
          animate={{
            y: [0, 140],
            opacity: [0, 0.7, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            delay: stream.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  // Ajusté pour que la section disparaisse très lentement
  const y = useTransform(scrollY, [0, 4000], [0, -300]);
  const opacity = useTransform(scrollY, [0, 2000], [1, 0]);

  // Fonction pour télécharger le CV
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Wesley_Ajavon_Resume (2).pdf';
    link.download = 'Wesley_Ajavon_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Arrière-plan captivant et sophistiqué */}
      <ConnectionNetwork />
      <EnergyWaves />
      <TechParticles />
      <MatrixGlitch />
      <EnergyVortex />
      <DataFlow />
      
      {/* Overlay de profondeur avec effet de brouillard */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      
      {/* Effet de lumière ambiante */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
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
      
      {/* Overlay subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32"
      >
        <div className="text-center">
          {/* Badge de statut développeur */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center rounded-lg border border-green-500/30 bg-green-500/10 backdrop-blur-sm px-4 py-2 text-sm font-mono text-green-400 mb-8 group hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300"
          >
            <Code2 className="w-4 h-4 mr-2" />
            <span className="text-green-400 font-mono">
              STATUS: AVAILABLE_FOR_HIRE
            </span>
          </motion.div>

          {/* Terminal principal */}
          <TerminalWindow />

          {/* Titre principal avec style de code */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-4xl font-mono font-bold text-white sm:text-6xl lg:text-7xl mb-6 leading-tight">
              <motion.span 
                className="block text-blue-400"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                const
              </motion.span>
              <motion.span 
                className="block text-green-400"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                developer
              </motion.span>
              <motion.span 
                className="block text-yellow-400"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                = &quot;Wesley&quot;;
              </motion.span>
            </h1>
          </motion.div>

          {/* Description avec style de commentaire */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="text-lg text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed font-mono"
          >
            <span className="text-green-400">{"//"}</span>{" "}
            <span className="text-white">Full-stack developer passionate about clean code and innovative solutions.</span>
            <br />
            <span className="text-green-400">{"//"}</span>{" "}
            <span className="text-white">Specialized in React, Next.js, Node.js with 10+ projects built from scratch.</span>
          </motion.p>

          {/* Boutons CTA avec style de terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Link href="/projects">
                <Button 
                  size="lg" 
                  className="relative overflow-hidden rounded-lg bg-green-600 hover:bg-green-700 px-8 py-4 text-lg font-mono font-semibold text-white border-0 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center">
                    <Code2 className="mr-2 h-5 w-5" />
                    View Projects
                  </span>
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-lg border-green-500/50 bg-green-500/10 backdrop-blur-sm px-8 py-4 text-lg font-mono font-semibold text-green-400 hover:bg-green-500/20 hover:border-green-500 transition-all duration-300"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Liens sociaux avec style de code */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="flex justify-center items-center gap-8"
          >
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/wesleyajavon", color: "text-gray-400 hover:text-white" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/wesleyajv/", color: "text-blue-400 hover:text-blue-300" },
              { icon: Mail, label: "Email", href: "mailto:wesleyajavon2203@hotmail.com", color: "text-green-400 hover:text-green-300" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={`group flex items-center gap-3 px-6 py-3 rounded-lg border border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 font-mono ${social.color}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <social.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Indicateur de scroll avec style de code */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-gray-500 font-mono text-sm">
              <span>scroll.down()</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-2"
              >
                <div className="w-0.5 h-6 bg-green-500"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
