import React from 'react';
import { FaArrowDown, FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => (
  <section id="home" className="hero section-frame">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
    <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
    <div className="container hero-content">
      <motion.div className="hero-kicker" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>
        <span className="eyebrow-dot" /> AIML student / frontend developer
      </motion.div>
      <motion.h1 className="display-title" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .25 }}>
        Ravindra<br /><em>A</em><span className="title-mark">®</span>
      </motion.h1>
      <div className="hero-bottom">
        <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }}>
          I explore the space between intelligent systems and expressive interfaces — building meaningful digital experiences with code.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}>
          <a href="#projects" className="button button--solid">Explore work <FaArrowDown /></a>
          <a href="#contact" className="button button--line">Let's talk <FaArrowUp /></a>
        </motion.div>
        <div className="hero-socials">
          <a href="https://github.com/ravizzz18" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com/in/ravizzz" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    </div>
    <div className="hero-portrait">
      <img src="/IMG_0224.png" alt="Ravindra A" />
      <span>Based in<br /><strong>Bengaluru, IN</strong></span>
    </div>
    <a className="scroll-cue" href="#about"><span>Scroll to discover</span><i /></a>
  </section>
);

export default Hero;
