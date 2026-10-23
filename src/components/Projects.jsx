import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaGithub } from 'react-icons/fa';

const projects = [
  { number: '01', title: 'Smart Scheduling', type: 'AI-powered student time management system', description: 'An adaptive scheduling platform that combines personalization, cognitive science principles, and institutional scheduling automation.', image: '/st home.png', tags: ['FastAPI', 'MongoDB', 'React', 'TensorFlow'], github: 'https://github.com/jadeja027/Smart-Scheduling.git' },
  { number: '02', title: 'Smart Mess', type: 'Campus cafeteria management system', description: 'A full-stack application for meal ordering, menu management, payment tracking, inventory, and analytics.', image: '/DBMS.png', tags: ['Python', 'Flask', 'MySQL', 'JavaScript'], github: 'https://github.com/ravizzz18/Smart-Mess-Cafeteria-Management-System.git' },
  { number: '03', title: 'Number System Converter', type: 'A first step into building for the web', description: 'A focused utility for converting between binary, decimal, hexadecimal, and other number systems.', image: '/Screenshot 2025-12-03 232127.png', tags: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/ravizzz18/Number-System-Converter.git', demo: 'https://number-system-converter-one.vercel.app/' },
];

const Projects = () => (
  <section id="projects" className="section-frame projects-section section-light">
    <div className="container">
      <div className="section-heading"><span className="section-index">03 /</span><h2>Selected<br /><em>work.</em></h2></div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article className={`project-card project-card--${index + 1}`} key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}>
            <div className="project-image"><img src={project.image} alt={`${project.title} project preview`} /><span>{project.number}</span></div>
            <div className="project-info"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><p>{project.description}</p><div className="project-footer"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><FaGithub /></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}><FaArrowUp /></a>}</div></div></div>
          </motion.article>
        ))}
      </div>
      <a className="text-link" href="https://github.com/ravizzz18" target="_blank" rel="noreferrer">View all on GitHub <FaArrowUp /></a>
    </div>
  </section>
);

export default Projects;
