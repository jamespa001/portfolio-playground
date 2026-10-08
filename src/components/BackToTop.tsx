'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { resetGetInTouchFocus } = useModal();

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    resetGetInTouchFocus(); // Reset centered focus state if active
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    window.history.pushState(null, '', window.location.pathname);
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 p-3 bg-slate-900/90 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-800 hover:border-indigo-500 rounded-2xl shadow-2xl transition-all duration-300 backdrop-blur-md cursor-pointer group"
    >
      <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}
