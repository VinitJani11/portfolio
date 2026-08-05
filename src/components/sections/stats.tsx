import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  description: string;
}

const STATS: Stat[] = [
  {
    prefix: '',
    value: 13,
    suffix: 'M+',
    label: 'Records Analysed',
    description: 'Metropolitan Police crime records processed in London Crime project',
  },
  {
    prefix: '',
    value: 6,
    suffix: '',
    label: 'Projects Built',
    description: 'End-to-end systems spanning data analytics, IoT, AI, and web development',
  },
  {
    prefix: '',
    value: 25,
    suffix: '%',
    label: 'Efficiency Gain',
    description: 'Throughput increase delivered at G Asian Canteen through operational analysis',
  },
  {
    prefix: '#',
    value: 1,
    suffix: '',
    label: 'in Department',
    description: 'BSc Computing Science — top-ranked graduate in cohort',
  },
];

function AnimatedCounter({ target, prefix, suffix, inView }: { target: number; prefix: string; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="text-4xl md:text-5xl font-serif font-bold text-primary tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-16 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} inView={inView} />
              <p className="font-semibold text-foreground text-sm md:text-base">{stat.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed hidden md:block">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
