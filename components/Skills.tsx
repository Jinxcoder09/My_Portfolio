import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python"],
      color: "cyan"
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "Flask", "Django", "REST APIs", "Microservices"],
      color: "purple"
    },
    {
      title: "AI/ML",
      skills: ["TensorFlow", "OpenCV", "YOLO", "PyTorch", "Keras", "Deep Learning"],
      color: "pink"
    },
    {
      title: "Database",
      skills: ["MySQL", "SQL", "Postgres", "MongoDB"],
      color: "blue"
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript"],
      color: "green"
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub"],
      color: "orange"
    },
    {
      title: "Cloud & DevOps",
      skills: ["Azure", "Docker"],
      color: "red"
    },
    {
      title: "Technical Reasoning",
      skills: ["Data Structures", "Algorithms"],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; text: string; hover: string } } = {
      cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/50", text: "text-cyan-400", hover: "hover:bg-cyan-500/20" },
      purple: { bg: "bg-purple-500/10", border: "border-purple-500/50", text: "text-purple-400", hover: "hover:bg-purple-500/20" },
      pink: { bg: "bg-pink-500/10", border: "border-pink-500/50", text: "text-pink-400", hover: "hover:bg-pink-500/20" },
      blue: { bg: "bg-blue-500/10", border: "border-blue-500/50", text: "text-blue-400", hover: "hover:bg-blue-500/20" },
      green: { bg: "bg-green-500/10", border: "border-green-500/50", text: "text-green-400", hover: "hover:bg-green-500/20" },
      orange: { bg: "bg-orange-500/10", border: "border-orange-500/50", text: "text-orange-400", hover: "hover:bg-orange-500/20" },
      red: { bg: "bg-red-500/10", border: "border-red-500/50", text: "text-red-400", hover: "hover:bg-red-500/20" },
      indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/50", text: "text-indigo-400", hover: "hover:bg-indigo-500/20" }
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
          <span className="text-cyan-400 mr-4">//</span> TECHNICAL SKILLS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.div
                key={index}
                className={`glass-effect p-6 rounded-3xl card-3d border ${colors.border}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.h3 
                  className={`text-2xl font-bold ${colors.text} font-['Orbitron'] mb-4`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {category.title}
                </motion.h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className={`${colors.bg} ${colors.text} px-4 py-2 rounded-full text-sm font-semibold border ${colors.border} ${colors.hover} transition-all cursor-default`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
