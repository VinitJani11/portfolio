import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const experiences = [
  {
    title: 'Customer Assistant',
    company: 'M&S Pantheon',
    location: 'London',
    period: 'Oct 2025 – Present',
    badge: null,
    bullets: [
      'Work directly on the shop floor in a high-volume M&S convenience store, gaining daily visibility into how product availability, stock replenishment and customer demand interact in practice.',
      'Use the Sparks analytics platform to monitor buying trends, identify availability gaps and feed observations into store-level decisions around layout and stock positioning.',
      'Regularly flag availability issues and coordinate with the team to resolve stock flow problems quickly, keeping service levels strong during peak trading periods.',
    ],
  },
  {
    title: 'Data Analysis & Performance Intern',
    company: 'Victoria Solutions',
    location: 'London',
    period: 'Jul – Sep 2025',
    badge: 'Certificate of Excellence',
    bullets: [
      'Built Power BI and Tableau dashboards tracking operational KPIs across multiple locations, giving stakeholders clear visibility into performance trends.',
      'Automated SQL pipelines pulling from multiple data sources, removing manual effort from the reporting process and accelerating time-to-insight.',
      'Presented findings to non-technical stakeholders, adjusting communication style to the audience to ensure analysis translated into action.',
    ],
  },
  {
    title: 'Operations Analyst',
    company: 'G Asian Canteen',
    location: 'London',
    period: 'Jun – Aug 2024',
    badge: null,
    bullets: [
      'Designed and built a digital inventory system from scratch, replacing paper-based tracking and improving stock accuracy by 20%.',
      'Analysed operational workflows to identify where time and stock were being lost, then redesigned processes to increase throughput by 25%.',
    ],
  },
  {
    title: 'Operations & Data Integrity Specialist',
    company: 'Pho Vietnamese Street Food',
    location: 'London',
    period: 'Jan 2024 – Jan 2026',
    badge: null,
    bullets: [
      'Managed stock rotation and inventory control across a high-volume kitchen environment serving 50+ covers daily, ensuring stock availability every shift.',
      'Maintained 100% transaction accuracy across POS systems throughout the role under consistent operational pressure.',
      'Optimised kitchen prep workflows to smooth out peak-hour demand, reducing wait times and keeping the operation efficient at volume.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative md:pl-20"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Dot on timeline */}
                  <motion.div
                    className="hidden md:flex absolute left-0 top-5 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.12 + 0.2, type: 'spring', stiffness: 200 }}
                  >
                    <Briefcase className="w-5 h-5 text-primary" />
                  </motion.div>

                  <motion.div
                    className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm overflow-hidden relative"
                    whileHover={{ y: -4, boxShadow: '0 12px 32px -8px rgba(0,0,0,0.12)' }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Subtle warm accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-8 -mt-8" />

                    <div className="relative z-10">
                      {/* Header row */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-serif font-bold text-foreground leading-tight">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-semibold mt-0.5">{exp.company}</p>
                        </div>

                        {exp.badge && (
                          <motion.span
                            className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-semibold border border-amber-200 dark:border-amber-800 shrink-0"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.12 + 0.35 }}
                          >
                            <Award className="w-3.5 h-3.5" />
                            {exp.badge}
                          </motion.span>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-3 text-muted-foreground text-sm mb-5">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Bullets — stagger in */}
                      <ul className="space-y-2.5">
                        {exp.bullets.map((bullet, i) => (
                          <motion.li
                            key={i}
                            className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.12 + 0.3 + i * 0.08 }}
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {bullet}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
