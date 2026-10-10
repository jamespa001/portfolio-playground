'use client';

import React, { useState, useEffect } from 'react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-20 right-6 z-50 w-10 h-10 bg-slate-900/95 hover:bg-indigo-600 text-slate-300 hover:text-white rounded-sm border border-slate-800 hover:border-indigo-500 shadow-2xl backdrop-blur-md transition-all duration-300 group cursor-pointer flex items-center justify-center rotate-45"
    >
      {/* Rotated Top Button */}
      <span className="flex items-center justify-center">
        <span className="text-[10px] font-mono font-semibold tracking-wider uppercase -rotate-45">
          Top
        </span>
      </span>
    </button>
  );
}
