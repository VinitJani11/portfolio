import { motion } from 'framer-motion';
import {
  SiPython, SiMysql, SiPostgresql, SiFlask, SiGit, SiGithub,
  SiOpencv, SiHtml5, SiCss, SiArduino, SiAndroid,
  SiJupyter, SiSqlite,
} from 'react-icons/si';
import { Database, BarChart3, Brain, Cpu, Briefcase, Code2, Wrench } from 'lucide-react';

// Map skill name → icon element
const ICONS: Record<string, React.ReactNode> = {
  'Python': <SiPython className="text-[#3776ab]" />,
  'SQL': <SiSqlite className="text-[#003B57]" />,
  'MySQL': <SiMysql className="text-[#4479a1]" />,
  'PostgreSQL': <SiPostgresql className="text-[#336791]" />,
  'SQLite': <SiSqlite className="text-[#003B57]" />,
  'Flask': <SiFlask className="text-foreground" />,
  'Git': <SiGit className="text-[#f05032]" />,
  'GitHub': <SiGithub className="text-foreground" />,
  'OpenCV': <SiOpencv className="text-[#5C3EE8]" />,
  'HTML': <SiHtml5 className="text-[#e34f26]" />,
  'CSS': <SiCss className="text-[#1572b6]" />,
  'Arduino / C++': <SiArduino className="text-[#00979d]" />,
  'Android': <SiAndroid className="text-[#3ddc84]" />,
  'Jupyter Notebook': <SiJupyter className="text-[#f37626]" />,
};

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: <Code2 className="w-5 h-5" />,
    skills: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    color: 'bg-chart-2',
  },
  {
    title: 'Data & Analytics',
    icon: <BarChart3 className="w-5 h-5" />,
    skills: [
      'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn',
      'ETL / Data Pipelines', 'Time Series Forecasting', 'Predictive Modelling',
      'Dimensional Data Modelling',
    ],
    color: 'bg-chart-1',
  },
  {
    title: 'BI & Visualisation',
    icon: <BarChart3 className="w-5 h-5" />,
    skills: ['Power BI', 'Tableau', 'Jupyter Notebook'],
    color: 'bg-chart-3',
  },
  {
    title: 'Databases',
    icon: <Database className="w-5 h-5" />,
    skills: ['MySQL', 'PostgreSQL', 'SQLite'],
    color: 'bg-chart-4',
  },
  {
    title: 'AI & Computer Vision',
    icon: <Brain className="w-5 h-5" />,
    skills: ['YOLO', 'OpenCV', 'Machine Learning', 'Grad-CAM', 'LIME / XAI', 'Facial Recognition', 'Object Detection'],
    color: 'bg-chart-1',
  },
  {
    title: 'IoT & Hardware',
    icon: <Cpu className="w-5 h-5" />,
    skills: ['ESP32', 'DHT22 Sensor', 'MQTT', 'Adafruit IO', 'Arduino / C++', 'Android', 'Wokwi Simulation'],
    color: 'bg-chart-5',
  },
  {
    title: 'Tools & Frameworks',
    icon: <Wrench className="w-5 h-5" />,
    skills: ['Flask', 'Git', 'GitHub', 'VS Code', 'Tkinter'],
    color: 'bg-chart-2',
  },
  {
    title: 'Business & Strategy',
    icon: <Briefcase className="w-5 h-5" />,
    skills: [
      'Business Analysis', 'Requirements Gathering', 'Data Storytelling',
      'Stakeholder Reporting', 'KPI Dashboards', 'Operational Analysis',
    ],
    color: 'bg-chart-3',
  },
];

function SkillChip({ skill }: { skill: string }) {
  const icon = ICONS[skill];
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary/50 transition-colors">
      {icon && <span className="text-base leading-none">{icon}</span>}
      {skill}
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-16 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Technical Arsenal
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl text-lg">
              A balanced blend of hard technical skills and business understanding, focused on extracting value from data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((category, idx) => (
              <motion.div
                key={category.title}
                className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                whileHover={{ y: -3 }}
              >
                <h3 className="text-xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full ${category.color}`} />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <SkillChip key={skill} skill={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
