import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Gallery from './components/Gallery';
import AdminPortal from './components/AdminPortal';

function App() {
  const isAdminRoute = window.location.pathname.replace(/\/+$/, '').split('/').pop() === 'admin';
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroIntroActive, setHeroIntroActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isAdminRoute) return <AdminPortal />;

  return (
    <div className={`site-shell${heroIntroActive ? ' site-shell--intro' : ''}`}>
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />
      <Navbar introActive={heroIntroActive} />
      <main>
        <Hero onIntroStateChange={setHeroIntroActive} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
