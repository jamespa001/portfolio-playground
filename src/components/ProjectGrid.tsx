'use client';

import { useState } from 'react';
import { projectsData } from '@/data/projects';
import PreviewRotator from './PreviewRotator';
import { useModal } from '@/context/ModalContext';
import {
  NextJsIcon,
  ReactIcon,
  TypeScriptIcon,
  TailwindIcon,
  NodeJsIcon,
  ExpressIcon,
  PostgreSqlIcon,
  DockerIcon,
  SvgIcon,
  VercelIcon,
  TicketmasterIcon,
  FirebaseIcon,
  StripeIcon,
  ReduxIcon,
  OmdbIcon,
  AosIcon,
} from '@/components/TechIcons';

const getTechIcon = (name: string) => {
  if (name.includes('Next.js')) return NextJsIcon;
  if (name.includes('React')) return ReactIcon;
  if (name.includes('TypeScript')) return TypeScriptIcon;
  if (name.includes('Tailwind')) return TailwindIcon;
  if (name.includes('Node')) return NodeJsIcon;
  if (name.includes('Express')) return ExpressIcon;
  if (name.includes('PostgreSQL')) return PostgreSqlIcon;
  if (name.includes('Docker')) return DockerIcon;
  if (name.includes('SVG')) return SvgIcon;
  if (name.includes('Vercel')) return VercelIcon;
  if (name.includes('Ticketmaster')) return TicketmasterIcon;
  if (name.includes('Firebase')) return FirebaseIcon;
  if (name.includes('Stripe') || name.includes('Striped')) return StripeIcon;
  if (name.includes('Redux')) return ReduxIcon;
  if (name.includes('OMDb') || name.includes('API')) return OmdbIcon;
  if (name.includes('AOS')) return AosIcon;
  return null;
};

export default function ProjectGrid() {
  const [activeSlides, setActiveSlides] = useState<Record<string, number>>({});

  const { openContactModal } = useModal();

  // Track which specific grid item is currently being hovered over
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const handleSlideChange = (projectId: string, newIndex: number) => {
    setActiveSlides((prev) => ({ ...prev, [projectId]: newIndex }));
  };

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <div className="mb-16 text-center md:text-left">
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2 block">
          Portfolio Showcase
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Featured Flagship Works
        </h2>
        <p className="text-slate-400 text-base mt-3 max-w-2xl">
          Explore my core production-grade web applications, featuring advanced
          state management, responsive design, and modern interactive
          interfaces.
        </p>
      </div>

      {/* Stacked Cinematic Flagship Rows */}
      <div className="space-y-16">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;
          const currentSlide = activeSlides[project.id] || 0;
          const views = project.views || [];
          const activeView = views[currentSlide] || views[0];
          const isHovered = hoveredProjectId === project.id;

          return (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              className="bg-slate-900/90 rounded-[20px] overflow-hidden p-8 lg:p-12 border-[3px] border-[rgba(249,249,249,0.1)] shadow-[0_26px_30px_-10px_rgba(0,0,0,0.69)] transition-all duration-[250ms] [transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)] relative group hover:border-[rgba(249,249,249,0.4)] hover:shadow-[0_40px_50px_-12px_rgba(0,0,0,0.85)] hover:-translate-y-0 hover:scale-[1.0] backdrop-blur-xl"
            >
              {/* Conditional Ambient Gradient Light: Left for odd items, Right for even items */}
              <div
                className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500`}
              ></div>
              <div
                className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
              >
                {/* Left Column: Text Content & Actions */}
                <div
                  className={`lg:col-span-5 flex flex-col space-y-6 ${isEven ? '' : 'lg:col-start-8'}`}
                >
                  <div>
                    <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      Flagship Project 0{index + 1}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  {/* Scaled-down Mini Tech Stack Grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 pt-1">
                    {project.techStack.map((tech, idx) => {
                      const IconComponent = getTechIcon(tech);
                      return (
                        <div
                          key={idx}
                          className="flex flex-col items-center justify-between p-2 hover:border-indigo-500/40 transition-all group/tech"
                        >
                          {IconComponent ? (
                            <div className="relative overflow-hidden p-1.5 bg-slate-900/80 border border-slate-800/80 rounded-lg group-hover/tech:scale-105 transition-all">
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 flex items-center justify-center text-[10px] font-bold text-indigo-400 bg-slate-900 rounded-lg">
                              {tech.charAt(0)}
                            </div>
                          )}
                          <span className="text-[10px] font-semibold text-slate-300 tracking-tight mt-1.5 text-center line-clamp-1">
                            {tech}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
                      >
                        <span>Launch Live Demo</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}

                    <a
                      href={project.githubUrl || 'https://github.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 px-6 py-3 rounded-xl transition-all border border-slate-800 flex items-center gap-2"
                    >
                      <span>GitHub Repository</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Rotator Preview with Metadata Header Above */}
                <div
                  className={`lg:col-span-7 flex flex-col space-y-3 ${isEven ? '' : 'lg:col-start-1'}`}
                >
                  {/* Slide Meta Info Header with Integrated Carousel Dots */}
                  <div className="flex items-center justify-between px-1 flex-wrap gap-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      {/* Carousel Indicator Dots */}
                      <div className="bg-slate-950/70 backdrop-blur px-3 py-1.5 rounded-full flex space-x-1.5 border border-slate-800/50">
                        {views.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSlideChange(project.id, idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                              currentSlide === idx
                                ? 'w-5 bg-indigo-500'
                                : 'w-1.5 bg-slate-600 hover:bg-slate-400'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>

                      <span className="text-sm font-mono uppercase tracking-widest text-indigo-300 bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-500/30">
                        {activeView?.label}
                      </span>
                    </div>

                    <span className="text-sm text-slate-400 truncate font-medium hidden sm:inline-block">
                      {activeView?.desc}
                    </span>
                  </div>

                  {/* Preview Block Frame */}
                  <div className="w-full h-[340px] lg:h-[400px]">
                    <PreviewRotator
                      liveUrl={project.liveUrl}
                      views={views}
                      currentIndex={currentSlide}
                      onIndexChange={(newIdx) =>
                        handleSlideChange(project.id, newIdx)
                      }
                      interval={isHovered ? 1000 : 4000} // Faster rotation when hovered
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Get in Touch CTA Bridge */}
      <div className="mt-20 text-center">
        <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent w-full max-w-md mb-8"></div>

        <div className="flex flex-col items-center space-y-4">
          <p className="text-slate-400 text-sm">
            Want to dive deeper into the code repositories or check out the live
            builds of each project?
          </p>
          <button
            onClick={openContactModal}
            className="w-full sm:w-auto text-center font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl transition-all shadow-lg shadow-indigo-500/25 cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}
