"use client";

import { TechLogoWithText } from "./TechLogo";

interface Project {
  title: string;
  fullDescription: string;
  technologies: string[];
  accentColor: string;
  features: string[];
}

interface ProjectDetailsProps {
  selectedProject: Project | null;
}

export function ProjectDetails({ selectedProject }: ProjectDetailsProps) {
  if (!selectedProject) return null;

  return (
    <div className="hidden py-4 lg:sticky lg:block lg:w-[35%]">
      <div className="sticky top-40">
        <div className="flex">
          <div 
            aria-hidden="true" 
            className="my-4 mr-4 h-1 min-w-6 rounded-full"
            style={{ backgroundColor: selectedProject.accentColor }}
          />
          <div className="flex flex-col items-start lg:h-[500px]">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold font-mono text-white">
                {selectedProject.title}
              </h3>
            </div>
            <p className="text-muted-foreground my-2 text-base font-light font-mono">
              {selectedProject.fullDescription}
            </p>
            
            {/* Points de détail du projet */}
            <ul className="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base font-mono">
              {selectedProject.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm">
                  <div className="mt-1 mr-2 size-5 shrink-0 rounded-full" style={{ backgroundColor: selectedProject.accentColor }}></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Technologies utilisées */}
            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              {selectedProject.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2 [a&]:hover:bg-primary/90"
                >
                  <TechLogoWithText tech={tech} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
