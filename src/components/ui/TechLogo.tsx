"use client";

import { useState } from "react";
import Image from "next/image";
import { getTechLogo, getTechEmoji, isImageUrl } from "@/lib/tech-utils";

interface TechLogoProps {
  tech: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function TechLogo({ tech, size = "md", className = "" }: TechLogoProps) {
  const [imageError, setImageError] = useState(false);
  const logo = getTechLogo(tech);

  // Déterminer la taille des classes
  const sizeClasses = {
    sm: "w-3 h-3 text-xs",
    md: "w-4 h-4 text-sm", 
    lg: "w-6 h-6 text-base"
  };

  const sizeClass = sizeClasses[size];

  // Si c'est un emoji, l'afficher directement
  if (!isImageUrl(logo)) {
    return (
      <span className={`${sizeClass} flex items-center justify-center ${className}`}>
        {logo}
      </span>
    );
  }

  // Si c'est une URL d'image, essayer de la charger avec Next.js Image
  return (
    <>
      {/* Image avec gestion d'erreur silencieuse */}
      <Image
        src={logo}
        alt={tech}
        width={size === "sm" ? 12 : size === "md" ? 16 : 24}
        height={size === "sm" ? 12 : size === "md" ? 16 : 24}
        className={`${sizeClass} rounded-sm ${imageError ? 'hidden' : ''} ${className}`}
        onError={() => setImageError(true)}
        unoptimized
      />

      {/* Emoji de fallback en cas d'erreur */}
      {imageError && (
        <span className={`${sizeClass} flex items-center justify-center ${className}`}>
          {getTechEmoji(tech)}
        </span>
      )}
    </>
  );
}

// Composant TechLogo avec texte (pour les cartes de projet)
export function TechLogoWithText({ tech, size = "md", className = "" }: TechLogoProps) {
  return (
    <span className={`inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2 [a&]:hover:bg-primary/90 ${className}`}>
      <TechLogo tech={tech} size={size} />
      {tech}
    </span>
  );
}
