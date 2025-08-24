"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    GraduationCap,
    Briefcase,
    Target,
    Heart,
    Calendar,
    MapPin,
    Award,
    Users,
    Music,
    Play,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
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
} from "@/components/background";

export default function AboutPage() {
  // États séparés pour chaque galerie de vidéos
  const [currentFootballIndex, setCurrentFootballIndex] = useState(0);
  const [currentPianoIndex, setCurrentPianoIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

    // Galerie de vidéos YouTube
    const footballVideos = [
        {
            id: "jXrnSgDSrkc",
            title: "Football Highlights - Anderson University",
            description: "College soccer highlights"
        },
        {
            id: "idYotvlHehw",
            title: "Football Highlights - Belgium 3rd Division",
            description: "Matchday with Habay-la-Neuve against Mormont"
        },
        {
            id: "G8j5VOC3v-4",
            title: "Football Highlights - Belgium 3rd Division",
            description: "Matchday with Habay-la-Neuve against Rochefort"
        }
    ];

    const pianoVideos = [
        {
            id: "4rY7QimLuYE",
            title: "Piano Cover",
            description: "Nocif by Damso & Hamza",
            type: "video"
        },
        {
            id: "KA4rEjYAibs",
            title: "Piano Cover",
            description: "Die with a Smile by Bruno Mars & Lady Gaga",
            type: "video"
        },
        {
            id: "bohemian-local",
            title: "Piano Cover",
            description: "Bohemian Rhapsody by Queen",
            type: "local"
        },
        {
            id: "memories-local",
            title: "Piano Cover",
            description: "Memories by Maroon 5",
            type: "local"
        },
        {
            id: "bPzMoc0LSK0",
            title: "Piano Medley",
            description: "Medley of songs",
            type: "video"
        },
        {
            id: "notyet",
            title: "Piano Cover",
            description: "Runaway by Kanye West",
            type: "video"
        },
    ];

    // Fonctions de navigation pour football
    const nextFootballVideo = () => {
        setCurrentFootballIndex((prev: number) => (prev + 1) % footballVideos.length);
    };

    const prevFootballVideo = () => {
        setCurrentFootballIndex((prev: number) => (prev - 1 + footballVideos.length) % footballVideos.length);
    };

    // Fonctions de navigation pour piano
    const nextPianoVideo = () => {
        setCurrentPianoIndex((prev: number) => (prev + 1) % pianoVideos.length);
    };

    const prevPianoVideo = () => {
        setCurrentPianoIndex((prev: number) => (prev - 1 + pianoVideos.length) % pianoVideos.length);
    };

    const education = [
        {
            year: "2023 - 2025",
            title: "Master's in Business and Data Analytics",
            institution: "Anderson University",
            location: "Anderson, SC, USA",
            description: "Focus on data analysis, business intelligence, and analytical decision-making."
        },
        {
            year: "2018 - 2021",
            title: "Bachelor in Computer Sciences",
            institution: "University of Luxembourg",
            location: "Belval, Luxembourg",
            description: "Computer science fundamentals, software engineering, and programming."
        }
    ];

    const experience = [
        {
            year: "Present",
            title: "Full-Stack Developer",
            company: "Freelance",
            location: "Remote",
            description: "Building web applications with React, Next.js, and Node.js. Sharpening my skills in waiting for the right opportunity."
        },
        {
            year: "Summer 2024",
            title: "Computer Information Security Intern",
            company: "CFL National Railroad Company ",
            location: "Luxembourg-Ville, Luxembourg",
            description: "Led a Shadow IT project, identifying and cataloging 200+ unauthorized cloud applications, improving IT security compliance by 30%."
        },
        {
            year: "Feb 2021 - Jun 2021",
            title: "Backend Developer Intern",
            company: "NeoPixl S.A.",
            location: "Belval, Luxembourg",
            description: "Contributed to the architecture of a room-booking system implemented across multiple European offices."
        },
        {
            year: "Summer 2019",
            title: "Data Entry Clerk and IT Helpdesk Intern ",
            company: "Bank Peter Degroof",
            location: "Luxembourg-City, Luxembourg",
            description: "Managed and optimized data entry of 150+ records daily."
        },
    ];

    const goals = [
        {
            icon: Target,
            title: "Career Jumpstart",
            description: "Land my first full-time software engineering role."
        },
        {
            icon: Award,
            title: "Skill Mastery",
            description: "Master advanced React patterns, Project Architecture, database design, and AI/ML integration"
        },
        {
            icon: Users,
            title: "Community Impact",
            description: "Contribute to open-source projects and build a public portfolio"
        }
    ];

    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            {/* Arrière-plans animés */}
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


            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
                {/* Bouton retour */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </motion.div>

                {/* En-tête de page */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div 
                        className="inline-flex items-center rounded-lg border border-green-500/40 bg-green-500/15 backdrop-blur-xl px-6 py-3 text-sm font-mono text-green-300 mb-8 shadow-lg shadow-green-500/20"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)" }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                        >
                            <Heart className="w-5 h-5 mr-3 text-green-400" />
                        </motion.div>
                        <span className="font-semibold">about.js</span>
                        <motion.div
                            className="w-2 h-2 bg-green-400 rounded-full ml-3"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>

                    {/* Éléments de fond animés sophistiqués */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <motion.div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-blue-500/8 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.2, 0.4, 0.2],
                                rotate: [0, 180, 360]
                            }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-green-500/8 to-cyan-500/8 rounded-full blur-2xl"
                            animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.15, 0.35, 0.15],
                                x: [0, 30, 0]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/6 to-orange-500/6 rounded-full blur-2xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.3, 0.1],
                                y: [0, -20, 0]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                        />
                    </div>

                    <motion.h1 
                        className="text-4xl lg:text-6xl font-bold mb-6 leading-tight font-mono px-2 bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span className="text-blue-400">const</span>{" "}
                        <span className="text-green-400">aboutMe</span>{" "}
                        <span className="text-yellow-400">=</span>{" "}
                        <span className="text-cyan-400">&quot;Personal Story&quot;;</span>
                    </motion.h1>

                    <motion.div
                        className="w-32 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mx-auto mb-8 rounded-full shadow-lg"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 128, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                    />

                    <motion.p 
                        className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-mono px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <span className="text-white">Beyond the code, discover the person behind the developer</span>
                        <br className="hidden sm:block" />
                        <span className="text-white">and the journey that shaped my passion for technology.</span>
                    </motion.p>

                    {/* Indicateurs de scroll sophistiqués */}
                    <motion.div
                        className="flex justify-center mt-10 space-x-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full shadow-lg"
                                animate={{ 
                                    scale: [1, 1.8, 1], 
                                    opacity: [0.3, 1, 0.3],
                                    y: [0, -5, 0]
                                }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                            />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Introduction personnelle */}
                <motion.section
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >


                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 lg:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Hey, I&apos;m Wesley! 👋</h3>
                                    <div className="space-y-4 text-gray-300 leading-relaxed">
                                        <p>
                                            I&apos;m a passionate Belgian international student who believes in the power of continuous growth and learning.
                                            My journey has been shaped by diverse experiences that have taught me resilience, discipline,
                                            and the importance of pursuing what truly matters.
                                        </p>
                                        <p>
                                            From the soccer field to the piano keys, from the classroom to the coding environment,
                                            I&apos;ve learned that excellence comes from dedication, practice, and a genuine love for what you do.
                                        </p>
                                        <p>
                                            I&apos;m based in Columbia, SC, 
                                                                                         where I&apos;m pursuing my Master&apos;s degree while building my skills as a full-stack developer. 
                                            Every day is an opportunity to learn something new and push my boundaries further.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-4">
                                        {!imageError ? (
                                            <Image
                                                src="/Profile.png"
                                                alt="Wesley Ajavon - Personal Photo"
                                                width={400}
                                                height={400}
                                                className={`w-full h-full object-cover rounded-xl transition-opacity duration-300 ${
                                                    imageLoaded ? 'opacity-100' : 'opacity-0'
                                                }`}
                                                priority
                                                onLoad={() => setImageLoaded(true)}
                                                onError={() => setImageError(true)}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                                                <div className="text-center text-gray-300">
                                                    <div className="w-24 h-24 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                                        <span className="text-4xl">👨‍💻</span>
                                                    </div>
                                                    <p className="text-lg font-semibold">Wesley Ajavon</p>
                                                    <p className="text-sm text-gray-400">Full-Stack Developer</p>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* Loading state */}
                                        {!imageLoaded && !imageError && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                                                <div className="text-center text-gray-300">
                                                    <div className="w-8 h-8 border-2 border-green-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                                    <p className="text-sm">Loading...</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Objectifs */}
                <motion.section
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-white text-center mb-12 font-mono px-2">
                        <span className="text-blue-400">const</span>{" "}
                        <span className="text-green-400">goals</span>{" "}
                        <span className="text-yellow-400">=</span>{" "}
                        <span className="text-cyan-400">[...];</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {goals.map((goal, index) => (
                            <motion.div
                                key={goal.title}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 text-center relative overflow-hidden group"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                {/* Effet de lueur au survol */}
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                
                                {/* Bordure animée */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Contenu */}
                                <div className="relative z-10">
                                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-4">
                                    <goal.icon className="w-8 h-8 text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 font-mono">{goal.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{goal.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Timeline Éducation et Expérience */}
                <motion.section
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-bold text-white text-center mb-12 font-mono px-2">
                        <span className="text-blue-400">function</span>{" "}
                        <span className="text-green-400">myTimeline</span>
                        <span className="text-yellow-400">()</span>
                    </h2>

                    <div className="max-w-6xl mx-auto">
                        {/* Timeline Container */}
                        <div className="relative">
                            {/* Ligne de timeline centrale */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-500/50 via-blue-500/50 to-purple-500/50 rounded-full hidden lg:block" style={{ top: '120px', height: 'calc(100% - 200px)' }} />

                            {/* Éducation */}
                            <div className="mb-16">
                                <motion.h3
                                    className="text-2xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >
                                    <GraduationCap className="w-8 h-8 text-blue-400" />
                                    Education
                                </motion.h3>

                                <div className="space-y-12">
                                    {education.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                                }`}
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: index * 0.2 }}
                                        >
                                            {/* Contenu de gauche/droite */}
                                            <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'
                                                }`}>
                                                <div className={`bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 lg:p-8 hover:border-green-500/30 transition-all duration-300 group ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                                                    }`}>
                                                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                                                        }`}>
                                                        <div className="w-3 h-3 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                                                        <span className="text-sm font-mono text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/30">
                                                            {item.year}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-blue-400 font-mono mb-3 text-lg">{item.institution}</p>
                                                    <div className={`flex items-center gap-2 text-gray-400 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                                                        }`}>
                                                        <MapPin className="w-4 h-4" />
                                                        <span className="text-sm">{item.location}</span>
                                                    </div>
                                                    <p className="text-gray-300 leading-relaxed">{item.description}</p>

                                                    {/* Effet de lueur au survol */}
                                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                                </div>
                                            </div>

                                            {/* Point central de la timeline (visible sur desktop) */}
                                            <div className="hidden lg:flex flex-col items-center justify-center w-16 h-16">
                                                <div className="w-6 h-6 bg-green-400 rounded-full border-4 border-gray-900 shadow-lg shadow-green-500/25" />
                                                <div className="w-1 h-16 bg-gradient-to-b from-green-400 to-transparent" />
                                            </div>

                                            {/* Espace vide pour l'alternance */}
                                            <div className="flex-1 lg:hidden" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Expérience */}
                            <div>
                                <motion.h3
                                    className="text-2xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    <Briefcase className="w-8 h-8 text-green-400" />
                                    Experience
                                </motion.h3>

                                <div className="space-y-12">
                                    {experience.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                                }`}
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: index * 0.2 }}
                                        >
                                            {/* Contenu de gauche/droite */}
                                            <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'
                                                }`}>
                                                <div className={`bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 lg:p-8 hover:border-blue-500/30 transition-all duration-300 group ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                                                    }`}>
                                                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                                                        }`}>
                                                        <div className="w-3 h-3 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                                                        <span className="text-sm font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30">
                                                            {item.year}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-green-400 font-mono mb-3 text-lg">{item.company}</p>
                                                    <div className={`flex items-center gap-2 text-gray-400 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                                                        }`}>
                                                        <MapPin className="w-4 h-4" />
                                                        <span className="text-sm">{item.location}</span>
                                                    </div>
                                                    <p className="text-gray-300 leading-relaxed">{item.description}</p>

                                                    {/* Effet de lueur au survol */}
                                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                                </div>
                                            </div>

                                            {/* Point central de la timeline (visible sur desktop) */}
                                            <div className="hidden lg:flex flex-col items-center justify-center w-16 h-16">
                                                <div className="w-6 h-6 bg-blue-400 rounded-full border-4 border-gray-900 shadow-lg shadow-blue-500/25" />
                                                <div className="w-1 h-16 bg-gradient-to-b from-blue-400 to-transparent" />
                                            </div>

                                            {/* Espace vide pour l'alternance */}
                                            <div className="flex-1 lg:hidden" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Hobbies */}
                <motion.section
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-white text-center mb-12 font-mono px-2">
                        <span className="text-blue-400">const</span>{" "}
                        <span className="text-green-400">hobbies</span>{" "}
                        <span className="text-yellow-400">=</span>{" "}
                        <span className="text-cyan-400">[...];</span>
                    </h2>

                    <div className="space-y-16">
                        {/* Football */}
                        <div>
                            <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
                                <Heart className="w-8 h-8 text-green-400" />
                                Football (Soccer)
                            </h3>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4 text-gray-300 leading-relaxed">
                                    <p>
                                        Football has been a central part of my life, teaching me invaluable lessons about teamwork,
                                        discipline, and perseverance. I played competitively at the collegiate level for Anderson University, where I learned to balance athletic excellence with academic achievement.
                                    </p>
                                    <p>
                                        The sport has shaped my character, instilling in me the importance of practice, strategic thinking,
                                        and working towards common goals. These qualities directly translate to my approach to software
                                        development and problem-solving.
                                    </p>
                                    <p>
                                        Whether it&apos;s on the field or in the code, I believe in giving 100% effort and continuously
                                        improving through dedicated practice and learning from every experience.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {/* Galerie de vidéos football */}
                                    <div className="relative">
                                        <div className="aspect-video rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-4">
                                            <div className="w-full h-full rounded-xl overflow-hidden relative">
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${footballVideos[currentFootballIndex].id}?`}
                                                    title={footballVideos[currentFootballIndex].title}
                                                    className="w-full h-full"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />

                                                {/* Overlay avec titre et description */}
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                                    <h4 className="text-white font-semibold text-sm mb-1">
                                                        {footballVideos[currentFootballIndex].title}
                                                    </h4>
                                                    <p className="text-gray-300 text-xs">
                                                        {footballVideos[currentFootballIndex].description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Boutons de navigation */}
                                        <button
                                            onClick={prevFootballVideo}
                                            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>

                                        <button
                                            onClick={nextFootballVideo}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>

                                        {/* Indicateurs de position */}
                                        <div className="flex justify-center mt-3 space-x-2">
                                            {footballVideos.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentFootballIndex(index)}
                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentFootballIndex
                                                        ? 'bg-green-400 w-6'
                                                        : 'bg-gray-500 hover:bg-gray-400'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Image football */}
                                    <div className="aspect-video rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-4">
                                        <div className="w-full h-full rounded-xl overflow-hidden">
                                            <Image
                                                src="/Soccer.JPEG"
                                                alt="Wesley playing soccer at Anderson University"
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Piano */}
                        <div>
                            <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
                                <Music className="w-8 h-8 text-blue-400" />
                                Piano
                            </h3>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4">
                                    {/* Galerie de vidéos piano */}
                                    <div className="relative">
                                        <div className="aspect-video rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-4">
                                            <div className="w-full h-full rounded-xl overflow-hidden relative">
                                                {pianoVideos[currentPianoIndex].type === "video" && (
                                                    <iframe
                                                        src={`https://www.youtube.com/embed/${pianoVideos[currentPianoIndex].id}?`}
                                                        title={pianoVideos[currentPianoIndex].title}
                                                        className="w-full h-full"
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    />
                                                )}
                                                
                                                {pianoVideos[currentPianoIndex].type === "local" && (
                                                    <video
                                                        src={pianoVideos[currentPianoIndex].id === "bohemian-local" ? "/videos/Bohemian.MOV" : "/videos/Memories.mov"}
                                                        title={pianoVideos[currentPianoIndex].title}
                                                        className="w-full h-full"
                                                        controls
                                                        preload="metadata"
                                                        playsInline
                                                        poster="/Thumbnail.JPG"
                                                    >
                                                        Votre navigateur ne supporte pas la lecture de vidéos.
                                                    </video>
                                                )}

                                                {/* Overlay avec titre et description */}
                                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                                    <h4 className="text-white font-semibold text-sm mb-1">
                                                        {pianoVideos[currentPianoIndex].title}
                                                    </h4>
                                                    <p className="text-gray-300 text-xs">
                                                        {pianoVideos[currentPianoIndex].description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Boutons de navigation */}
                                        <button
                                            onClick={prevPianoVideo}
                                            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>

                                        <button
                                            onClick={nextPianoVideo}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>

                                        {/* Indicateurs de position */}
                                        <div className="flex justify-center mt-3 space-x-2">
                                            {pianoVideos.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentPianoIndex(index)}
                                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentPianoIndex
                                                        ? 'bg-blue-400 w-6'
                                                        : 'bg-gray-500 hover:bg-gray-400'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Placeholder pour image piano */}
                                    <div className="aspect-video rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-4">
                                        <div className="w-full h-full bg-gray-800/50 rounded-xl flex items-center justify-center">
                                            <Image
                                                src="/Poesicales2.JPG"
                                                alt="Wesley playing piano"
                                                width={600}
                                                height={400}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 text-gray-300 leading-relaxed">
                                    <p>
                                        Music has always been a passion of mine, and the piano serves as my creative outlet.
                                        Playing the piano allows me to explore the beautiful intersection between structure and expression,
                                        much like coding does.
                                    </p>
                                    <p>
                                        The discipline required to master complex pieces, the creativity in interpretation,
                                        and the joy of creating something beautiful resonate deeply with my approach to software development.
                                        Both require practice, patience, and a deep understanding of fundamentals.
                                    </p>
                                    <p>
                                        Whether I&apos;m composing melodies or writing code, I find the same sense of flow and
                                        satisfaction in creating something that serves a purpose and brings joy to others.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Call to Action */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 lg:p-12 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4 font-mono">Ready to Connect?</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I&apos;m always open to new opportunities, collaborations, or just interesting conversations.
                                                          Let&apos;s discuss how we can work together or share our experiences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:wesleyajavon2203@hotmail.com"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                            >
                                Send me an email
                            </a>
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center border border-gray-600/50 text-gray-300 hover:text-white hover:border-gray-500/50 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                            >
                                Back to Portfolio
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
