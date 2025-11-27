# 🎨 Customization Examples

## Common Customization Scenarios

### 1. Change Color Scheme to Green Theme

**File:** `tailwind.config.js`

```javascript
colors: {
  primary: '#10b981',    // Green
  secondary: '#059669',  // Dark green
  accent: '#34d399',     // Light green
}
```

### 2. Change Color Scheme to Orange/Red Theme

```javascript
colors: {
  primary: '#f97316',    // Orange
  secondary: '#dc2626',  // Red
  accent: '#fb923c',     // Light orange
}
```

### 3. Add More Social Links

**File:** `src/components/Contact.jsx` (around line 80)

```javascript
const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/yourusername', label: 'GitHub', color: 'hover:text-gray-400' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: FaTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter', color: 'hover:text-sky-400' },
  { icon: FaInstagram, url: 'https://instagram.com/yourusername', label: 'Instagram', color: 'hover:text-pink-400' },
  // Add these:
  { icon: FaYoutube, url: 'https://youtube.com/@yourusername', label: 'YouTube', color: 'hover:text-red-500' },
  { icon: FaDribbble, url: 'https://dribbble.com/yourusername', label: 'Dribbble', color: 'hover:text-pink-500' },
  { icon: FaBehance, url: 'https://behance.net/yourusername', label: 'Behance', color: 'hover:text-blue-500' },
];
```

Don't forget to import the icons at the top:
```javascript
import { FaYoutube, FaDribbble, FaBehance } from 'react-icons/fa';
```

### 4. Change Animation Speed

**File:** `src/index.css`

```css
/* Make animations faster */
.glass-card {
  transition: all 0.2s ease; /* Changed from 0.3s */
}

.neon-button {
  transition: all 0.2s ease; /* Changed from 0.3s */
}

/* Make animations slower */
.glass-card {
  transition: all 0.5s ease; /* Changed from 0.3s */
}
```

### 5. Add a Blog Section

**Create:** `src/components/Blog.jsx`

```javascript
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'React',
      image: 'https://via.placeholder.com/600x400/1e1e2e/0ea5e9?text=Blog+Post',
      link: '/blog/react-hooks'
    },
    // Add more posts...
  ];

  return (
    <section id="blog" className="section-padding relative bg-dark-200/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Latest Articles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary rounded-full text-xs font-semibold">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <FaCalendar /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock /> {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {post.excerpt}
                </p>
                
                <a
                  href={post.link}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  Read More <FaArrowRight />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
```

Then add it to `App.jsx`:
```javascript
import Blog from './components/Blog';

// Inside the return statement, add:
<Blog />
```

### 6. Change Font

**File:** `index.html`

Replace the Google Fonts link with your preferred font:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

Then update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],
},
```

### 7. Add Testimonials Section

**Create:** `src/components/Testimonials.jsx`

```javascript
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Tech Company',
      image: 'https://via.placeholder.com/100x100',
      rating: 5,
      text: 'Amazing work! Professional, skilled, and delivered exactly what we needed.'
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager',
      image: 'https://via.placeholder.com/100x100',
      rating: 5,
      text: 'Exceptional developer with great communication skills. Highly recommended!'
    },
    // Add more testimonials...
  ];

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            What Clients Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <FaQuoteLeft className="text-3xl text-primary mb-4 opacity-50" />
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
```

### 8. Change Particle Color

**File:** `src/components/ParticleBackground.jsx`

Line 37, change the color:
```javascript
ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`; // Purple particles
// or
ctx.fillStyle = `rgba(16, 185, 129, ${this.opacity})`; // Green particles
```

### 9. Add a Services Section

**Create:** `src/components/Services.jsx`

```javascript
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaMobile, FaPalette, FaRocket } from 'react-icons/fa';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Building responsive, modern websites using the latest technologies.',
      features: ['React', 'Next.js', 'Node.js']
    },
    {
      icon: FaMobile,
      title: 'Mobile Responsive',
      description: 'Ensuring your website looks perfect on all devices and screen sizes.',
      features: ['Mobile First', 'Cross-browser', 'Performance']
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces that users love.',
      features: ['Figma', 'Wireframes', 'Prototypes']
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Optimizing websites for speed, SEO, and excellent user experience.',
      features: ['SEO', 'Speed', 'Analytics']
    }
  ];

  return (
    <section id="services" className="section-padding relative bg-dark-200/30">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            What I Do
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 text-center group hover:scale-105 transition-transform"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <service.icon className="text-4xl text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4">
                {service.description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                {service.features.map((feature, i) => (
                  <span key={i} className="px-3 py-1 text-xs bg-primary/10 border border-primary/30 text-primary rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
```

### 10. Remove/Disable Particle Background

If you find the particles distracting, simply comment out or remove this line in `App.jsx`:

```javascript
// <ParticleBackground />
```

---

## 🎨 Quick Style Changes

### Make Cards More Rounded
**File:** `src/index.css`
```css
.glass-card {
  border-radius: 30px; /* Changed from 20px */
}
```

### Increase/Decrease Animation Speed Globally
**File:** `src/index.css`
```css
* {
  transition-duration: 0.2s; /* Faster */
  /* or */
  transition-duration: 0.5s; /* Slower */
}
```

### Change Glow Intensity
**File:** `tailwind.config.js`
```javascript
boxShadow: {
  'neon-blue': '0 0 40px rgba(14, 165, 233, 0.8)', // More intense
  'neon-purple': '0 0 40px rgba(139, 92, 246, 0.8)',
}
```

---

**Experiment and make it your own! 🚀**
