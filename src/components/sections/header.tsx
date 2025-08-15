"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Menu, 
  X, 
  Code2, 
  Home, 
  User, 
  Briefcase, 
  MessageSquare, 
  Download,
  Terminal
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [documentHeight, setDocumentHeight] = useState(0);
  const { scrollY } = useScroll();
  
  // Obtenir la hauteur totale du document
  useEffect(() => {
    const updateDocumentHeight = () => {
      setDocumentHeight(document.documentElement.scrollHeight - window.innerHeight);
    };
    
    updateDocumentHeight();
    window.addEventListener('resize', updateDocumentHeight);
    
    return () => window.removeEventListener('resize', updateDocumentHeight);
  }, []);
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
  );
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );

  // Barre de progression qui atteint 100% seulement au bas de la page
  const progressWidth = useTransform(
    scrollY,
    [0, documentHeight],
    ["0%", "100%"]
  );

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: MessageSquare },
  ];

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-700/50 transition-all duration-300"
    >
      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500"
        style={{
          width: progressWidth
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white font-mono">
              Wesley
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="group relative text-gray-300 hover:text-green-400 transition-colors duration-300 font-mono"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className="flex items-center space-x-2">
                  <item.icon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-green-400" />
                  <span>{item.name}</span>
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block"
          >
            <Button className="rounded-lg bg-gray-800 border border-gray-600 hover:border-green-500/50 px-4 py-2 text-white font-mono hover:bg-gray-700 transition-all duration-300">
              <Download className="w-4 h-4 mr-2 text-green-400" />
              Resume
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-green-400 hover:bg-gray-800/50 transition-colors duration-300 border border-gray-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
      >
        <div className="px-6 py-4 space-y-4">
                      {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-all duration-300 font-mono border border-gray-700/50 hover:border-green-500/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-5 h-5 text-green-400" />
                <span>{item.name}</span>
              </motion.a>
            ))}
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="pt-4 border-t border-gray-700/50"
          >
            <Button className="w-full rounded-lg bg-gray-800 border border-gray-600 hover:border-green-500/50 px-6 py-3 text-white font-mono hover:bg-gray-700 transition-all duration-300">
              <Download className="w-4 h-4 mr-2 text-green-400" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}
