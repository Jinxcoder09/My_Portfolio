import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="section-container py-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold font-['Orbitron'] gradient-text mb-12 flex items-center">
          <span className="text-cyan-400 mr-4">//</span> ABOUT ME
        </h2>
        
        <motion.div 
          className="glass-effect p-8 rounded-3xl relative overflow-hidden card-3d"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <motion.h3 
                className="text-3xl font-bold text-cyan-400 mb-4 font-['Orbitron']"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Founder of EyeVA AI
              </motion.h3>
              <motion.p 
                className="text-lg text-slate-300 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                As the founder of <span className="text-cyan-400 font-semibold">EyeVA AI</span>, I'm pioneering 
                innovative AI solutions for the visually impaired. My Vision-AI project achieved 90% object detection 
                accuracy and is continuously evolving to reach 95%+ accuracy for critical real-world applications.
              </motion.p>
            </div>
            
            <div>
              <motion.p 
                className="text-lg text-slate-300 leading-relaxed border-l-4 border-purple-500 pl-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Software Engineer with 1 year of experience in backend development, API integration, and deployment 
                automation using Flask, Spring Boot, and PostgreSQL. Skilled in AI/ML frameworks with proven project 
                experience in computer vision. Seeking to apply technical expertise and problem-solving skills to 
                deliver scalable and innovative software solutions.
              </motion.p>
            </div>
          </div>

          <motion.div 
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/30">
              <div className="text-3xl font-bold text-cyan-400 font-['Orbitron']">1+</div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
              <div className="text-3xl font-bold text-purple-400 font-['Orbitron']">90%</div>
              <div className="text-sm text-slate-400">AI Accuracy</div>
            </div>
            <div className="text-center p-4 bg-pink-500/10 rounded-xl border border-pink-500/30">
              <div className="text-3xl font-bold text-pink-400 font-['Orbitron']">15+</div>
              <div className="text-sm text-slate-400">Issues Resolved</div>
            </div>
            <div className="text-center p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
              <div className="text-3xl font-bold text-blue-400 font-['Orbitron']">25%</div>
              <div className="text-sm text-slate-400">Performance Boost</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
