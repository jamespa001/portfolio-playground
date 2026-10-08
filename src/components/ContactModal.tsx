'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FileText,
  ExternalLink,
} from 'lucide-react';

import emailjs from '@emailjs/browser';

import {
  NextJsIcon,
  ReactIcon,
  TypeScriptIcon,
  TailwindIcon,
  NodeJsIcon,
  ExpressIcon,
  PostgreSqlIcon,
  DockerIcon,
} from '@/components/TechIcons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const techStack = [
  { name: 'Next.js', icon: NextJsIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'TypeScript', icon: TypeScriptIcon },
  { name: 'Tailwind CSS', icon: TailwindIcon },
  { name: 'Node.js', icon: NodeJsIcon },
  { name: 'Express', icon: ExpressIcon },
  { name: 'PostgreSQL', icon: PostgreSqlIcon },
  { name: 'Docker', icon: DockerIcon },
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage(
        'Failed to send message. Please try again or email me directly.',
      );
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const modalVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const slideLeftVariants = {
    hidden: { x: -150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
  };

  const slideRightVariants = {
    hidden: { x: 150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' as const },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-5xl max-h-[95vh] bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-y-auto my-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 text-slate-600 hover:text-slate-900 transition-colors bg-slate-100 border border-slate-200 rounded-full cursor-pointer shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: About & Tech Stack (Dark Theme) - Slides in from Left */}
            <motion.div
              variants={slideLeftVariants}
              className="w-full lg:flex-1 p-6 sm:p-10 lg:p-12 bg-slate-950 text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800/80"
            >
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-white">
                  Here&apos;s a bit about me.
                </h2>
                <p className="text-lg sm:text-xl font-bold text-slate-300">
                  Full-Stack Developer.
                </p>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    I&apos;m a Full-Stak software engineer with years of
                    software engineering experience working for{' '}
                    <strong className="text-indigo-400 font-semibold">
                      top tech
                    </strong>{' '}
                    companies.
                  </p>
                  <p>
                    I&apos;m currently leveraging this experience into
                    Full-Stack development with{' '}
                    <strong className="text-indigo-400 font-semibold">
                      passion
                    </strong>{' '}
                    for building{' '}
                    <strong className="text-indigo-400 font-semibold">
                      innovative modern web applications
                    </strong>{' '}
                    integrated with{' '}
                    <strong className="text-indigo-400 font-semibold">
                      AI
                    </strong>
                    .
                  </p>
                  <p>
                    Coming from a C# background, I bring strong foundational
                    engineering principles to modern full-stack web development.
                    I specialize in building responsive, high-performance
                    applications using{' '}
                    <strong className="text-indigo-400 font-semibold">
                      React, Next.js, TypeScript, Node.js, Tailwind CSS and
                      PostgreSQL
                    </strong>
                    .
                  </p>
                </div>

                {/* Resume Button */}
                <div className="pt-2">
                  <a
                    href="/james.park.resume.2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 border border-slate-800 rounded-xl text-xs font-semibold text-slate-200 hover:text-white transition-all shadow-sm group"
                  >
                    <FileText className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                    <span>View Resume</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3 mt-8">
                {techStack.map((tech) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-between p-3"
                    >
                      <div className="relative overflow-hidden p-2 bg-slate-950/80 border border-slate-800/80 rounded-xl group/icon hover:scale-105 hover:border-indigo-500/40 transition-all duration-300">
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-500/0 group-hover/icon:bg-indigo-500/30 rounded-full blur-xl transition-all duration-300 pointer-events-none" />
                        <div className="relative z-10">
                          <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                      </div>
                      <h4 className="text-[11px] font-bold text-white tracking-wide mt-2 text-center text-nowrap">
                        {tech.name}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column: Contact Form - Light Theme - Slides in from Right */}
            <motion.div
              variants={slideRightVariants}
              className="w-full lg:flex-1 p-6 sm:p-10 lg:p-12 bg-white text-slate-900 flex flex-col justify-center"
            >
              <div className="max-w-md mx-auto w-full space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    Let&apos;s have a chat!
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg">
                    I&apos;m currently open to frontend / full-stack developer
                    opportunities. Let&apos;s connect!
                  </p>
                </div>

                {status === 'success' ? (
                  <div className="py-12 text-center space-y-6">
                    <div className="inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-full">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">
                      Message Sent!
                    </h4>
                    <p className="text-slate-600 text-base max-w-sm mx-auto">
                      Thank you for reaching out. I have received your message
                      and will respond shortly.
                    </p>
                    <button
                      onClick={() => {
                        setStatus('idle');
                        onClose();
                      }}
                      className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/25 cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-5"
                  >
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 text-sm sm:text-base"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-slate-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-slate-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20 text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 resize-none text-sm sm:text-base"
                        placeholder="How can I help you?"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center space-x-3 text-rose-600 bg-rose-50 border border-rose-200 p-4 rounded-xl text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center space-x-2 font-bold bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/50 text-white px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-600/25 text-base cursor-pointer disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
