import React from 'react';
import { motion } from 'framer-motion';

const Leadership: React.FC = () => {
  return (
    <section className="section-container py-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold font-['Orbitron'] gradient-text mb-12 flex items-center">
          <span className="text-cyan-400 mr-4">//</span> LEADERSHIP
        </h2>

        <motion.div
          className="glass-effect p-8 rounded-3xl relative overflow-hidden card-3d border-l-4 border-cyan-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div className="flex items-start">
              <div className="bg-cyan-500/10 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <motion.h3 
                  className="text-2xl font-bold text-cyan-400 font-['Orbitron']"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  President – Web Development Club
                </motion.h3>
                <motion.p 
                  className="text-lg text-slate-300 mt-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  WEBMANIAC, RBS Management Technical Campus, Agra
                </motion.p>
              </div>
            </div>
            <motion.div 
              className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mt-4 md:mt-0"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Sept 2024 – May 2025
            </motion.div>
          </div>

          <ul className="space-y-3 ml-16">
            <motion.li
              className="flex items-start text-slate-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-cyan-400 mr-3 text-xl">▹</span>
              <span className="text-lg">Collaborated with faculty and peers to launch new initiatives, enhancing the club's visibility on campus.</span>
            </motion.li>
            <motion.li
              className="flex items-start text-slate-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-cyan-400 mr-3 text-xl">▹</span>
              <span className="text-lg">Organized 5+ workshops and contests, increasing student engagement by 40%.</span>
            </motion.li>
            <motion.li
              className="flex items-start text-slate-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-cyan-400 mr-3 text-xl">▹</span>
              <span className="text-lg">The club consisted of over 85 student members during my presidency.</span>
            </motion.li>
          </ul>

          <motion.div 
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <div className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-500/50">
              👥 85+ Members Led
            </div>
            <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold border border-purple-500/50">
              📈 40% Engagement Increase
            </div>
            <div className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-semibold border border-pink-500/50">
              🎯 5+ Events Organized
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Leadership;
