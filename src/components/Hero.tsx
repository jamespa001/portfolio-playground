'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 flex flex-col items-start justify-center max-w-5xl mx-auto px-4">
      {/* Single Semantic H1 Tag for SEO and Accessibility */}
      <h1 className="tracking-tight text-slate-100 max-w-3xl leading-tight">
        <span className="block text-4xl sm:text-6xl font-bold">Hey</span>
        <span className="block text-5xl sm:text-7xl font-bold text-indigo-400 mt-1">
          I&apos;m James
        </span>
        <span className="block text-4xl sm:text-6xl font-bold mt-2">
          Frontend Developer
        </span>
      </h1>

      {/* Tagline / Subtitle */}
      <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
        Building high-performance, accessible, and responsive web applications
        with{' '}
        <strong className="text-indigo-400">
          React, Next.js, and TypeScript
        </strong>
        .
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/20 cursor-pointer"
        >
          View Flagship Projects
        </a>
        <a
          href="#getInTouch"
          className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-800 transition-all duration-200 cursor-pointer"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
