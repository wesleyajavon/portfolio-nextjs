"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Terminal
} from "lucide-react";

// Composant de réseau de connexions dynamiques
function ConnectionNetwork() {
  const nodes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (i * 4.5 + 10) % 90,
    y: (i * 3.2 + 15) % 80,
    size: (i % 4) + 2,
    color: ["#00ffff", "#10b981", "#06b6d4", "#8b5cf6", "#f59e0b", "#ec4899"][i % 6],
    pulse: i * 0.3,
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
            boxShadow: `0 0 20px ${node.color}`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
            boxShadow: [
              `0 0 20px ${node.color}`,
              `0 0 40px ${node.color}`,
              `0 0 20px ${node.color}`,
            ],
          }}
          transition={{
            duration: 2 + node.pulse,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Lignes de connexion animées */}
      {nodes.slice(0, 15).map((node, i) => {
        const nextNode = nodes[(i + 1) % nodes.length];
        const distance = Math.sqrt(Math.pow(nextNode.x - node.x, 2) + Math.pow(nextNode.y - node.y, 2));
        
        if (distance < 40) {
          return (
            <motion.div
              key={`connection-${i}`}
              className="absolute bg-gradient-to-r from-cyan-400/40 to-blue-400/40"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: `${distance}%`,
                height: "2px",
                transformOrigin: "left center",
                transform: `rotate(${Math.atan2(nextNode.y - node.y, nextNode.x - node.x) * 180 / Math.PI}deg)`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
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

// Composant d'ondes sonores animées
function SoundWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 w-96 h-96 rounded-full border-2 border-cyan-400/30"
          style={{
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [0.1, 1.5, 0.1],
            opacity: [0.8, 0, 0.8],
            borderColor: [
              "rgba(0, 255, 255, 0.3)",
              "rgba(16, 185, 129, 0.3)",
              "rgba(6, 182, 212, 0.3)",
            ],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

// Composant de particules de contact qui se connectent
function ContactParticles() {
  const particles = [
    { symbol: "📧", x: 20, y: 30, color: "#00ffff" },
    { symbol: "💻", x: 80, y: 25, color: "#10b981" },
    { symbol: "🔗", x: 15, y: 70, color: "#06b6d4" },
    { symbol: "🌟", x: 75, y: 75, color: "#8b5cf6" },
    { symbol: "🚀", x: 50, y: 15, color: "#f59e0b" },
    { symbol: "⚡", x: 45, y: 80, color: "#ec4899" },
    { symbol: "🎯", x: 85, y: 50, color: "#22c55e" },
    { symbol: "💡", x: 25, y: 50, color: "#06b6d4" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            filter: `drop-shadow(0 0 10px ${particle.color})`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {particle.symbol}
        </motion.div>
      ))}
    </div>
  );
}

// Composant d'effet de glitch matrix
function MatrixGlitch() {
  const glitchLines = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: (i * 8) % 100,
    delay: i * 0.3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {glitchLines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
          style={{
            left: `${line.x}%`,
            top: `${(line.id * 8) % 100}%`,
            width: "200px",
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0, 1, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 2,
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
        className="absolute left-1/2 top-1/2 w-96 h-96 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          background: "conic-gradient(from 0deg, transparent, rgba(0, 255, 255, 0.3), transparent, rgba(16, 185, 129, 0.3), transparent)",
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute left-1/2 top-1/2 w-64 h-64 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          background: "conic-gradient(from 180deg, transparent, rgba(139, 92, 246, 0.4), transparent, rgba(245, 158, 11, 0.4), transparent)",
        }}
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

// Composant de grille de données animée
function DataGrid() {
  const gridSize = 20;
  const cells = Array.from({ length: gridSize * gridSize }, (_, i) => ({
    id: i,
    row: Math.floor(i / gridSize),
    col: i % gridSize,
    delay: i * 0.02,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-15">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(0,255,255,0.1)_50%),linear-gradient(0deg,transparent_50%,rgba(16,185,129,0.1)_50%)] bg-[length:40px_40px]" />
      
      {cells.map((cell) => (
        <motion.div
          key={cell.id}
          className="absolute w-1 h-1 bg-cyan-400/40"
          style={{
            left: `${(cell.col / gridSize) * 100}%`,
            top: `${(cell.row / gridSize) * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: cell.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-black">
      {/* Arrière-plan captivant et unique */}
      <ConnectionNetwork />
      <SoundWaves />
      <ContactParticles />
      <MatrixGlitch />
      <EnergyVortex />
      <DataGrid />
      
      {/* Overlay de profondeur avec effet de brouillard */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      
      {/* Effet de lumière ambiante */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0, 255, 255, 0.5) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 md:px-16 text-center">
        {/* En-tête de section avec style de code */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <div className="inline-flex items-center rounded-lg border border-green-500/30 bg-green-500/10 backdrop-blur-sm px-4 py-2 text-sm font-mono text-green-400 mb-6">
            <Terminal className="w-4 h-4 mr-2" />
            contact.js
          </div>
          
          <h2 className="text-3xl sm:text-4xl text-white font-bold mb-4 font-mono">
            <span className="text-blue-400">function</span>{" "}
            <span className="text-green-400">contact</span>
            <span className="text-yellow-400">()</span>
          </h2>
          
          <p className="mb-8 text-white text-base sm:text-lg font-mono">
            <span className="text-green-400">{"//"}</span>{" "}
            <span className="text-white">Get in touch via email or social media!</span>
          </p>
        </motion.div>

        {/* Liens de contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-2xl text-white"
        >
          {/* Email */}
          <motion.a 
            href="mailto:wesleyajavon2203@hotmail.com"
            className="text-neutral-300 text-sm sm:text-base hover:text-green-400 transition-colors duration-150 font-mono flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            wesleyajavon2203@hotmail.com
          </motion.a>
          
          {/* Séparateur */}
          <div className="hidden sm:block w-px h-8 bg-gray-600"></div>
          
          {/* Réseaux sociaux */}
          <div className="flex gap-6 text-white text-2xl">
            {/* GitHub */}
            <motion.a 
              href="https://github.com/wesleyajavon" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub"
              className="hover:text-neutral-300 transition-colors duration-150 p-2 rounded-lg hover:bg-gray-800/50"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-8 h-8" />
            </motion.a>
            
            {/* LinkedIn */}
            <motion.a 
              href="https://linkedin.com/in/wesleyajv" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
              className="hover:text-neutral-300 transition-colors duration-150 p-2 rounded-lg hover:bg-gray-800/50"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>

        {/* Message de disponibilité */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 p-6 bg-gray-900/30 border border-gray-700 rounded-lg backdrop-blur-sm"
        >
          <p className="text-gray-300 font-mono text-sm">
            <span className="text-white">💻 Available for new opportunities and collaborations</span>
            <br />
            <span className="text-white">Response time: Usually within 24 hours ✅</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
