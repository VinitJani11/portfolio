import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Database, Terminal, Cpu, Target, ExternalLink, BarChart2, PieChart, FileText, Award } from "lucide-react";
import { SiPython, SiMysql, SiPostgresql, SiJavascript, SiHtml5, SiCss3, SiFlask, SiFastapi, SiNumpy, SiPandas, SiScikitlearn } from "react-icons/si";
import { Button } from "@/components/ui/button";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const certExcellencePdf = `${BASE}/certificates/Certificate_of_Excellence_-_Vinitkumar_Jani_1779190229072.pdf`;
const certInternshipPdf = `${BASE}/certificates/Certificate_of_Internship_Completion_-_Vinitkumar_Jani_1779190229073.pdf`;
const certModulePdf = `${BASE}/certificates/Certificate_of_Module_Completion_-_Vinitkumar_Jani_1779190229073.pdf`;
const certSqlPdf = `${BASE}/certificates/CertificateOfCompletion_Learning_SQL_Programming_(1)_1779190215966.pdf`;
const certMysqlPdf = `${BASE}/certificates/CertificateOfCompletion_MySQL_Essential_Training_1779190215969.pdf`;
const letterRecommendationPdf = `${BASE}/certificates/Letter_of_recommendation_-_Vinitkumar_Harekrushnabhai_Jani_1779190229073.pdf`;
const traineeshipPdf = `${BASE}/certificates/Traineeship_Experience_Letter_-_Vinitkumar_Harekrushnabhai_Jan_1779190229074.pdf`;

const GITHUB_PROFILE = "https://github.com/VinitJani11";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" }
];

const projects = [
  {
    title: "VigilAI — Real-Time Surveillance Ecosystem",
    tech: "YOLOv26-Nano • FastAPI • Tailwind • Roboflow",
    github: "https://github.com/VinitJani11/VigilAI",
    description: "AI-Driven Real-Time Surveillance Ecosystem. Achieved 32 FPS on consumer CPUs with mAP 0.825. Built with a FastAPI backend handling Base64 frame transmission and a Tailwind + Vanilla JS frontend.",
    metrics: [
      "Biometric face recognition + Explainable AI (Grad-CAM, LIME)",
      "Annotated 12,000-image dataset via Roboflow",
      "GDPR/ISO 27001 compliant Privacy by Design architecture"
    ]
  },
  {
    title: "London Crime Analytics Engine",
    tech: "SQL (MySQL) • XGBoost • Prophet • Power BI",
    github: "https://github.com/VinitJani11/london-crime-analysis-2008-2016",
    description: "Analyzed 13M+ police records using SQL Star Schema with weather data integration. Generated evidence-based seasonal staffing recommendations for Westminster Police.",
    metrics: [
      "40% query latency reduction via SQL Indexes & CTEs",
      "XGBoost + Facebook Prophet time-series forecasting",
      "Developed 12+ comprehensive interactive visualizations"
    ]
  },
  {
    title: "MediTrack — Hospital Management System",
    tech: "Python • MySQL • Tkinter",
    github: "https://github.com/VinitJani11/MediTrack-Hospital-Management-System",
    description: "Centralized patient records and appointment scheduling system. Implemented normalized database schema for robust data integrity and efficient management.",
    metrics: [
      "QuickSort + MergeSort for 40% record retrieval speed increase",
      "GUI built with Tkinter for staff adoption",
      "Secure, normalized SQL backend"
    ]
  },
  {
    title: "Journey Advisor — UK Travel Planner",
    tech: "Flask • MySQL • MVC",
    github: "https://github.com/VinitJani11/Journey-Advisor",
    description: "Full-stack UK travel planner featuring smart-search, secure session management, and integrated utility tools for travellers.",
    metrics: [
      "Carbon footprint + journey cost calculator integration",
      "Automated QR-code ticket generation",
      "MVC architecture for scalable maintenance"
    ]
  },
  {
    title: "Mobile Phone Selection System",
    tech: "Python • SQL • Decision Logic",
    github: "https://github.com/VinitJani11/Mobile-Phone-Selection-System",
    description: "An intelligent recommendation system that guides users through a structured selection process to find the best-fit mobile phone based on their preferences and requirements.",
    metrics: [
      "Rule-based decision engine for personalised recommendations",
      "SQL-backed product database for filtering and comparison",
      "Clean CLI interface for streamlined user interaction"
    ]
  }
];

const certificates = [
  {
    title: "Certificate of Excellence",
    issuer: "Victoria Solutions",
    date: "Sep 2025",
    pdf: certExcellencePdf,
    desc: "Awarded for outstanding performance in Data Analysis & AI Hands-On Training Program."
  },
  {
    title: "Certificate of Internship Completion",
    issuer: "Victoria Solutions",
    date: "Sep 2025",
    pdf: certInternshipPdf,
    desc: "Successfully completed the Data Analysis & AI Hands-On Training Program."
  },
  {
    title: "Certificate of Module Completion",
    issuer: "Victoria Solutions",
    date: "Sep 2025",
    pdf: certModulePdf,
    desc: "Completed courses in Data Analysis, Excel, Power BI, Tableau, and Business Strategy."
  },
  {
    title: "Learning SQL Programming",
    issuer: "LinkedIn Learning & NASBA",
    date: "Feb 2026",
    pdf: certSqlPdf,
    desc: "3.60 CPE credits. Certificate ID: 401623bb…"
  },
  {
    title: "MySQL Essential Training",
    issuer: "LinkedIn Learning",
    date: "Jan 2026",
    pdf: certMysqlPdf,
    desc: "1 hour 58 minutes. Top skill: MySQL."
  },
  {
    title: "Letter of Recommendation",
    issuer: "Victoria Solutions",
    date: "Sep 2025",
    pdf: letterRecommendationPdf,
    desc: "Written by Training Facilitator Lakshmi Haran, praising analytical skills and data-driven decision-making."
  },
  {
    title: "Traineeship Experience Letter",
    issuer: "Victoria Solutions",
    date: "Sep 2025",
    pdf: traineeshipPdf,
    desc: "Confirms 4-week Data Analysis & AI training covering SQL, Python, Power BI, and Tableau."
  }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight">
            VJ<span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                data-testid={`nav-link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_100%)] blur-[100px] scale-150 transform-gpu" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-wide" data-testid="hero-badge">
                <Target className="w-4 h-4" /> RANKED #1 IN DEPARTMENT
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.1] mb-6 tracking-tight">
                Vinitkumar Jani
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light max-w-2xl">
                Computing Science <span className="text-primary">|</span> Data Science <span className="text-primary">|</span> Business Analysis <span className="text-primary">|</span> Software Engineering
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 font-mono">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> London, UK</span>
                <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> Vinitjani1512@gmail.com</span>
                <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> 07721812382</span>
              </div>

              <div className="flex items-center gap-4">
                <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-mono tracking-wide" data-testid="hero-cta-projects">
                  <a href="#projects">VIEW WORK</a>
                </Button>
                <div className="flex items-center gap-2 ml-4">
                  <a href="https://www.linkedin.com/in/vinitkumar-jani-a82a932a5/?skipRedirect=true" target="_blank" rel="noreferrer" className="p-3 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors" data-testid="hero-link-linkedin">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer" className="p-3 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors" data-testid="hero-link-github">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 border-t border-border/50 relative bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-3xl font-display font-bold mb-4 flex items-center gap-3">
                  <Terminal className="w-6 h-6 text-primary" /> Profile
                </h2>
                <div className="h-1 w-12 bg-primary"></div>
              </div>
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="prose lg:prose-lg max-w-none text-muted-foreground font-light leading-relaxed"
                >
                  <p className="text-2xl text-foreground font-medium mb-6">
                    Bridging technical data and business strategy to build systems that matter.
                  </p>
                  <p>
                    I am a multi-disciplinary technologist ranked 1st in my Computing Science department at Coventry University, London. My expertise lies at the intersection of Data Science, Software Engineering, and Business Analysis. I don't just write code; I architect solutions that drive measurable impact.
                  </p>
                  <p>
                    From developing real-time AI surveillance systems to processing over 13 million crime records for evidence-based policing strategies, I thrive on complex, high-stakes problems. I bring a rigorous, privacy-by-design approach to engineering, backed by deep analytical capabilities and a drive for operational excellence.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
                    <div>
                      <div className="text-4xl font-display font-bold text-primary mb-2">#1</div>
                      <div className="text-sm font-mono text-muted-foreground">Department Rank</div>
                    </div>
                    <div>
                      <div className="text-4xl font-display font-bold text-primary mb-2">13M+</div>
                      <div className="text-sm font-mono text-muted-foreground">Records Processed</div>
                    </div>
                    <div>
                      <div className="text-4xl font-display font-bold text-primary mb-2">32</div>
                      <div className="text-sm font-mono text-muted-foreground">FPS AI Inference</div>
                    </div>
                    <div>
                      <div className="text-4xl font-display font-bold text-primary mb-2">40%</div>
                      <div className="text-sm font-mono text-muted-foreground">Latency Reduction</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 border-t border-border/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 flex items-center gap-3">
              <Cpu className="w-6 h-6 text-primary" /> Technical Arsenal
            </h2>
            <div className="h-1 w-12 bg-primary mb-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Languages",
                  skills: ["Python (Advanced)", "Java", "SQL", "JavaScript", "HTML5", "CSS3"],
                  icons: [<SiPython key="py"/>, <SiMysql key="sql"/>, <SiJavascript key="js"/>]
                },
                {
                  title: "Machine Learning & AI",
                  skills: ["XGBoost", "YOLOv26", "Facebook Prophet", "Time-Series Forecasting", "Scikit-learn", "Transfer Learning", "ONNX Runtime"],
                  icons: [<SiScikitlearn key="sk"/>]
                },
                {
                  title: "Data Visualization & XAI",
                  skills: ["Power BI", "Tableau", "Seaborn", "Matplotlib", "Plotly", "Grad-CAM", "LIME"],
                  icons: [<BarChart2 key="pbi"/>, <PieChart key="tab"/>]
                },
                {
                  title: "Frameworks & Libraries",
                  skills: ["Flask", "FastAPI", "SQLAlchemy", "Dlib", "NumPy", "Pandas"],
                  icons: [<SiFlask key="flask"/>, <SiFastapi key="fast"/>, <SiNumpy key="np"/>, <SiPandas key="pd"/>]
                },
                {
                  title: "Databases & Engineering",
                  skills: ["MySQL", "PostgreSQL", "ETL Pipelines", "Star Schema Design", "GitHub"],
                  icons: [<SiMysql key="mysql"/>, <SiPostgresql key="pg"/>, <Github key="gh"/>]
                },
                {
                  title: "Business Intelligence",
                  skills: ["Requirements Gathering", "Gap Analysis", "KPI Tracking", "Stakeholder Management", "GDPR", "NIST AI Risk Framework"],
                  icons: [<Target key="tgt"/>]
                }
              ].map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 border border-border bg-card/50 hover:border-primary/50 transition-colors group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors"></div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-display font-medium">{category.title}</h3>
                    <div className="flex gap-2 text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all">
                      {category.icons}
                    </div>
                  </div>
                  <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                    {category.skills.map(skill => (
                      <li key={skill} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span> {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 border-t border-border/50 bg-muted/20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-4 flex items-center gap-3">
              <Database className="w-6 h-6 text-primary" /> Key Projects
            </h2>
            <div className="h-1 w-12 bg-primary mb-16"></div>

            <div className="space-y-12">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-border bg-background p-8 group hover:border-primary/50 transition-colors"
                  data-testid={`project-card-${idx}`}
                >
                  <div className="lg:col-span-4">
                    <div className="text-xs font-mono text-primary mb-4">{String(idx + 1).padStart(2, '0')} // PROJECT</div>
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="text-sm font-mono text-muted-foreground mb-6">{project.tech}</div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:border-primary hover:text-primary text-muted-foreground text-sm font-mono transition-colors"
                      data-testid={`project-github-${idx}`}
                    >
                      <Github className="w-4 h-4" /> View on GitHub
                    </a>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <ul className="space-y-2">
                      {project.metrics.map(metric => (
                        <li key={metric} className="flex items-start gap-3 text-sm">
                          <span className="text-primary mt-1"><Target className="w-3 h-3" /></span>
                          <span className="text-foreground/90">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 border-t border-border/50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-display font-bold mb-4">Experience</h2>
                <div className="h-1 w-12 bg-primary mb-12"></div>

                <div className="space-y-12 border-l border-border pl-8 relative">
                  {[
                    {
                      role: "Customer Assistant (Convenience Channels)",
                      company: "M&S Pantheon",
                      date: "Oct 2025 – Present",
                      desc: "Utilizing digital analytical tools (Sparks) for localized customer trend tracking, optimizing stock flow and availability management."
                    },
                    {
                      role: "Data Analysis & AI Intern",
                      company: "Victoria Solutions",
                      date: "Jul 2025 – Sep 2025",
                      desc: "Developed Power BI/Tableau KPI dashboards, automated SQL ETL pipelines, and created Python automation scripts. Awarded Certificate of Excellence."
                    },
                    {
                      role: "IT Manager / Operations Analyst",
                      company: "G Asian Canteen",
                      date: "Jun 2024 – Aug 2024",
                      desc: "Digitalized manual inventory processes resulting in a 25% efficiency increase and 20% data accuracy improvement."
                    },
                    {
                      role: "Operations & Data Integrity",
                      company: "Pho Vietnamese Street Food",
                      date: "Jan 2024 – Jan 2026",
                      desc: "Managed POS systems for 50+ customers/day maintaining 100% financial accuracy and strict inventory control."
                    }
                  ].map((exp, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[41px] top-1 w-4 h-4 bg-background border-2 border-primary"></div>
                      <div className="text-sm font-mono text-primary mb-1">{exp.date}</div>
                      <h3 className="text-xl font-display font-bold">{exp.role}</h3>
                      <div className="text-muted-foreground font-mono text-sm mb-3">{exp.company}</div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="education">
                <h2 className="text-3xl font-display font-bold mb-4">Education & Certifications</h2>
                <div className="h-1 w-12 bg-primary mb-12"></div>

                <div className="mb-10 p-8 border border-border bg-card/50 relative overflow-hidden">
                  <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="text-sm font-mono text-primary mb-2">BSc Computing Science</div>
                  <h3 className="text-2xl font-display font-bold mb-2">Coventry University, London</h3>
                  <div className="inline-flex items-center gap-2 px-2 py-1 bg-primary/10 text-primary text-xs font-mono mb-6">
                    RANKED 1ST IN DEPARTMENT
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Key Modules:</strong> Big Data Analytics, Data Science &amp; Databases, Algorithms &amp; Programming, AI Applications, Computational Complexity, IT Infrastructure, Software Engineering.
                  </div>
                </div>

                <div className="space-y-3">
                  {certificates.map((cert, idx) => (
                    <motion.a
                      key={idx}
                      href={cert.pdf}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.06 }}
                      className="flex items-start gap-4 p-4 border border-border bg-background hover:border-primary hover:bg-primary/5 transition-colors group cursor-pointer block"
                      data-testid={`cert-link-${idx}`}
                    >
                      <div className="mt-1 text-primary shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{cert.title}</span>
                          <FileText className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                        </div>
                        <div className="text-xs font-mono text-primary mt-0.5">{cert.issuer} · {cert.date}</div>
                        <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{cert.desc}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-background text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-display font-bold mb-8">Ready to architect the future?</h2>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <a href="mailto:Vinitjani1512@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" data-testid="footer-email">
              <Mail className="w-5 h-5" /> Vinitjani1512@gmail.com
            </a>
            <a href="tel:07721812382" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" data-testid="footer-phone">
              <Phone className="w-5 h-5" /> 07721812382
            </a>
            <a href="https://linkedin.com/in/vinitkumarjani" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" data-testid="footer-linkedin">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" data-testid="footer-github">
              <Github className="w-5 h-5" /> GitHub
            </a>
          </div>

          <div className="text-sm text-muted-foreground font-mono opacity-50">
            © {new Date().getFullYear()} Vinitkumar Jani. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
