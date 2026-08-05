import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-serif font-bold text-primary">VJ</span>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Vinitkumar Jani. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/VinitJani11" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vinitkumar-jani-a82a932a5/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0a66c2] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToTop}
            className="rounded-full hover:bg-primary/10 hover:text-primary"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
