export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full mb-6">
            Frontend Developer Portfolio Hub
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Building modern web experiences with{' '}
            <span className="text-indigo-400">precision & passion.</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Welcome to my personal playground. From early HTML/CSS roots to
            advanced React, TypeScript, and Next.js applications—explore my
            journey and projects all in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto text-center font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-xl transition-all shadow-lg shadow-indigo-500/25"
            >
              Explore Projects
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto text-center font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 px-8 py-3 rounded-xl transition-all border border-slate-700"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
