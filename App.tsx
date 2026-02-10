import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import FloatingScene from './components/FloatingScene';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Leadership from './components/Leadership';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="app-container">
      {/* 3D Background Scene */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <FloatingScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Leadership />
        <Certifications />
        <Footer />
      </div>
    </div>
  );
}

export default App;
