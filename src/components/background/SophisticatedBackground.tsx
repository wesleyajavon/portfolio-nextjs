"use client";

import { DataParticle } from "../dataflow/DataParticle";
import { DataWave } from "./DataWave";
import { LightSource } from "./LightSource";
import { FloatingCodeLine } from "./FloatingCodeLine";
import { TechSymbol } from "./TechSymbol";

// Composant d'arrière-plan sophistiqué et esthétique
export function SophisticatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Fond de base avec gradient complexe */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Grille de code binaire sophistiquée - CSS pur pour de meilleures performances */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(0, 255, 255, 0.03) 19px, rgba(0, 255, 255, 0.03) 20px),
            repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0, 255, 255, 0.03) 19px, rgba(0, 255, 255, 0.03) 20px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      {/* Motifs de circuits imprimés - CSS pur */}
      <div className="absolute inset-0 opacity-12">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.04) 0%, transparent 50%)
          `,
          backgroundSize: '150px 150px, 200px 200px, 250px 250px',
          backgroundPosition: '0 0, 75px 75px, 125px 125px'
        }} />
        
        {/* Lignes de connexion de circuits */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0, 255, 255, 0.04) 3px, rgba(0, 255, 255, 0.04) 6px),
            repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(16, 185, 129, 0.03) 3px, rgba(16, 185, 129, 0.03) 6px)
          `,
          backgroundSize: '80px 80px, 120px 120px'
        }} />
      </div>
      
      {/* Particules de données techniques - réduites de 60 à 20 pour de meilleures performances */}
      {Array.from({ length: 20 }, (_, i) => (
        <DataParticle key={`data-particle-${i}`} index={i} />
      ))}
      
      {/* Ondes de données techniques - réduites de 5 à 3 */}
      {Array.from({ length: 1 }, (_, i) => (
        <DataWave key={`data-wave-${i}`} index={i} />
      ))}
      
      {/* Effets de lumière technique ambiante - réduits et simplifiés */}
      <div className="absolute inset-0">
        {/* Source de lumière principale - cyan (technologie) */}
        <LightSource 
          position="top-1/4 left-1/4"
          color="rgba(0, 255, 255, 0.12)"
          size="w-80 h-80"
          opacity={10}
          duration={15}
        />
        
        {/* Source de lumière secondaire - vert (code) */}
        <LightSource 
          position="bottom-1/4 right-1/4"
          color="rgba(16, 185, 129, 0.1)"
          size="w-64 h-64"
          opacity={8}
          duration={18}
        />
      </div>
      
      {/* Effet de vignette technique */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/25" />
      
      {/* Code technique flottant - réduit de 15 à 8 lignes */}
      {/* <div className="absolute inset-0 opacity-8">
        {Array.from({ length: 8 }, (_, i) => (
          <FloatingCodeLine 
            key={`tech-code-${i}`}
            index={i}
            code={[
              "const code = 'elegant';",
              "function innovate() {",
              "  return 'future';",
              "}",
              "class Technology {",
              "  evolve() {",
              "    return 'amazing';",
              "  }",
              "}",
              "export default innovation;"
            ][i]}
          />
        ))}
      </div> */}
      
      {/* Grille de données techniques - CSS pur */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0, 255, 255, 0.015) 39px, rgba(0, 255, 255, 0.015) 40px),
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(16, 185, 129, 0.01) 39px, rgba(16, 185, 129, 0.01) 40px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Symboles techniques flottants - réduits de 8 à 4 */}
      <div className="absolute inset-0 opacity-12">
        {Array.from({ length: 4 }, (_, i) => (
          <TechSymbol 
            key={`tech-symbol-${i}`}
            index={i}
            symbol={[
              "⚛️", // React
              "⚡", // Performance
              "🔧", // Tools
              "🚀"  // Deployment
            ][i]}
            color={[
              'rgba(0, 255, 255, 0.5)',
              'rgba(16, 185, 129, 0.4)',
              'rgba(139, 92, 246, 0.3)',
              'rgba(236, 72, 153, 0.4)'
            ][i % 4]}
          />
        ))}
      </div>
      
      {/* Effet de profondeur technique avec couches multiples - CSS pur */}
      <div className="absolute inset-0">
        {/* Couche de profondeur 1 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80" />
        
        {/* Couche de profondeur 2 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        
        {/* Couche de profondeur 3 */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-black/25" />
      </div>
    </div>
  );
}
