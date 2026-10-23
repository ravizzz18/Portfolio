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
import LoadingScreen from './components/LoadingScreen';

function App() {
  const isAdminRoute = window.location.pathname.replace(/\/+$/, '').split('/').pop() === 'admin';
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(!isAdminRoute);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isAdminRoute) return undefined;
    const timer = window.setTimeout(() => setIsLoading(false), 350);
    return () => window.clearTimeout(timer);
  }, [isAdminRoute]);

  if (isAdminRoute) return <AdminPortal />;

  return (
    <div className="site-shell">
      <LoadingScreen visible={isLoading} />
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
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
