import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { Education } from '@/components/sections/education';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
