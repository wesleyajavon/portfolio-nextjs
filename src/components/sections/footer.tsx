"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Code2,
  Github, 
  Linkedin, 
  Mail,
  ArrowUp,
  Heart,
  Coffee,
  Zap
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-gray-800">
      {/* Fond avec motif de code */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(0,255,0,0.1)_50%),linear-gradient(0deg,transparent_50%,rgba(0,255,0,0.1)_50%)] bg-[length:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white font-mono">Wesley</span>
              </div>
              <p className="text-gray-400 font-mono leading-relaxed">
                <span className="text-green-400">{"//"}</span>{" "}
                <span className="text-white">Full-stack developer crafting intuitive apps with React, Next.js, and Node.js.</span>
                <br />
                <span className="text-green-400">{"//"}</span>{" "}
                <span className="text-white">Building the future, one line of code at a time.</span>
              </p>
            </motion.div>
          </div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 font-mono">
              <span className="text-blue-400">const</span>{" "}
              <span className="text-green-400">quickLinks</span>{" "}
              <span className="text-yellow-400">=</span>{" "}
              <span className="text-cyan-400">&quot;Navigation&quot;;</span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/#home" },
                { name: "About", href: "/#about" },
                { name: "Projects", href: "/#projects" },
                { name: "Contact", href: "/#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-150 font-mono text-sm hover:translate-x-1 inline-block"
                  >
                    <span className="text-green-400">→</span>{" "}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 font-mono">
              <span className="text-blue-400">const</span>{" "}
              <span className="text-green-400">techStack</span>{" "}
              <span className="text-yellow-400">=</span>{" "}
              <span className="text-cyan-400">&quot;Skills&quot;;</span>
            </h3>
            <ul className="space-y-3">
              {[
                "React & Next.js",
                "TypeScript",
                "Node.js & Express",
                "Tailwind CSS",
                "MongoDB & PostgreSQL",
                "Git & GitHub"
              ].map((tech, index) => (
                <li key={index}>
                  <span className="text-gray-400 font-mono text-sm">
                    <span className="text-blue-400">•</span>{" "}
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Section de contact et réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold text-white mb-4 font-mono">
                <span className="text-green-400">function</span>{" "}
                <span className="text-white">connect</span>
                <span className="text-yellow-400">()</span>
              </h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/wesleyajavon", label: "GitHub", color: "hover:text-gray-300" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/wesleyajv", label: "LinkedIn", color: "hover:text-blue-400" },
                  { icon: Mail, href: "mailto:wesleyajavon2203@hotmail.com", label: "Email", color: "hover:text-green-400" }
                ].map((social) => (
                  <motion.a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={social.label}
                    href={social.href}
                    className={`p-3 rounded-lg border border-gray-700 bg-gray-900/50 text-gray-400 transition-all duration-150 ${social.color} hover:border-green-500/50 hover:bg-gray-800/50`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bouton retour en haut */}
            <motion.button
              onClick={scrollToTop}
              className="group p-4 rounded-lg border border-gray-700 bg-gray-900/50 text-gray-400 hover:text-green-400 hover:border-green-500/50 hover:bg-gray-800/50 transition-all duration-150"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Copyright et signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 font-mono text-sm">
              <span className="text-white">© 2025 Wesley Ajavon. All rights reserved.</span>
            </p>
            
            <div className="flex items-center space-x-2 text-gray-500 font-mono text-sm">
              <span className="text-white">Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-white">and</span>
              <Coffee className="w-4 h-4 text-yellow-400" />
              <span className="text-white">by</span>
              <Zap className="w-4 h-4 text-blue-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
