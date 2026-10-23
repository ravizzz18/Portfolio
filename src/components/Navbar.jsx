import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ introActive = false }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const current = links
        .map(({ href }) => document.getElementById(href.slice(1)))
        .find((section) => section && section.getBoundingClientRect().top <= 140 && section.getBoundingClientRect().bottom >= 140);
      if (current) setActive(current.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (event, href) => {
    event.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`nav-wrap${introActive ? ' nav-wrap--intro' : ''} ${scrolled ? 'nav-wrap--scrolled' : ''}`}>
      <nav className="nav container" aria-label="Primary navigation">
        <a className="monogram" href="#home" onClick={(event) => goTo(event, '#home')} aria-label="Ravindra A home">
          RAVINDRA<span></span>
        </a>
        <div className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={active === link.href.slice(1) ? 'is-active' : ''} onClick={(event) => goTo(event, link.href)}>
              <span>0{links.indexOf(link) + 1}</span>{link.label}
            </a>
          ))}
          <a className="nav-resume" href="/Resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
        </div>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
