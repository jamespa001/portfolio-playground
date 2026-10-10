'use client';

import React from 'react';
import { Project } from '@/types/project';

interface ProjectNavStripProps {
  projects: Project[];
}

export default function ProjectNavStrip({ projects }: ProjectNavStripProps) {
  const scrollToProject = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      console.warn(`Project element with id "${id}" not found.`);
    }
  };

  return (
    <div className="w-full my-6 flex flex-wrap items-center justify-start gap-2.5 py-1">
      {projects.map((project, index) => {
        const shortTitle = project.title.split(' ')[0];

        return (
          <button
            key={project.id}
            onClick={() => scrollToProject(project.id)}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all duration-200 whitespace-nowrap shrink-0 group flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span className="text-slate-500 font-mono text-[11px] group-hover:text-indigo-400 transition-colors">
              0{index + 1}
            </span>
            <span className="tracking-wide">{shortTitle}</span>
          </button>
        );
      })}
    </div>
  );
}
