import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const groups = [
  ['01', 'Interface', ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Figma']],
  ['02', 'Systems', ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'SQLite', 'Firebase', 'Supabase', 'REST APIs', 'Git', 'GitHub', 'Vercel', 'Docker']],
  ['03', 'AI & Intelligence', ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'OpenCV', 'Jupyter Notebook', 'Tesseract OCR']],
  ['04', 'Foundations', ['C', 'C++', 'Java', 'SQL', 'Data Structures & Algorithms', 'Object-Oriented Programming', 'Computer Vision', 'Machine Learning']],
];

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-frame skills-section">
      <div className="container">
        <div className="section-heading section-heading--light"><span className="section-index">02 /</span><h2>Tools for<br /><em>curiosity.</em></h2></div>
        <p className="section-note">A growing toolkit shaped by building, breaking, and learning.</p>
        <div className="skill-groups">
          {groups.map(([number, title, skills], index) => (
            <motion.div
              className="skill-group"
              key={title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
              transition={reduceMotion ? undefined : { delay: index * .08, duration: .45 }}
            >
              <span className="skill-number">{number}</span><h3>{title}</h3>
              <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
