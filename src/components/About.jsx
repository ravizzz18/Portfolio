import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="section-frame section-light">
    <div className="container">
      <div className="section-heading"><span className="section-index">01 /</span><h2>More than<br /><em>just code.</em></h2></div>
      <div className="about-layout">
        <motion.div className="about-lead" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p>I’m Ravindra, an Artificial Intelligence & Machine Learning student at BMSIT&M who likes turning curious ideas into useful, considered products.</p>
        </motion.div>
        <motion.div className="about-copy" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p>My work lives across frontend development and AI/ML. I care about responsive interfaces, clear systems, and the small details that make a digital experience feel intentional.</p>
          <p>When I’m not building, I’m exploring new technology, playing football, listening to good music, or spending time with people I care about.</p>
          <div className="about-meta"><span>Currently</span><strong>P R Team — Alterino, BMSIT&M</strong><span>2025 — present</span></div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
