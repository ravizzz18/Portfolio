import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Skills data
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 
    'TailwindCSS', 'HTML5', 'CSS3', 'Git',
    'MongoDB', 'Express', 'Java', 'C', 'C++', 'Python', 'Canva'
  ];

  // Timeline data
  const timeline = [
    {
      icon: FaGraduationCap,
      title: 'Bachelor\'s in Artificial Intelligence and Machine Learning',
      organization: 'B M S Institute of Technology and Management',
      period: '2024 - 2028',
      type: 'Education'
    },
    {
      icon: FaBriefcase,
      title: 'P R Team and Event Organisation',
      organization: 'Alterino - BMSIT&M',
      period: '2025 - Present',
      type: 'experience'
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Get to know me!
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate AI and Full Stack Developer with a love for creating beautiful, functional, and user-friendly projects. With expertise in modern web technologies, I transform ideas into engaging digital experiences.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I work across both frontend development and AI/ML. On the web side, I build responsive, user-centric interfaces using HTML, CSS, JavaScript, and React. As an AIML student, I also explore machine learning models, data-driven solutions, and AI-powered applications. Whether it’s crafting clean UI components or experimenting with intelligent systems, I enjoy combining design, code, and innovation to create meaningful digital experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
              Outside of work, you'll find me exploring new technologies, on the football field, enjoying good music, or relaxing with the people i care about. These activities keep me creative, active, and balanced.
              </p>
            </div>

            {/* Skills Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Education & Experience
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Icon */}
                    <div className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center ${
                      item.type === 'education' ? 'bg-primary' : 'bg-secondary'
                    } shadow-lg`}>
                      <item.icon className="text-white text-xl" />
                    </div>
                    
                    {/* Content */}
                    <div className="glass-card p-6">
                      <h4 className="text-lg font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {item.organization}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {item.period}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
