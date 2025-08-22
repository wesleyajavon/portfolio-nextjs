"use client";

import { motion } from "framer-motion";
import { TechLogoWithText } from "./TechLogo";

interface FilterSectionProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  technologies: string[];
}

export function FilterSection({ 
  activeFilter, 
  setActiveFilter, 
  technologies
}: FilterSectionProps) {
  const categories = ["All", "Frontend", "Backend", "Full Stack", "AI/ML"];

  return (
    <div className="mb-6 sm:mb-8">
      {/* Filtres par catégorie */}
      <div className="flex flex-wrap gap-2 justify-center mb-4 sm:mb-6">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-3 sm:px-4 py-2 rounded-lg border transition-all duration-200 font-mono text-xs sm:text-sm ${
              activeFilter === category
                ? "border-green-500/50 bg-green-500/20 text-green-400"
                : "border-gray-600/50 bg-gray-800/50 text-gray-300 hover:border-gray-500/50 hover:bg-gray-700/50"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      
      {/* Filtre par technologie */}
      <div className="mt-4">
        <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3 text-center">Filter by technology:</h4>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`px-2 sm:px-3 py-1 text-xs rounded-full border transition-all duration-200 ${
                activeFilter === tech
                  ? "border-green-500/50 bg-green-500/20 text-green-400"
                  : "border-gray-600/50 bg-gray-800/50 text-gray-300 hover:border-gray-500/50 hover:bg-gray-700/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TechLogoWithText tech={tech} />
            </motion.button>
          ))}

        </div>
      </div>
    </div>
  );
}
