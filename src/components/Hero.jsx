import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => reduceMotion
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { delay, duration: .65, ease: 'easeOut' } };

  return (
    <section id="home" className="hero section-frame">
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-stage" aria-hidden="true">
        <motion.div
          className="hero-name"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reduceMotion ? undefined : { duration: .85, delay: .15, ease: 'easeOut' }}
        >
          RAVINDRA
        </motion.div>
        <motion.div
          className="hero-portrait"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1}}
          transition={reduceMotion ? undefined : { duration: .9, delay: .35, ease: 'easeOut' }}
        >
          <img src="/public/Elegant Man in Navy Kurta with Gold Watch.png" alt="Ravindra A" />
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
