import React from 'react';
import { motion } from 'framer-motion';

const groups = [
  ['01', 'Interface', ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Figma']],
  ['02', 'Systems', ['Node.js', 'Python', 'MongoDB', 'Git', 'Docker', 'Firebase']],
  ['03', 'Foundations', ['C', 'C++', 'Java', 'SQL', 'REST APIs']],
];

const Skills = () => (
  <section id="skills" className="section-frame skills-section">
    <div className="container">
      <div className="section-heading section-heading--light"><span className="section-index">02 /</span><h2>Tools for<br /><em>curiosity.</em></h2></div>
      <p className="section-note">A growing toolkit shaped by building, breaking, and learning.</p>
      <div className="skill-groups">
        {groups.map(([number, title, skills], index) => (
          <motion.div className="skill-group" key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .12 }}>
            <span className="skill-number">{number}</span><h3>{title}</h3>
            <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
