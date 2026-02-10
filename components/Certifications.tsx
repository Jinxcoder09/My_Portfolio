import React from 'react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Deep Learning for Developers",
      issuer: "Infosys Springboard",
      icon: "🧠",
      color: "cyan"
    },
    {
      title: "Computer Vision",
      issuer: "Infosys Springboard",
      icon: "👁️",
      color: "purple"
    },
    {
      title: "Microsoft Azure AI Essentials",
      issuer: "Microsoft & LinkedIn Learning",
      icon: "☁️",
      color: "blue"
    },
    {
      title: "What is Generative AI?",
      issuer: "Microsoft & LinkedIn Learning",
      icon: "🤖",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { border: string; bg: string; text: string; hover: string } } = {
      cyan: { border: "border-cyan-500/50", bg: "bg-cyan-500/10", text: "text-cyan-400", hover: "hover:bg-cyan-500/20" },
      purple: { border: "border-purple-500/50", bg: "bg-purple-500/10", text: "text-purple-400", hover: "hover:bg-purple-500/20" },
      blue: { border: "border-blue-500/50", bg: "bg-blue-500/10", text: "text-blue-400", hover: "hover:bg-blue-500/20" },
      pink: { border: "border-pink-500/50", bg: "bg-pink-500/10", text: "text-pink-400", hover: "hover:bg-pink-500/20" }
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
          <span className="text-cyan-400 mr-4">//</span> CERTIFICATIONS
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const colors = getColorClasses(cert.color);
            return (
              <motion.div
                key={index}
                className={`glass-effect p-6 rounded-3xl card-3d border ${colors.border} ${colors.hover} transition-all cursor-pointer`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-start">
                  <motion.div 
                    className={`${colors.bg} p-4 rounded-xl text-3xl mr-4`}
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {cert.icon}
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3 
                      className={`text-xl font-bold ${colors.text} font-['Orbitron'] mb-2`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {cert.title}
                    </motion.h3>
                    <motion.p 
                      className="text-slate-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      {cert.issuer}
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <svg className={`w-6 h-6 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
