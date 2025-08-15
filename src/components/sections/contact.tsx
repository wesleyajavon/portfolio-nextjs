"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Terminal
} from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-black">
      {/* Fond avec motif de code */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(0,255,0,0.1)_50%),linear-gradient(0deg,transparent_50%,rgba(0,255,0,0.1)_50%)] bg-[length:60px_60px]" />
      </div>
      
      {/* Overlay de profondeur */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80" />

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
            <span className="text-green-400">//</span>{" "}
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
            className="text-neutral-300 text-sm sm:text-base hover:text-green-400 transition-colors duration-300 font-mono flex items-center gap-2"
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
              className="hover:text-neutral-300 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
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
              className="hover:text-neutral-300 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
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
