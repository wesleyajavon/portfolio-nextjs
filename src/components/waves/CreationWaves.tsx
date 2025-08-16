"use client";

import { CreationWave } from "./CreationWave";
import { SecondaryWave } from "./SecondaryWave";
import { TertiaryWave } from "./TertiaryWave";
import { WaveParticle } from "./WaveParticle";

// Composant d'ondes de création ultra-sophistiqué
export function CreationWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Ondes principales avec animations complexes */}
      {Array.from({ length: 8 }, (_, i) => (
        <CreationWave key={i} index={i} />
      ))}
      
      {/* Ondes secondaires avec rotation inverse */}
      {Array.from({ length: 6 }, (_, i) => (
        <SecondaryWave key={`secondary-${i}`} index={i} />
      ))}
      
      {/* Ondes tertiaires avec mouvement */}
      {Array.from({ length: 4 }, (_, i) => (
        <TertiaryWave key={`tertiary-${i}`} index={i} />
      ))}
      
      {/* Particules qui suivent les ondes */}
      {Array.from({ length: 25 }, (_, i) => (
        <WaveParticle key={`wave-particle-${i}`} index={i} />
      ))}
    </div>
  );
}
