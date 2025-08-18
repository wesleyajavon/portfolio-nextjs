"use client";

import { TechLogoWithText } from "./TechLogo";

interface TechBadgeProps {
  tech: string;
  className?: string;
}

export function TechBadge({ tech, className = "" }: TechBadgeProps) {
  return (
    <div className={`flex justify-center items-center gap-2 px-3 py-1 rounded-lg border border-gray-600/50 bg-gray-800/50 text-gray-300 hover:border-green-500/50 hover:bg-gray-700/50 transition-all duration-200 ${className}`}>
      <TechLogoWithText tech={tech} size="sm" />
    </div>
  );
}
