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
  Server
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

// Composant de grille de code
function CodeGrid() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(0,255,0,0.1)_50%),linear-gradient(0deg,transparent_50%,rgba(0,255,0,0.1)_50%)] bg-[length:40px_40px]" />
    </div>
  );
}

// Composant de particules de code avec positions fixes pour éviter l'hydratation
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
    { id: 14, x: 50, y: 75, symbol: '+', color: 'text-purple-400', size: 'text-sm' },
    { id: 15, x: 60, y: 85, symbol: '-', color: 'text-green-400', size: 'text-sm' },
    { id: 16, x: 70, y: 55, symbol: '*', color: 'text-blue-400', size: 'text-sm' },
    { id: 17, x: 80, y: 65, symbol: '&', color: 'text-cyan-400', size: 'text-sm' },
    { id: 18, x: 90, y: 75, symbol: '^', color: 'text-yellow-400', size: 'text-sm' },
    { id: 19, x: 15, y: 85, symbol: '%', color: 'text-purple-400', size: 'text-sm' },
    
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
    { id: 34, x: 88, y: 55, symbol: '💻', color: 'text-cyan-400', size: 'text-sm' }
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

export function Hero() {
  const { scrollY } = useScroll();
  // Ajusté pour que la section disparaisse très lentement
  const y = useTransform(scrollY, [0, 4000], [0, -300]);
  const opacity = useTransform(scrollY, [0, 2000], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Fond avec motif de code */}
      <CodeGrid />
      <CodeParticles />
      
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
            <Terminal className="w-4 h-4 mr-2" />
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
                = "Wesley";
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
            <span className="text-green-400">//</span>{" "}
            <span className="text-white">Full-stack developer passionate about clean code and innovative solutions.</span>
            <br />
            <span className="text-green-400">//</span>{" "}
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
              <Button 
                size="lg" 
                className="relative overflow-hidden rounded-lg bg-green-600 hover:bg-green-700 px-8 py-4 text-lg font-mono font-semibold text-white border-0 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  <Code2 className="mr-2 h-5 w-5" />
                  View Projects
                </span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-lg border-green-500/50 bg-green-500/10 backdrop-blur-sm px-8 py-4 text-lg font-mono font-semibold text-green-400 hover:bg-green-500/20 hover:border-green-500 transition-all duration-300"
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
              { icon: Github, label: "GitHub", href: "#", color: "text-gray-400 hover:text-white" },
              { icon: Linkedin, label: "LinkedIn", href: "#", color: "text-blue-400 hover:text-blue-300" },
              { icon: Mail, label: "Email", href: "#", color: "text-green-400 hover:text-green-300" }
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
