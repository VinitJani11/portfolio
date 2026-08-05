import { motion } from 'framer-motion';
import { Database, LineChart, Target, Zap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm Vinitkumar. As a Computing Science graduate, I've spent the last few years immersing myself in the world of data, algorithms, and business logic.
              </p>
              <p>
                I believe that data on its own is just noise. My passion lies in transforming that noise into <strong className="text-foreground font-medium">clear, actionable business insights</strong>. Whether it's forecasting crime trends or building recommendation engines, I approach every problem with an analytical mindset and a focus on real-world impact.
              </p>
              <p>
                I'm currently based in London and actively looking for Data Analyst or Business Analyst roles where I can bring my technical skills (Python, SQL, Machine Learning) and business acumen to a forward-thinking team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <LineChart className="w-6 h-6 text-primary" />,
                  title: "Data Storytelling",
                  desc: "Translating complex datasets into intuitive visualisations."
                },
                {
                  icon: <Database className="w-6 h-6 text-primary" />,
                  title: "Robust Pipelines",
                  desc: "Building clean ETL processes and managing databases."
                },
                {
                  icon: <Zap className="w-6 h-6 text-primary" />,
                  title: "Actionable Insights",
                  desc: "Connecting analytical findings directly to business value."
                },
                {
                  icon: <Target className="w-6 h-6 text-primary" />,
                  title: "Problem Solving",
                  desc: "Approaching challenges methodically and creatively."
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="p-6 bg-background rounded-2xl border border-border shadow-sm hover-elevate"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4 bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
