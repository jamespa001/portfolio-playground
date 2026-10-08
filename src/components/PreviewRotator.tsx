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
      {/* Footer Info Bar */}
      <div className="bg-slate-950 p-4 border-t border-slate-900 flex items-center justify-between shrink-0 relative z-10">
        <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>
            Live Rotator Active ({rotationSpeed}{' '}
            {rotationSpeed === '4x' ? (
              <svg
                className="w-3.5 h-3.5 text-indigo-400 fill-current inline -mr-0.5"
                viewBox="0 0 24 24"
              >
                {/* Double fast-forward */}
                <path d="M2 5l9 7-9 7V5zm10 0l9 7-9 7V5z" />
              </svg>
            ) : (
              <svg
                className="w-3.5 h-3.5 text-indigo-400 fill-current inline -mr-1.5"
                viewBox="0 0 24 24"
              >
                {/* Single play triangle with negative right margin to swallow the gap */}
                <path d="M5 4l10 8-10 8V4z" />
              </svg>
            )}
            )
          </span>
        </span>
      </div>
    </div>
  );
}
