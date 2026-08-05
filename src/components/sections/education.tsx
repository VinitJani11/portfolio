import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          </div>

          <motion.div 
            className="relative bg-card rounded-3xl p-8 md:p-12 border border-border shadow-sm overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div className="space-y-4 flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 mb-2">
                  <Award className="w-4 h-4" />
                  <span>Ranked #1 in Department</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  BSc (Hons) Computing Science
                </h3>
                
                <div className="flex flex-wrap gap-4 text-muted-foreground text-sm font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>2020 — 2023</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>London, UK</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mt-4 leading-relaxed max-w-2xl">
                  Graduated with top honours, excelling in modules focused on Data Analytics, Machine Learning, Database Management, and Software Engineering. Consistently demonstrated a strong aptitude for solving complex algorithmic problems and deriving insights from large datasets.
                </p>
              </div>
              
              <div className="hidden md:flex w-24 h-24 rounded-2xl bg-secondary/10 items-center justify-center text-secondary flex-shrink-0">
                <GraduationCap className="w-12 h-12" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
