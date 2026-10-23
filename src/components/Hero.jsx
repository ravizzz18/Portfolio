import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';

const INTRO_STORAGE_KEY = 'ravindra-hero-intro-seen';

const Hero = ({ onIntroStateChange }) => {
  const reduceMotion = useReducedMotion();
  const portraitRef = useRef(null);
  const [portraitReady, setPortraitReady] = useState(false);
  const [portraitFailed, setPortraitFailed] = useState(false);
  const [introActive, setIntroActive] = useState(() => {
    if (typeof window === 'undefined' || reduceMotion) return false;
    try {
      return window.sessionStorage.getItem(INTRO_STORAGE_KEY) !== 'true';
    } catch {
      return true;
    }
  });
  const introCanPlay = portraitReady || portraitFailed;

  useEffect(() => {
    onIntroStateChange?.(introActive);
    return () => onIntroStateChange?.(false);
  }, [introActive, onIntroStateChange]);

  const finishIntro = useCallback(() => {
    try {
      window.sessionStorage.setItem(INTRO_STORAGE_KEY, 'true');
    } catch {
      // The intro still completes when session storage is unavailable.
    }
    setIntroActive(false);
  }, []);

  useEffect(() => {
    if (!introActive || !introCanPlay) return undefined;
    const timer = window.setTimeout(finishIntro, 2300);
    return () => window.clearTimeout(timer);
  }, [finishIntro, introActive, introCanPlay]);

  useEffect(() => {
    if (reduceMotion && introActive) finishIntro();
  }, [finishIntro, introActive, reduceMotion]);

  const handlePortraitLoad = () => setPortraitReady(true);
  const handlePortraitError = () => setPortraitFailed(true);
  const reveal = (delay = 0) => introActive
    ? { initial: false, animate: {} }
    : reduceMotion
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { delay, duration: .65, ease: 'easeOut' } };

  return (
    <section id="home" className={`hero section-frame${introActive ? ' hero--intro' : ''}${introCanPlay ? ' hero--intro-ready' : ''}`}>
      {introActive && <button type="button" className="hero-intro-skip" onClick={finishIntro}>Skip intro</button>}
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-stage" aria-hidden="true">
        <motion.div
          className="hero-name"
          initial={introActive || reduceMotion ? false : { opacity: 0 }}
          animate={introActive ? {} : { opacity: 1 }}
          transition={introActive || reduceMotion ? undefined : { duration: .85, delay: .15, ease: 'easeOut' }}
        >
          <span className="hero-name-initial" aria-hidden="true">R</span>
          <span className="hero-name-full">RAVINDRA</span>
        </motion.div>
        <motion.div
          className="hero-portrait"
          initial={introActive || reduceMotion ? false : { opacity: 0 }}
          animate={introActive ? {} : { opacity: 1 }}
          transition={introActive || reduceMotion ? undefined : { duration: .9, delay: .35, ease: 'easeOut' }}
        >
          <img ref={portraitRef} src="/hero-portrait-navy-clean.png" alt="Ravindra A" onLoad={handlePortraitLoad} onError={handlePortraitError} />
        </motion.div>
      </div>

      <div className="container hero-content">
        <motion.div className="hero-kicker" {...reveal(.1)}>
          <span className="eyebrow-dot" /> AIML student / developer
        </motion.div>
        <motion.p className="hero-identity" {...reveal(.22)}>
          AI-ML & full-stack developer
        </motion.p>
        <motion.div className="hero-bottom" {...reveal(.55)}>
          <p className="hero-intro">
            Building intelligent systems and digital experiences. I explore AI/ML and full-stack development, turning curious ideas into useful digital products.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button--solid">Explore my work <FaArrowDown /></a>
            <a href="#contact" className="button button--line">Let's connect <FaArrowUp /></a>
          </div>
        </motion.div>
      </div>

      <div className="hero-location">Bengaluru, India</div>
      <a className="scroll-cue" href="#about"><span>Scroll to discover</span><i /></a>
    </section>
  );
};

export default Hero;
