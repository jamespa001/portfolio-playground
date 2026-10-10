'use client';

import React from 'react';
import { useEffect } from 'react';
import { ProjectView } from '@/types/project';

interface PreviewRotatorProps {
  liveUrl?: string;
  views: ProjectView[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  interval?: number; // Optional interval for auto-rotation in milliseconds
}

export default function PreviewRotator({
  liveUrl,
  views,
  currentIndex,
  onIndexChange,
  interval = 4000, // Default fallback
}: PreviewRotatorProps) {
  useEffect(() => {
    if (!views || views.length === 0) return;
    const timer = setInterval(() => {
      onIndexChange((currentIndex + 1) % views.length);
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, onIndexChange, views, interval]);

  const currentView = views[currentIndex] || views[0];
  const rotationSpeed = interval === 1000 ? '4x' : '1x';

  return (
    <div className="flex-1 w-full h-full min-h-[320px] lg:min-h-[380px] bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between relative group shadow-2xl transition-all duration-500 hover:border-indigo-500/60">
      {/* Screenshot Display Window wrapped in an Anchor Tag */}
      <a
        href={liveUrl || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 relative overflow-hidden flex items-center justify-center cursor-pointer block"
      >
        {/* Actual Image Element inside the Link for bulletproof clickability */}
        <img
          src={currentView?.image}
          alt={currentView?.label || 'Project preview'}
          className="absolute inset-0 w-full h-full object-contain object-top transition-all duration-1000 transform scale-105 group-hover:scale-100"
        />

        {/* Subtle dark tint overlay for contrast */}
        <div className="absolute inset-0 bg-slate-950/10 pointer-events-none"></div>
      </a>

      {/* Footer Info Bar */}
      <div className="bg-slate-950 px-4 py-3 border-t border-slate-900 flex items-center justify-between shrink-0 relative z-10 gap-3">
        {/* Feature description aligned to top with fixed min-height to prevent jitter */}
        <p className="text-xs text-slate-300 font-medium flex-1 leading-relaxed min-h-[2.5rem] flex items-start pt-0.5">
          {currentView?.desc}
        </p>

        {/* Sleek speed badge on the right */}
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Speed ({rotationSpeed})</span>
        </div>
      </div>
    </div>
  );
}
