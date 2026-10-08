'use client';

import { useEffect } from 'react';
import { useModal } from '@/context/ModalContext';

export default function GetInTouch() {
  const { openContactModal, isGetInTouchFocused, resetGetInTouchFocus } =
    useModal();

  useEffect(() => {
    if (!isGetInTouchFocused) return;

    // Allow React one frame to paint the expanded padding styles,
    // then execute smooth scroll so it calculates the correct center height.
    const rafId = requestAnimationFrame(() => {
      const timer = setTimeout(() => {
        const element = document.getElementById('getInTouch');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 50);
      return () => clearTimeout(timer);
    });

    // Reset focus only when the user physically interacts to scroll away
    // (wheel, touch swipe, or keyboard navigation)
    const handleUserInteraction = () => {
      resetGetInTouchFocus();
    };

    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchmove', handleUserInteraction, {
      passive: true,
    });
    window.addEventListener('keydown', handleUserInteraction);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchmove', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
    };
  }, [isGetInTouchFocused, resetGetInTouchFocus]);

  return (
    <section
      id="getInTouch"
      className={`transition-all duration-500 max-w-6xl mx-auto px-6 scroll-mt-24 text-center ${
        isGetInTouchFocused
          ? 'py-40 md:py-80 border-transparent'
          : 'py-28 border-t border-slate-900'
      }`}
    >
      <div className="space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
          Get In Touch
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Let&apos;s Build Something Amazing Together
        </h2>
        <p className="text-slate-400 text-lg">
          I&apos;m currently open to frontend / fullstack developer
          opportunities, collaborative projects, and technical discussions.
          Let&apos;s connect!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <button
            onClick={openContactModal}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2 cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Contact</span>
          </button>

          <a
            href="https://github.com/jamespa001"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold px-8 py-3.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
      {/* Spacer Div */}
      <div className="h-[50vh] md:h-[70vh]" aria-hidden="true" />
    </section>
  );
}
