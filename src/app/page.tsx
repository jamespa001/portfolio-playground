import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import About from '@/components/About';
import GetInTouch from '@/components/GetInTouch';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <About />
      <GetInTouch />
      <BackToTop />
    </main>
  );
}
