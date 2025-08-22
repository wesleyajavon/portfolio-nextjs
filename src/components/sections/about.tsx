"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  Database,
  BookOpen,
  Globe,
  CheckCircle,
  Target,
  User,
  Brain,
  ToolCaseIcon,
  GitBranchIcon,
  GraduationCapIcon
} from "lucide-react";
import { TechBadge, SkillCard, AnimatedStat } from "@/components/ui";
import {
  ConnectionNetwork,
  DataFlow,
  EnergyVortex,
  EnergyWaves,
  MatrixGlitch,
  TechParticles,
  ParticleGrid,
  AnimatedGradient,
  CodePattern
} from "../background";

export function About() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All", icon: Code2 },
    { id: "frontend", label: "Frontend", icon: Globe },
    { id: "backend", label: "Backend", icon: ToolCaseIcon },
    { id: "ai-ml", label: "AI/ML", icon: Brain },
    { id: "tools", label: "Tools", icon: ToolCaseIcon },
  ];

  const technologies = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "CSS", "HTML", "JavaScript"],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Redis", "Docker", "SQLite"],
    "ai-ml": ["Claude AI", "OpenAI", "Grok AI", "AI Integration", "API Integration"],
    tools: ["Git", "GitHub", "Postman", "VS Code", "Cursor", "Prisma"]
  };

  const filteredTechs = selectedCategory === "all"
    ? Object.values(technologies).flat()
    : technologies[selectedCategory as keyof typeof technologies] || [];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-black">
      {/* Arrière-plan sophistiqué et esthétique */}


      {/* Lignes de code flottantes */}
      <CodePattern />

      <ConnectionNetwork />
      <EnergyWaves />
      <TechParticles />
      <MatrixGlitch />
      <EnergyVortex />
      <DataFlow />
      <ParticleGrid />
      <AnimatedGradient />
      <CodePattern />

      {/* Overlay de profondeur */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center rounded-lg border border-green-500/30 bg-green-500/10 backdrop-blur-sm px-4 py-2 text-sm font-mono text-green-400 mb-6">
            <Code2 className="w-4 h-4 mr-2" />
            about.js
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-mono px-2">
            <span className="text-blue-400">const</span>{" "}
            <span className="text-green-400">aboutMe</span>{" "}
            <span className="text-yellow-400">=</span>{" "}
            <span className="text-cyan-400">&quot;Developer&quot;;</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-mono px-4">
            <span className="text-white">Passionate about creating innovative solutions and pushing the boundaries</span>
            <br className="hidden sm:block" />
            <span className="text-white">of what&apos;s possible in web development.</span>
          </p>
        </motion.div>

        {/* Section Photo + Description */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Photo de profil */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 p-4 sm:p-6 lg:p-8 aspect-square flex items-center justify-center">
              <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-xl sm:shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                <Image
                  alt="Wesley Ajavon - Profile"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-center"
                  src="/Profile.png"
                  priority
                />
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-green-500/20 rounded-full blur-lg sm:blur-xl"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/20 rounded-full blur-lg sm:blur-xl"></div>
            </div>

            {/* Badge Backend Dev */}
            <motion.div
              className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-gray-800 px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-md sm:shadow-lg border border-gray-700 about-animate-float"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="text-xs sm:text-sm font-semibold text-gray-300">🚀 Full-Stack Dev</span>
            </motion.div>

            {/* Badge AI Engineer */}
            <motion.div
              className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-gray-800 px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-md sm:shadow-lg border border-gray-700 about-animate-float"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="text-xs sm:text-sm font-semibold text-gray-300">🤖 Data Analyst</span>
            </motion.div>
          </motion.div>

          {/* Description personnelle */}
          <motion.div
            className="space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Hey, I am Wesley!
              </h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  After graduating from the University of Luxembourg with a Bachelor in Computer Sciences, I took a break from coding to fully commit to my college soccer career and pursue a Master in Business and Data Analytics—an experience that shaped my discipline, resilience, and teamwork.
                  <br /><br />
                  Now, I’m diving back into tech with renewed focus and curiosity, building interactive and responsive full-stack web apps using tools like Next.js, React, Node.js, and other frameworks.
                  <br /><br />
                  Outside of tech and athletics, I’m also a pianist — I love exploring the creative intersection between structure and expression, both in music and in code.
                  <br /><br />
                  I’m always eager to learn, collaborate, and grow — and this portfolio reflects that journey toward a MERN tech stack career.
                </p>
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <a
                href="mailto:wesleyajavon2203@hotmail.com"
                className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 w-full sm:w-auto text-center"
              >
                Let's work together →
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatedStat
            icon={Code2}
            value="10+"
            label="Projects Built"
            color="text-cyan-400"
            delay={0.1}
          />
          <AnimatedStat
            icon={GraduationCapIcon}
            value="Entry"
            label="Level position"
            color="text-yellow-400"
            delay={0.2}
          />
          <AnimatedStat
            icon={User}
            value="100%"
            label="Passion"
            color="text-green-400"
            delay={0.3}
          />
          <AnimatedStat
            icon={Brain}
            value="∞"
            label="Learning"
            color="text-purple-400"
            delay={0.4}
          />
        </motion.div>

        {/* Compétences principales */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-mono px-2">
            <span className="text-blue-400">function</span>{" "}
            <span className="text-green-400">getSkills</span>
            <span className="text-yellow-400">()</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              icon={Globe}
              title="Frontend Development"
              description="Building responsive and interactive user interfaces with modern frameworks and tools."
              color="#3B82F6"
              delay={0.1}
            />
            <SkillCard
              icon={ToolCaseIcon}
              title="Backend Development"
              description="Creating robust server-side applications and APIs with scalable architectures."
              color="#10B981"
              delay={0.2}
            />
            <SkillCard
              icon={Database}
              title="Database Design"
              description="Designing efficient database schemas and optimizing data operations."
              color="#8B5CF6"
              delay={0.3}
            />
            <SkillCard
              icon={Brain}
              title="AI Integration"
              description="Integrating AI services and building intelligent applications with Claude, OpenAI, and Grok AI."
              color="#8B5CF6"
              delay={0.4}
            />
            <SkillCard
              icon={ToolCaseIcon}
              title="Development Tools"
              description="Using modern development tools and practices for efficient workflows and code quality."
              color="#EC4899"
              delay={0.5}
            />
            <SkillCard
              icon={CheckCircle}
              title="Problem Solving"
              description="Analyzing complex problems and implementing creative solutions."
              color="#06B6D4"
              delay={0.6}
            />
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12 font-mono px-2">
            <span className="text-blue-400">const</span>{" "}
            <span className="text-green-400">techStack</span>{" "}
            <span className="text-yellow-400">=</span>{" "}
            <span className="text-cyan-400">[...];</span>
          </h3>

          {/* Filtres de catégorie */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8 px-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg border transition-all duration-200 font-mono text-xs sm:text-sm ${selectedCategory === category.id
                    ? "border-green-500/50 bg-green-500/20 text-green-400"
                    : "border-gray-600/50 bg-gray-800/50 text-gray-300 hover:border-gray-500/50 hover:bg-gray-700/50"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Grille des technologies */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 px-4">
            {filteredTechs.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TechBadge tech={tech} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mon parcours */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12 font-mono px-2">
            <span className="text-blue-400">function</span>{" "}
            <span className="text-green-400">myJourney</span>
            <span className="text-yellow-400">()</span>
          </h3>

          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                className="flex items-start gap-4 sm:gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                  <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 font-mono">Self-Taught Developer</h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    Started my journey by learning web development fundamentals through online resources,
                    tutorials, and hands-on projects. Built a strong foundation in HTML, CSS, and JavaScript.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 sm:gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 font-mono">Framework Mastery</h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    Progressed to modern frameworks like React and Next.js, learning state management,
                    routing, and advanced concepts. Explored backend development with Node.js and databases.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 sm:gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 font-mono">Project Portfolio</h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    Built a diverse portfolio of 10+ projects showcasing different technologies and
                    problem-solving approaches. Each project represents a learning milestone and skill demonstration.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Pourquoi me choisir */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 font-mono px-2">
            <span className="text-blue-400">function</span>{" "}
            <span className="text-green-400">whyChooseMe</span>
            <span className="text-yellow-400">()</span>
          </h3>

          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                className="text-center p-4 sm:p-6 rounded-2xl border border-gray-700/50 bg-gray-900/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-mono">Proven Track Record</h4>
                <p className="text-gray-400 text-sm sm:text-base">
                  Demonstrated ability to deliver high-quality projects with clean code,
                  modern architecture, and excellent user experience.
                </p>
              </motion.div>

              <motion.div
                className="text-center p-4 sm:p-6 rounded-2xl border border-gray-700/50 bg-gray-900/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <GitBranchIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-mono">Continuous Learning</h4>
                <p className="text-gray-400 text-sm sm:text-base">
                  Always staying updated with the latest technologies and best practices,
                  ensuring modern and efficient solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}