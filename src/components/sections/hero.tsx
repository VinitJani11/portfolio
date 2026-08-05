import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Award, Github, Linkedin } from 'lucide-react';

import avatarUrl from '@assets/_AMI2233-1_1785923119021.jpg';

const ROLES = ['Data Analyst', 'Business Analyst', 'Computing Science Graduate'];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-[100dvh] flex items-center pt-24 pb-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div
          className="flex flex-col space-y-8 order-2 lg:order-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="space-y-4">
            {/* Badge row */}
            <div className="flex flex-wrap items-center gap-3">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium border border-border"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Award className="w-4 h-4 text-primary" />
                <span>Ranked #1 in Department</span>
              </motion.div>

              {/* Open to Work badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold border border-green-200 dark:border-green-800"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600" />
                </span>
                Open to Work
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-foreground leading-[1.1]">
              Hi, I'm <span className="text-primary">Vinitkumar</span>
              <br />
              <div className="h-[1.2em] relative overflow-hidden mt-2">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'backOut' }}
                    className="absolute inset-0 text-3xl md:text-4xl lg:text-5xl text-secondary-foreground/80 font-sans font-medium"
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-[500px] leading-relaxed">
            I turn complex data into clear, actionable business insights. Based in London, UK, and actively looking for new opportunities.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="rounded-full gap-2 px-8" asChild>
              <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}>
                View My Work <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://github.com/VinitJani11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-full text-muted-foreground hover:text-primary hover:border-primary transition-colors hover-elevate"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vinitkumar-jani-a82a932a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-full text-muted-foreground hover:text-[#0a66c2] hover:border-[#0a66c2] transition-colors hover-elevate"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
            <MapPin className="w-4 h-4" />
            <span>London, UK</span>
          </div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute inset-4 bg-gradient-to-tr from-primary/40 to-secondary/40 rounded-full" />
            <img
              src={avatarUrl}
              alt="Vinitkumar Jani"
              className="absolute inset-0 w-full h-full object-cover object-top rounded-full border-4 border-background shadow-xl hover-elevate transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
