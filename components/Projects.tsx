import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "VISION-AI (EyeVA AI)",
      period: "May 2025",
      description: "Flagship project of EyeVA AI - A revolutionary vision assistance solution for the visually impaired.",
      achievements: [
        "Achieved high accuracy using 2 pre-trained models (YOLO, SSD).",
        "Engineered a Vision-AI solution for the visually impaired, achieving 90% object detection accuracy with YOLO and SSD models.",
        "Currently training a custom model to improve accuracy to 95%+ for critical objects (e.g., traffic signs, obstacles)."
      ],
      color: "cyan",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "Face Recognition System",
      period: "Dec 2024",
      description: "Advanced facial recognition system with robust performance under varying conditions.",
      achievements: [
        "Built a face recognition system with 85% accuracy under varying lighting conditions.",
        "Integrated facial feature extraction, improving recognition consistency by 20%.",
        "Deployed a pre-trained database supporting 70+ user profiles for multi-session use."
      ],
      color: "purple",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { text: string; bg: string; border: string } } = {
      cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500" },
      purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500" }
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
          <span className="text-cyan-400 mr-4">//</span> FEATURED PROJECTS
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <motion.div
                key={index}
                className={`glass-effect p-8 rounded-3xl relative overflow-hidden card-3d border-2 ${colors.border}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl -z-10`}></div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div className="flex-1">
                    <motion.div
                      className="flex items-center mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mr-4`}>
                        <svg className={`w-6 h-6 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className={`text-3xl font-bold ${colors.text} font-['Orbitron']`}>
                          {project.title}
                        </h3>
                        <motion.p 
                          className="text-slate-400 text-sm mt-1"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                        >
                          {project.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div 
                    className={`${colors.bg} ${colors.text} px-4 py-2 rounded-full text-sm font-semibold mt-2 md:mt-0 md:ml-4`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {project.period}
                  </motion.div>
                </div>

                <ul className="space-y-3 mt-6">
                  {project.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start text-slate-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <span className={`${colors.text} mr-3 text-xl font-bold`}>✓</span>
                      <span className="text-lg">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>

                {index === 0 && (
                  <motion.div 
                    className="mt-6 flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                  >
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs font-semibold border border-cyan-500/50">
                      🏆 Flagship Project
                    </span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-semibold border border-yellow-500/50">
                      🚀 In Active Development
                    </span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
