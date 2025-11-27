# 🚀 Modern Portfolio Website

A stunning, fully responsive dark-mode portfolio website built with React, Vite, Framer Motion, and TailwindCSS. Features smooth animations, glassmorphism design, and a modern aesthetic.

![Portfolio Preview](https://via.placeholder.com/1200x600/1e1e2e/0ea5e9?text=Portfolio+Preview)

## ✨ Features

- 🎨 **Modern Dark Theme** with glassmorphism effects
- ⚡ **Smooth Animations** using Framer Motion
- 📱 **Fully Responsive** - works on mobile, tablet, and desktop
- 🌟 **Neon Accents** with blue/purple/cyan color scheme
- 🎯 **Sticky Navigation** with active section highlighting
- 📊 **Animated Progress Bar** while scrolling
- 🎪 **Parallax Hero Section** with floating tech icons
- ✨ **Particle Background** effects
- 📧 **EmailJS Integration** for contact form
- 🎠 **Horizontal Carousel** for certifications
- 🔝 **Scroll to Top** button
- 💫 **Smooth Page Transitions**
- 🎭 **Preloader Animation**

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **EmailJS** - Email service
- **React Intersection Observer** - Scroll animations

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Preloader.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── ParticleBackground.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The app will be running at `http://localhost:3000`

## 📝 Customization Guide

### 1. Personal Information

**Update Hero Section** (`src/components/Hero.jsx`):
```javascript
// Change your name
<span className="gradient-text">Your Name</span>

// Change subtitle
<h2>Your Title | Your Tagline</h2>

// Change description
<p>Your personal description...</p>

// Replace placeholder image
<img src="/path-to-your-image.jpg" alt="Your Name" />
```

### 2. About Section

**Edit About Me** (`src/components/About.jsx`):
```javascript
// Update introduction paragraphs
<p className="text-gray-300 leading-relaxed mb-6">
  Your introduction...
</p>

// Update skills array
const skills = [
  'Your Skill 1', 'Your Skill 2', // ... add your skills
];

// Update timeline
const timeline = [
  {
    icon: FaGraduationCap,
    title: 'Your Degree',
    organization: 'Your University',
    period: 'Year - Year',
    type: 'education'
  },
  // ... add more entries
];
```

### 3. Skills

**Modify Skills** (`src/components/Skills.jsx`):
```javascript
const skillsData = [
  { 
    name: 'Your Skill', 
    level: 90, // Proficiency level (0-100)
    icon: FaReact, // Choose appropriate icon
    color: '#61DAFB' // Icon color
  },
  // ... add more skills
];
```

### 4. Projects

**Add Your Projects** (`src/components/Projects.jsx`):
```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description...',
    image: '/path-to-project-image.jpg',
    tags: ['React', 'Node.js', 'MongoDB'], // Tech stack
    github: 'https://github.com/username/repo',
    demo: 'https://your-demo-url.com',
    color: 'from-blue-500 to-cyan-500' // Gradient color
  },
  // ... add more projects
];
```

### 5. Certifications

**Update Certifications** (`src/components/Certifications.jsx`):
```javascript
const certifications = [
  {
    title: 'Certificate Name',
    issuer: 'Issuing Organization',
    date: 'Year',
    image: '/path-to-certificate-image.jpg',
    credentialUrl: 'https://credential-url.com'
  },
  // ... add more certificates
];
```

### 6. Contact Form (EmailJS Setup)

**Configure EmailJS** (`src/components/Contact.jsx`):

1. **Sign up at** [EmailJS](https://www.emailjs.com/)
2. **Create an email service**
3. **Create an email template**
4. **Get your credentials**
5. **Update the code:**

```javascript
const serviceId = 'your_service_id';
const templateId = 'your_template_id';
const publicKey = 'your_public_key';
```

**Update contact information:**
```javascript
const contactInfo = [
  { icon: FaEnvelope, text: 'your.email@example.com', href: 'mailto:your.email@example.com' },
  { icon: FaPhone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: FaMapMarkerAlt, text: 'Your City, Country', href: null },
];
```

### 7. Social Links

**Update social media links** (in `Navbar.jsx`, `Contact.jsx`, `Footer.jsx`):
```javascript
const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: FaTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter' },
  { icon: FaInstagram, url: 'https://instagram.com/yourusername', label: 'Instagram' },
];
```

### 8. Colors & Theme

**Customize colors** (`tailwind.config.js`):
```javascript
colors: {
  primary: '#0ea5e9',    // Change primary color
  secondary: '#8b5cf6',  // Change secondary color
  accent: '#06b6d4',     // Change accent color
  dark: {
    100: '#1e1e2e',      // Adjust dark shades
    200: '#181825',
    300: '#11111b',
  }
}
```

### 9. Resume

Add your resume PDF to the `public` folder and update the links:
```javascript
<a href="/resume.pdf" download>
  View Resume
</a>
```

## 🎨 Customizing Images

### Replace Placeholder Images

1. **Profile Photo**: Replace in `src/components/Hero.jsx`
2. **Project Images**: Add to `public/projects/` folder
3. **Certificate Images**: Add to `public/certificates/` folder

### Recommended Image Sizes

- **Profile Photo**: 400x400px (square)
- **Project Images**: 600x400px (3:2 ratio)
- **Certificate Images**: 400x300px (4:3 ratio)

## 📦 Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

The optimized files will be in the `dist` folder, ready for deployment.

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
# Add to package.json:
# "homepage": "https://yourusername.github.io/portfolio"
# "scripts": {
#   "predeploy": "npm run build",
#   "deploy": "gh-pages -d dist"
# }
npm run deploy
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💡 Tips

1. **Use high-quality images** for better visual appeal
2. **Keep project descriptions concise** but informative
3. **Update content regularly** to showcase new work
4. **Test on multiple devices** before deploying
5. **Optimize images** for faster loading

## 🆘 Troubleshooting

### Common Issues

**Issue**: Module not found errors
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Issue**: EmailJS not working
```bash
# Solution: Check your EmailJS credentials and ensure they're correct
```

**Issue**: Build fails
```bash
# Solution: Check for syntax errors and missing dependencies
npm run build -- --debug
```

## 📞 Support

If you need help, feel free to:
- Open an issue
- Contact me via the contact form
- Reach out on social media

---

**Made with ❤️ using React + Tailwind + Framer Motion**

**Happy Coding! 🚀**
