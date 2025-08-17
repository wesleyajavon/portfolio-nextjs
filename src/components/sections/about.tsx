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
  LucideIcon,
  ToolCaseIcon,
  GitBranchIcon,
  GraduationCapIcon
} from "lucide-react";
import Image from "next/image";
import { TechLogoWithText } from "@/components/ui/TechLogo";

// Utilisation du composant TechLogo centralisé

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
        x: [0, 15, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.2, 1],
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

// Composant de ligne de code flottante
function FloatingCodeLine({ 
  code, 
  x, 
  y, 
  delay, 
  duration 
}: {
  code: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
}) {
  return (
    <motion.div
      className="absolute font-mono text-xs text-green-400 opacity-30"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {code}
    </motion.div>
  );
}

// Composant de grille de particules
function ParticleGrid() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: (i * 7.2) % 100,
    y: (i * 5.8) % 100,
    size: (i % 3) + 1,
    delay: i * 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Composant de gradient animé
function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: "linear-gradient(45deg, #00ffff, #10b981, #8b5cf6, #f59e0b, #ec4899)",
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

// Composant de motif de code
function CodePattern() {
  const codeLines = [
    "const developer = {",
    "  name: 'Wesley',",
    "  passion: 'Coding',",
    "  skills: ['React', 'Node.js']",
    "};",
    "function create() {",
    "  return 'Amazing Apps';",
    "}"
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {codeLines.map((line, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xs text-green-400"
          style={{
            left: `${(i * 12) % 80}%`,
            top: `${(i * 15) % 90}%`,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            delay: i * 0.5,
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

// Composant de carte de compétence
function SkillCard({ 
  icon: Icon, 
  title, 
  description, 
  color, 
  delay 
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-900/30 backdrop-blur-sm p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Ligne de gradient en haut */}
      <div 
        className="absolute inset-x-0 top-0 h-px z-10" 
        style={{
          background: `linear-gradient(90deg, transparent 5%, ${color} 35%, ${color} 50%, ${color} 65%, transparent 95%)`
        }}
      />
      
      {/* Fond avec gradient coloré */}
      <div 
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`
        }}
      />
      
      <div className="text-center">
        <div 
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
          style={{
            backgroundColor: `${color}20`,
            border: `2px solid ${color}40`
          }}
        >
          <Icon className="w-8 h-8" style={{ color }} />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 font-mono">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// Composant de statistique animée
function AnimatedStat({ 
  icon: Icon, 
  value, 
  label, 
  color, 
  delay 
}: {
  icon: LucideIcon;
  value: string | number;
  label: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <div className={`text-4xl mb-2 ${color}`}>
        <Icon className="w-12 h-12 mx-auto" />
      </div>
      <div className="text-2xl font-bold text-white mb-1 font-mono">
        {value}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </motion.div>
  );
}

// Composant de technologie avec logo
function TechWithLogo({ tech }: { tech: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1 rounded-lg border border-gray-600/50 bg-gray-800/50 text-gray-300 hover:border-gray-500/50 transition-colors">
      <TechLogoWithText tech={tech} size="sm" />
      {tech}
    </div>
  );
}

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
      <FloatingShape shape="circle" size={80} color="#00ffff" x={10} y={20} delay={0} duration={8} />
      <FloatingShape shape="square" size={60} color="#10b981" x={85} y={15} delay={2} duration={10} />
      <FloatingShape shape="triangle" size={70} color="#8b5cf6" x={15} y={80} delay={4} duration={12} />
      <FloatingShape shape="hexagon" size={50} color="#f59e0b" x={80} y={75} delay={6} duration={9} />
      
      <FloatingCodeLine code="const passion = 'coding';" x={20} y={30} delay={1} duration={7} />
      <FloatingCodeLine code="function create() {" x={70} y={40} delay={3} duration={11} />
      <FloatingCodeLine code="  return 'amazing';" x={25} y={70} delay={5} duration={8} />
      <FloatingCodeLine code="}" x={75} y={85} delay={7} duration={10} />
      
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-mono">
            <span className="text-blue-400">const</span>{" "}
            <span className="text-green-400">aboutMe</span>{" "}
            <span className="text-yellow-400">=</span>{" "}
            <span className="text-cyan-400">&quot;Developer&quot;;</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-mono">
            <span className="text-white">Passionate about creating innovative solutions and pushing the boundaries</span>
            <br />
            <span className="text-white">of what's possible in web development.</span>
          </p>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20"
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
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-mono">
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
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-mono">
            <span className="text-blue-400">const</span>{" "}
            <span className="text-green-400">techStack</span>{" "}
            <span className="text-yellow-400">=</span>{" "}
            <span className="text-cyan-400">[...];</span>
          </h3>
          
          {/* Filtres de catégorie */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 font-mono text-sm ${
                  selectedCategory === category.id
                    ? "border-green-500/50 bg-green-500/20 text-green-400"
                    : "border-gray-600/50 bg-gray-800/50 text-gray-300 hover:border-gray-500/50 hover:bg-gray-700/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            ))}
          </div>
          
          {/* Grille des technologies */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredTechs.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TechWithLogo tech={tech} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mon parcours */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-mono">
            <span className="text-blue-400">function</span>{" "}
            <span className="text-green-400">myJourney</span>
            <span className="text-yellow-400">()</span>
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <motion.div
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-mono">Self-Taught Developer</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Started my journey by learning web development fundamentals through online resources, 
                    tutorials, and hands-on projects. Built a strong foundation in HTML, CSS, and JavaScript.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-mono">Framework Mastery</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Progressed to modern frameworks like React and Next.js, learning state management, 
                    routing, and advanced concepts. Explored backend development with Node.js and databases.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-mono">Project Portfolio</h4>
                  <p className="text-gray-400 leading-relaxed">
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
          <h3 className="text-3xl font-bold text-white mb-12 font-mono">
            <span className="text-blue-400">function</span>{" "}
            <span className="text-green-400">whyChooseMe</span>
            <span className="text-yellow-400">()</span>
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="text-center p-6 rounded-2xl border border-gray-700/50 bg-gray-900/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-mono">Proven Track Record</h4>
                <p className="text-gray-400">
                  Demonstrated ability to deliver high-quality projects with clean code, 
                  modern architecture, and excellent user experience.
                </p>
              </motion.div>
              
              <motion.div
                className="text-center p-6 rounded-2xl border border-gray-700/50 bg-gray-900/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mx-auto mb-4">
                  <GitBranchIcon className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-mono">Continuous Learning</h4>
                <p className="text-gray-400">
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