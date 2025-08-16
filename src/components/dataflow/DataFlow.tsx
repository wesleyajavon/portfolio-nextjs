"use client";

import { motion } from "framer-motion";
import { DataFlowLine } from "./DataFlowLine";
import { DataParticle } from "./DataParticle";
import { HorizontalDataLine } from "./HorizontalDataLine";
import { SpiralDataFlow } from "./SpiralDataFlow";

// Composant de flux de données ultra-sophistiqué
export function DataFlow() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-25">
      {/* Flux principaux avec animations complexes */}
      {Array.from({ length: 15 }, (_, i) => (
        <DataFlowLine key={i} index={i} />
      ))}
      
      {/* Particules de données qui tombent avec mouvement sinusoïdal */}
      {Array.from({ length: 35 }, (_, i) => (
        <DataParticle key={`particle-${i}`} index={i} />
      ))}
      
      {/* Lignes de connexion horizontales avec effets de vague */}
      {Array.from({ length: 10 }, (_, i) => (
        <HorizontalDataLine key={`line-${i}`} index={i} />
      ))}
      
      {/* Flux de données en spirale */}
      {Array.from({ length: 8 }, (_, i) => (
        <SpiralDataFlow key={`spiral-${i}`} index={i} />
      ))}
    </div>
  );
}
