import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Easydots Technologies",
      period: "August 2024 – September 2025",
      achievements: [
        "Developed and maintained backend services in Flask/PostgreSQL, improving API response times by 25%.",
        "Built and optimized RESTful APIs, enabling 3+ frontend and third-party integrations.",
        "Participated in code reviews, debugging, and performance tuning, resolving 15+ critical issues.",
        "Implemented Docker containers to streamline deployment and reduce setup time by ~40%."
      ],
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { border: string; bg: string; text: string } } = {
      cyan: { border: "border-cyan-500", bg: "bg-cyan-500/10", text: "text-cyan-400" },
      purple: { border: "border-purple-500", bg: "bg-purple-500/10", text: "text-purple-400" }
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section className="section-container py-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold font-['Orbitron'] gradient-text mb-12 flex items-center">
          <span className="text-cyan-400 mr-4">//</span> EXPERIENCE
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const colors = getColorClasses(exp.color);
            return (
              <motion.div
                key={index}
                className={`glass-effect p-8 rounded-3xl relative overflow-hidden card-3d border-l-4 ${colors.border}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 ${colors.bg} rounded-full blur-3xl -z-10`}></div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <motion.h3 
                      className={`text-3xl font-bold ${colors.text} font-['Orbitron'] mb-2`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.p 
                      className="text-xl text-slate-300 mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      {exp.company}
                    </motion.p>
                  </div>
                  <motion.div 
                    className={`${colors.bg} ${colors.text} px-4 py-2 rounded-full text-sm font-semibold mt-2 md:mt-0`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {exp.period}
                  </motion.div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start text-slate-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <span className={`${colors.text} mr-3 text-xl`}>▹</span>
                      <span className="text-lg">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
