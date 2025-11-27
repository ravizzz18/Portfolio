// ============================================
// 📝 PORTFOLIO DATA CONFIGURATION
// ============================================
// Edit this file to update your portfolio content easily!
// After making changes, save and refresh your browser.

export const personalInfo = {
  name: "Ravindra",
  title: "Frontend Developer | Web Enthusiast",
  description: "I craft beautiful, responsive web experiences with modern technologies. Passionate about creating intuitive user interfaces and bringing ideas to life through code.",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  profileImage: "https://via.placeholder.com/400x400/1e1e2e/0ea5e9?text=Your+Photo",
  resumeUrl: "/resume.pdf"
};

export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://instagram.com/yourusername"
};

export const aboutMe = {
  introduction: [
    "I'm a passionate Frontend Developer with a love for creating beautiful, functional, and user-friendly websites. With expertise in modern web technologies, I transform ideas into engaging digital experiences.",
    "I specialize in building responsive web applications using React, JavaScript, and modern CSS frameworks. My goal is to write clean, maintainable code that delivers exceptional user experiences across all devices.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
  ],
  
  skills: [
    'React', 'JavaScript', 'TypeScript', 'Node.js',
    'TailwindCSS', 'HTML5', 'CSS3', 'Git',
    'MongoDB', 'Express', 'REST APIs', 'Responsive Design'
  ],
  
  timeline: [
    {
      type: 'education',
      title: 'Bachelor\'s in Computer Science',
      organization: 'University Name',
      period: '2019 - 2023'
    },
    {
      type: 'experience',
      title: 'Frontend Developer',
      organization: 'Company Name',
      period: '2023 - Present'
    },
    {
      type: 'experience',
      title: 'Web Development Intern',
      organization: 'Startup Name',
      period: '2022 - 2023'
    }
  ]
};

export const skillsData = [
  { name: 'React', level: 90, icon: 'FaReact', color: '#61DAFB' },
  { name: 'JavaScript', level: 88, icon: 'SiJavascript', color: '#F7DF1E' },
  { name: 'TypeScript', level: 82, icon: 'SiTypescript', color: '#3178C6' },
  { name: 'Node.js', level: 80, icon: 'FaNode', color: '#339933' },
  { name: 'HTML5', level: 95, icon: 'FaHtml5', color: '#E34F26' },
  { name: 'CSS3', level: 93, icon: 'FaCss3Alt', color: '#1572B6' },
  { name: 'TailwindCSS', level: 90, icon: 'SiTailwindcss', color: '#06B6D4' },
  { name: 'MongoDB', level: 75, icon: 'SiMongodb', color: '#47A248' },
  { name: 'Express', level: 78, icon: 'SiExpress', color: '#000000' },
  { name: 'Git', level: 85, icon: 'FaGitAlt', color: '#F05032' },
  { name: 'Firebase', level: 72, icon: 'SiFirebase', color: '#FFCA28' },
  { name: 'Figma', level: 70, icon: 'FaFigma', color: '#F24E1E' }
];

export const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with cart functionality, payment integration, and admin dashboard.',
    image: 'https://via.placeholder.com/600x400/1e1e2e/0ea5e9?text=E-Commerce+Platform',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://demo-ecommerce.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with real-time data visualization and insights.',
    image: 'https://via.placeholder.com/600x400/1e1e2e/8b5cf6?text=Social+Dashboard',
    tags: ['React', 'Chart.js', 'TailwindCSS', 'Firebase'],
    github: 'https://github.com/yourusername/dashboard',
    demo: 'https://demo-dashboard.com',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with drag-and-drop, real-time updates, and team features.',
    image: 'https://via.placeholder.com/600x400/1e1e2e/06b6d4?text=Task+Manager',
    tags: ['React', 'TypeScript', 'Redux', 'Express'],
    github: 'https://github.com/yourusername/taskmanager',
    demo: 'https://demo-taskmanager.com',
    color: 'from-cyan-500 to-teal-500'
  },
  {
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed metrics.',
    image: 'https://via.placeholder.com/600x400/1e1e2e/3b82f6?text=Weather+App',
    tags: ['React', 'OpenWeather API', 'Leaflet', 'CSS3'],
    github: 'https://github.com/yourusername/weather',
    demo: 'https://demo-weather.com',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    title: 'Portfolio Template',
    description: 'Modern, responsive portfolio template with animations, dark mode, and customizable sections.',
    image: 'https://via.placeholder.com/600x400/1e1e2e/a78bfa?text=Portfolio+Template',
    tags: ['React', 'Framer Motion', 'TailwindCSS', 'Vite'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://demo-portfolio.com',
    color: 'from-violet-500 to-purple-500'
  },
  {
    title: 'Blog Platform',
    description: 'Full-featured blogging platform with markdown support, comments, and user authentication.',
    image: 'https://via.placeholder.com/600x400/1e1e2e/10b981?text=Blog+Platform',
    tags: ['Next.js', 'MongoDB', 'NextAuth', 'MDX'],
    github: 'https://github.com/yourusername/blog',
    demo: 'https://demo-blog.com',
    color: 'from-emerald-500 to-green-500'
  }
];

export const certifications = [
  {
    title: 'Meta Frontend Developer Professional Certificate',
    issuer: 'Meta (Facebook)',
    date: '2023',
    image: 'https://via.placeholder.com/400x300/1e1e2e/0ea5e9?text=Meta+Certificate',
    credentialUrl: '#'
  },
  {
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: '2023',
    image: 'https://via.placeholder.com/400x300/1e1e2e/8b5cf6?text=React+Course',
    credentialUrl: '#'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: '2022',
    image: 'https://via.placeholder.com/400x300/1e1e2e/06b6d4?text=JavaScript+Cert',
    credentialUrl: '#'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2022',
    image: 'https://via.placeholder.com/400x300/1e1e2e/10b981?text=Web+Design',
    credentialUrl: '#'
  },
  {
    title: 'Node.js Backend Development',
    issuer: 'Coursera',
    date: '2023',
    image: 'https://via.placeholder.com/400x300/1e1e2e/f59e0b?text=Node.js+Cert',
    credentialUrl: '#'
  },
  {
    title: 'Advanced CSS and Sass',
    issuer: 'Udemy',
    date: '2022',
    image: 'https://via.placeholder.com/400x300/1e1e2e/ec4899?text=CSS+Course',
    credentialUrl: '#'
  }
];

export const stats = {
  certifications: '6+',
  projects: '15+',
  experience: '2+',
  satisfaction: '100%'
};

// EmailJS Configuration
// Get these values from https://www.emailjs.com/
export const emailConfig = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY'
};
