"use client";

import { motion } from "framer-motion";
import { ConstructionParticle } from "./ConstructionParticle";
import { ConstructionLine } from "./ConstructionLine";
import { ConstructionShape } from "./ConstructionShape";

// Composant d'effet de construction de projet esthétique
export function ProjectConstruction() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-25">
      {/* Particules de construction */}
      {Array.from({ length: 20 }, (_, i) => (
        <ConstructionParticle key={i} index={i} />
      ))}
      
      {/* Lignes de construction */}
      {Array.from({ length: 8 }, (_, i) => (
        <ConstructionLine key={`line-${i}`} index={i} />
      ))}
      
      {/* Formes géométriques */}
      {Array.from({ length: 6 }, (_, i) => (
        <ConstructionShape key={`shape-${i}`} index={i} />
      ))}
    </div>
  );
}
