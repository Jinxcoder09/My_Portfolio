import React from 'react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Masters of Computer Application",
      institution: "DR. A.P.J. ABDUL KALAM TECHNICAL UNIVERSITY",
      period: "Jul 2023 - Jul 2025",
      details: "Major in Computer Science; Minors in Mathematics and Cumulative GPA: 7.71/10",
      color: "cyan"
    },
    {
      degree: "Bachelor of Science",
      institution: "DR. B.R. AMBEDKAR UNIVERSITY",
      period: "Jul 2020 - Jul 2023",
      details: "Major in Mathematics; Minors in Physics and Chemistry Cumulative GPA: 2.48/4.0",
      color: "purple"
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
          <span className="text-cyan-400 mr-4">//</span> EDUCATION
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => {
            const colors = getColorClasses(edu.color);
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
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex items-start">
                    <div className={`${colors.bg} p-3 rounded-lg mr-4`}>
                      <svg className={`w-8 h-8 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <div>
                      <motion.h3 
                        className={`text-2xl font-bold ${colors.text} font-['Orbitron']`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      <motion.p 
                        className="text-lg text-slate-300 mt-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        {edu.institution}
                      </motion.p>
                    </div>
                  </div>
                  <motion.div 
                    className={`${colors.bg} ${colors.text} px-4 py-2 rounded-full text-sm font-semibold mt-4 md:mt-0`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {edu.period}
                  </motion.div>
                </div>

                <motion.p 
                  className="text-slate-400 ml-16 text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  {edu.details}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
