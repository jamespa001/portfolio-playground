import { FileText, ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 max-w-6xl mx-auto px-6 border-t  border-slate-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2 block">
            Background & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
            Bridging robust backend logic with modern frontend craftsmanship.
          </h2>
          <p className="text-slate-300 text-base leading-relaxed mb-4">
            Coming from a C# background, I bring strong foundational engineering
            principles to full-stack web development. I specialize in building
            scalable, high-performance applications using{' '}
            <strong className="text-indigo-400 font-semibold">
              React, Next.js, TypeScript, Node.js, Express and PostgreSQL
            </strong>
            .
          </p>
          <p className="text-slate-400 text-base leading-relaxed mb-6">
            Whether architecting RESTful APIs with Express and custom
            middleware, managing relational database transactions, or crafting
            polished user interfaces with Redux Toolkit and Tailwind CSS, I
            focus on clean code, robust system architecture, and exceptional
            user experience.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm font-medium">
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
              <span className="block text-indigo-400 font-bold text-lg mb-1">
                Full-Stack Core
              </span>
              <span className="text-slate-300">
                React, Next.js, Node.js, Express, TypeScript
              </span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
              <span className="block text-indigo-400 font-bold text-lg mb-1">
                Data & Architecture
              </span>
              <span className="text-slate-300">
                PostgreSQL, REST APIs, Middleware, Firebase
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="/james.park.resume.2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/30 group"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>View Resume</span>
              <ExternalLink className="w-4 h-4 text-indigo-200" />
            </a>
          </div>
        </div>

        {/* Terminal / Code Card Visual */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl font-mono text-xs sm:text-sm text-slate-300">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <span className="text-slate-500 text-xs">developer.config.ts</span>
          </div>
          <div className="space-y-2 text-slate-400">
            <p>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-indigo-300">developer</span> = &#123;
            </p>
            <p className="pl-4">
              name:{' '}
              <span className="text-emerald-400">&quot;James Park&quot;</span>,
            </p>
            <p className="pl-4">
              role:{' '}
              <span className="text-emerald-400">
                &quot;Full-Stack Developer&quot;
              </span>
              ,
            </p>
            <p className="pl-4">
              focus:{' '}
              <span className="text-emerald-400">
                &quot;Full-Stack Web Architecture&quot;
              </span>
              ,
            </p>
            <p className="pl-4">
              traits: [
              <span className="text-emerald-400">
                &quot;Problem Solver&quot;
              </span>
              ,{' '}
              <span className="text-emerald-400">
                &quot;Detail Oriented&quot;
              </span>
              ],
            </p>
            <p className="pl-4">
              status:{' '}
              <span className="text-emerald-400">
                &quot;Building scalable full-stack apps&quot;
              </span>
            </p>
            <p>&#125;;</p>
            <br />
            <p className="text-slate-500">
              Ready for new opportunities and challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
