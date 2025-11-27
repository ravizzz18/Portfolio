import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Preloader Effect
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  // Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <div 
        className="progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Main Content */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
