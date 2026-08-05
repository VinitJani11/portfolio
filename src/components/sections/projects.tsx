import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';

// London Crime Analysis
import londonMain from '@assets/4_1785922374835.png';
import londonAlt1 from '@assets/3_1785922681292.png';
import londonAlt2 from '@assets/5_1785922681293.png';

// MediTrack
import mediMain from '@assets/4_1785922665700.png';
import mediAlt1 from '@assets/1_1785922665699.png';
import mediAlt2 from '@assets/2_1785922665699.png';
import mediAlt3 from '@assets/3_1785922665700.png';

// Journey Advisor
import journeyMain from '@assets/1_1785922859851.png';
import journeyAlt1 from '@assets/2_1785922859852.png';
import journeyAlt2 from '@assets/5_1785922859854.png';

// Mobile Phone Selection
import mobileMain from '@assets/1_1785922979512.png';
import mobileAlt1 from '@assets/2_1785922979513.png';

// VigilAI
import vigilMain from '@assets/dashboard_1785923067763.png';
import vigilAlt1 from '@assets/xai_1785923067764.png';

// SmartFridge IoT
import fridgeApp1 from '@assets/Screenshot_2026-06-05-10-22-03-941_com.vinitiot.smartfridge_1785923186342.jpg';
import fridgeApp2 from '@assets/Screenshot_2026-06-05-10-22-15-985_com.vinitiot.smartfridge_1785923186342.jpg';
import fridgeCircuit1 from '@assets/Screenshot_2026-05-27_145153_1785923205081.png';
import fridgeCircuit2 from '@assets/Screenshot_2026-05-27_145646_1785923205083.png';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  images: string[];
}

const PROJECTS: Project[] = [
  {
    title: "SmartFridge IoT — Real-Time Inventory Monitor",
    description: "An IoT-based smart shelf prototype using an ESP32 microcontroller, DHT22 temperature/humidity sensor, and MQTT protocol to monitor perishable food inventory in real time. Triggers local LCD, LED, and buzzer alerts when stock runs low, and syncs live data to an Adafruit IO cloud dashboard. Paired with a custom-built Android companion app (VinitIOT) for remote monitoring, threshold configuration, and instant push alerts — reducing retail food waste through intelligent sensing.",
    tags: ["ESP32", "IoT", "MQTT", "Adafruit IO", "DHT22 Sensor", "Android", "Arduino / C++", "Wokwi", "Cloud Dashboard"],
    github: "https://github.com/VinitJani11",
    images: [fridgeApp1, fridgeApp2, fridgeCircuit1, fridgeCircuit2],
  },
  {
    title: "London Crime Analysis & Forecasting",
    description: "Enterprise Big Data Analytics project analysing ~13 million Metropolitan Police crime records (2008–2016). Engineered robust ETL pipelines, applied predictive modelling, time-series forecasting, and interactive data visualisations to generate actionable insights for strategic policing and resource allocation.",
    tags: ["Python", "MySQL", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "ETL", "Time Series", "Predictive Modelling"],
    github: "https://github.com/VinitJani11/london-crime-analysis-2008-2016",
    images: [londonMain, londonAlt1, londonAlt2],
  },
  {
    title: "MediTrack — Hospital Management System",
    description: "A modern hospital management system featuring role-based access for Admins, Doctors, and Patients. MySQL backend with real-time sorting algorithm comparison (QuickSort, MergeSort, HeapSort) for efficient appointment and patient record management.",
    tags: ["Python", "Tkinter", "MySQL", "QuickSort", "MergeSort", "HeapSort", "GUI", "Role-Based Access"],
    github: "https://github.com/VinitJani11/MediTrack-Hospital-Management-System",
    images: [mediMain, mediAlt1, mediAlt2, mediAlt3],
  },
  {
    title: "Journey Advisor",
    description: "Sustainable travel planner for the UK — a CO₂-aware journey search and booking system helping users minimise carbon emissions. Features journey comparison by cost, time, and CO₂ output, a full booking flow, student discounts, and payment processing.",
    tags: ["Python", "Flask", "HTML", "CSS", "MySQL", "CO₂ Analytics", "Payment Processing"],
    github: "https://github.com/VinitJani11/Journey-Advisor",
    images: [journeyMain, journeyAlt1, journeyAlt2],
  },
  {
    title: "Mobile Phone Selection System",
    description: "Intelligent product recommendation system with payment processing. Users are guided through categories (Gaming, Photography, Daily Use) and the system displays specifications, pricing, and processes card or instalment payments — built on a carefully designed decision flowchart.",
    tags: ["Python", "GUI", "Flowchart Design", "Decision Trees", "Payment Processing"],
    github: "https://github.com/VinitJani11/Mobile-Phone-Selection-System",
    images: [mobileMain, mobileAlt1],
  },
  {
    title: "VigilAI — Real-Time Threat Detection",
    description: "AI-powered surveillance system using YOLO for real-time weapon detection (knife, pistol) and criminal face recognition. Features a live camera feed, criminal database, upload & detection history, and full AI explainability via Grad-CAM heatmaps and LIME superpixels.",
    tags: ["Python", "YOLO", "OpenCV", "Computer Vision", "Grad-CAM", "LIME / XAI", "HTML", "CSS", "Face Recognition"],
    github: "https://github.com/VinitJani11/VigilAI",
    images: [vigilMain, vigilAlt1],
  },
];

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative group rounded-2xl overflow-hidden border border-border shadow-md bg-muted aspect-video">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          className="w-full h-full object-cover object-top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Navigation arrows — only show if multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === current ? 'bg-primary w-4' : 'bg-background/60'
                }`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Featured Work
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl text-lg">
              A selection of projects demonstrating my ability to handle complex data, build robust systems, and extract meaningful insights.
            </p>
          </div>

          <div className="space-y-24">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                className={`flex flex-col gap-8 lg:gap-16 items-center ${
                  idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
              >
                {/* Image carousel */}
                <div className="w-full lg:w-1/2">
                  <ImageCarousel images={project.images} title={project.title} />
                  {project.images.length > 1 && (
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Hover to browse {project.images.length} screenshots
                    </p>
                  )}
                </div>

                {/* Text content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-tight">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-primary/15 text-primary border border-primary/25 text-xs font-bold uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-4">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full gap-2 px-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
