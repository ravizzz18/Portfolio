import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const milestones = [
  ['2026', 'IEEE AIDML — Paper Presentation', 'IEEE International Conference', '/1904_Ravindra A_page-0001.jpg'],
  ['2026', 'Artificial Intelligence Primer', 'Infosys Springboard', '/AI Certification.png'],
  ['2026', 'Code Red 3.0 Hackathon', 'E-Cell, BMSIT&M', '/Code Red.png'],
  ['2025', 'Build and Conquer — Winner', 'Alterino, BMSIT&M', '/Build and Conqueror.jpg'],
  ['2025', 'Workato Foundations Level 1', 'Workato', '/workato.jpg'],
];

const Certifications = () => (
  <section id="certifications" className="section-frame milestones-section">
    <div className="container">
      <div className="section-heading section-heading--light"><span className="section-index">04 /</span><h2>Things I’ve<br /><em>learned.</em></h2></div>
      <div className="milestones">
        {milestones.map(([year, title, issuer, image]) => (
          <a className="milestone" href={image} target="_blank" rel="noreferrer" key={title}>
            <span className="milestone-year">{year}</span><div className="milestone-thumb"><img src={image} alt="" /></div><div><h3>{title}</h3><p>{issuer}</p></div><FaArrowUp className="milestone-arrow" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
