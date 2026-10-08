'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function Navbar() {
  const { openContactModal, triggerGetInTouchFocus } = useModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavGetInTouch = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    triggerGetInTouchFocus(); // Handles state, styling, and smooth scrolling reliably!
  };

  // Custom programmatic smooth scroll handler for other sections
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    openContactModal();
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-white tracking-wide">
          James<span className="text-indigo-400">.dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            className="hover:text-indigo-400 transition-colors cursor-pointer"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="hover:text-indigo-400 transition-colors cursor-pointer"
          >
            Projects
          </a>
          <button
            onClick={openContactModal}
            className="hover:text-indigo-400 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#getInTouch"
            onClick={handleNavGetInTouch}
            className="hidden sm:inline-block text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full transition-all shadow-lg shadow-indigo-500/20 cursor-pointer"
          >
            Get in Touch
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white bg-slate-800/50 border border-slate-700/50 rounded-xl transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            className="block text-base font-medium text-slate-300 hover:text-indigo-400 transition-colors py-2"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="block text-base font-medium text-slate-300 hover:text-indigo-400 transition-colors py-2"
          >
            Projects
          </a>
          <button
            onClick={handleContactClick}
            className="block w-full text-left text-base font-medium text-slate-300 hover:text-indigo-400 transition-colors py-2 cursor-pointer"
          >
            Contact
          </button>
          <div className="pt-2">
            <a
              href="#getInTouch"
              onClick={handleNavGetInTouch}
              className="block w-full text-center text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-3 rounded-xl transition-all shadow-lg shadow-indigo-500/20 cursor-pointer"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
