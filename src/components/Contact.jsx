import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaArrowUp, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const submit = async (event) => {
    event.preventDefault();
    setSending(true); setStatus('');
    try {
      await emailjs.send('service_t85ivn9', 'template_ib98dmt', Object.fromEntries(new FormData(formRef.current)), 'w72UV79y__WgBcHSo');
      formRef.current.reset(); setStatus('Message sent. I’ll be in touch soon.');
    } catch (error) {
      console.error('EmailJS Error:', error); setStatus('Could not send this time. Email me directly at ravindraaraj18@gmail.com.');
    } finally { setSending(false); }
  };
  return (
    <section id="contact" className="section-frame contact-section">
      <div className="container contact-layout">
        <div><span className="section-index">06 / CONTACT</span><h2 className="contact-title">Have an idea?<br /><em>Let’s make it real.</em></h2><a className="email-link" href="mailto:ravindraaraj18@gmail.com">ravindraaraj18@gmail.com <FaArrowUp /></a><div className="contact-socials"><a href="https://github.com/ravizzz18" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a><a href="https://linkedin.com/in/ravizzz" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a><a href="https://instagram.com/ravizzz___18" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a></div></div>
        <form className="contact-form" ref={formRef} onSubmit={submit}><label htmlFor="name">Your name<input id="name" name="from_name" required /></label><label htmlFor="email">Your email<input id="email" type="email" name="from_email" required /></label><label htmlFor="subject">Subject<input id="subject" name="subject" required /></label><label htmlFor="message">Tell me about it<textarea id="message" name="message" rows="4" required /></label>{status && <p className="form-status" role="status">{status}</p>}<button className="button button--solid" disabled={sending}>{sending ? 'Sending…' : 'Send message'} <FaArrowUp /></button></form>
      </div>
    </section>
  );
};

export default Contact;
