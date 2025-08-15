"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Zap, 
  Database, 
  Globe, 
  Smartphone, 
  BookOpen, 
  Target, 
  User, 
  Brain,
  Sparkles,
  Star,
  CheckCircle,
  Terminal
} from "lucide-react";

// Composant de carte de compétence avec style de code
function SkillCard({ skill, index }: {
  skill: {
    icon: any;
    title: string;
    description: string;
    level: number;
    color: string;
  };
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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

      {/* Titre et description */}
      <h3 className="text-lg font-semibold text-white mb-2">{skill.title}</h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{skill.description}</p>

      {/* Barre de progression avec style de code */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-500">
          <span>progress</span>
          <span>{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2 border border-gray-700">
          <motion.div
            className="h-full rounded-full relative overflow-hidden"
            style={{ backgroundColor: skill.color }}
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
            />
          </motion.div>
        </div>
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
  stat: { icon: any; value: string; label: string; color: string };
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
      className="group relative bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center hover:border-green-500/50 hover:bg-gray-800/50 transition-all duration-300 font-mono"
    >
      {/* Icône avec effet de lueur */}
      <div className="relative inline-block mb-4">
        <stat.icon className="w-12 h-12 text-green-400 mx-auto" />
        <motion.div
          className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ 
            background: `radial-gradient(circle, ${stat.color}20, transparent 70%)`,
            filter: 'blur(12px)'
          }}
        />
      </div>

      {/* Valeur avec effet de compteur */}
      <motion.div
        className="text-3xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
      >
        {stat.value}
      </motion.div>

      {/* Label */}
      <p className="text-gray-400 text-sm font-medium">{stat.label}</p>

      {/* Particules de code flottantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { x: 25, y: 35, symbol: '<' },
          { x: 45, y: 55, symbol: '>' },
          { x: 65, y: 75, symbol: '/' },
          { x: 85, y: 25, symbol: '\\' }
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
      {/* Fond avec motif de code */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(0,255,0,0.1)_50%),linear-gradient(0deg,transparent_50%,rgba(0,255,0,0.1)_50%)] bg-[length:60px_60px]" />
      </div>
      
      {/* Overlay de profondeur */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80" />

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
            <span className="text-cyan-400">"Developer";</span>
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
                <span className="text-white">Now, I'm diving back into tech with renewed focus and curiosity, building interactive and responsive full-stack web apps using tools like Next.js, React, Node.js, and other frameworks.</span>
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-lg"
              >
                <span className="text-white">Outside of tech and athletics, I'm also a pianist 🎹 — I love exploring the creative intersection between structure and expression, both in music and in code.</span>
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-lg"
              >
                <span className="text-white">🧠 I'm always eager to learn, collaborate, and grow — and this portfolio reflects that journey toward a MERN and T3 tech stack career.</span>
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
                { text: "Team Player : I'm eager to collaborate, learn from others, and contribute to team success.", color: "green" },
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
                  <CheckCircle className={`w-5 h-5 mt-0.5 ${
                    item.color === "green" ? "text-green-400" : 
                    item.color === "blue" ? "text-blue-400" : "text-cyan-400"
                  }`} />
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
