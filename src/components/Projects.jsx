import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaGithub, FaGlobe } from 'react-icons/fa';
import { getContent } from '../lib/contentApi';
import { isSupabaseConfigured } from '../lib/supabase';

const fallbackProjects = [
 ];

const Projects = () => {
  const [projects, setProjects] = useState(fallbackProjects);
  useEffect(() => {
    if (isSupabaseConfigured) getContent('project').then((items) => { if (items.length) setProjects(items.map((item, index) => ({ ...item, id: item.id, number: String(index + 1).padStart(2, '0'), image: item.image_url, type: item.category, tags: item.tags || [], github: item.github_url || item.github, demo: item.demo_url || item.demo }))); }).catch((error) => console.error('Unable to load published projects.', error));
  }, []);
  return <section id="projects" className="section-frame projects-section section-light">
    <div className="container">
      <div className="section-heading"><span className="section-index">03 /</span><h2>Selected<br /><em>work.</em></h2></div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article className="project-card" key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}>
            <div className="project-image"><img src={project.image || project.image_url} alt={`${project.title} project preview`} /><span>{project.number}</span></div>
            <div className="project-info"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3></div><p>{project.description}</p><div className="project-footer"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><FaGithub /></a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live website`}><FaGlobe /></a>}</div></div></div>
          </motion.article>
        ))}
      </div>
      <a className="text-link" href="https://github.com/ravizzz18" target="_blank" rel="noreferrer">View all on GitHub <FaArrowUp /></a>
    </div>
  </section>;
};

export default Projects;
