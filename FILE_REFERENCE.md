# 📁 File Reference Guide

## Quick Access to All Files

### 🔧 Configuration Files

| File | Purpose | What to Edit |
|------|---------|--------------|
| `package.json` | Dependencies | Add new packages |
| `vite.config.js` | Vite settings | Port, build options |
| `tailwind.config.js` | **COLORS & THEME** | Change color scheme |
| `postcss.config.js` | CSS processing | Rarely needed |
| `.gitignore` | Git exclusions | Add files to ignore |

---

### 📄 HTML & Entry Points

| File | Purpose | What to Edit |
|------|---------|--------------|
| `index.html` | Main HTML | Title, meta tags, fonts |
| `src/main.jsx` | React entry | Rarely needed |
| `src/App.jsx` | Main component | Add/remove sections |
| `src/index.css` | **GLOBAL STYLES** | Animations, utilities |

---

### 🎨 Component Files (src/components/)

| File | Section | What to Edit |
|------|---------|--------------|
| `Navbar.jsx` | Navigation | Menu items, logo |
| `Hero.jsx` | **HERO (TOP)** | Name, title, photo, description |
| `About.jsx` | **ABOUT ME** | Introduction, skills, timeline |
| `Skills.jsx` | **SKILLS** | Skills list, proficiency levels |
| `Projects.jsx` | **PROJECTS** | Your projects, links, images |
| `Certifications.jsx` | **CERTIFICATES** | Your certificates, stats |
| `Contact.jsx` | **CONTACT FORM** | EmailJS, contact info, socials |
| `Footer.jsx` | Footer | Social links, copyright |
| `Preloader.jsx` | Loading screen | Animation style |
| `ScrollToTop.jsx` | Scroll button | Style, position |
| `ParticleBackground.jsx` | Background effect | Particle count, color |

---

### 📊 Data Files

| File | Purpose | What to Edit |
|------|---------|--------------|
| `src/data/portfolioData.js` | **ALL CONTENT** | Personal info, projects, skills |

---

### 📚 Documentation Files

| File | Purpose | When to Read |
|------|---------|--------------|
| `README.md` | Full documentation | Complete reference |
| `PROJECT_COMPLETE.md` | **THIS FILE** | Project summary |
| `QUICK_START.md` | **START HERE** | Quick customization |
| `CUSTOMIZATION_EXAMPLES.md` | Examples | Need ideas |
| `EMAILJS_SETUP.md` | Email setup | Setting up contact form |
| `STRUCTURE.md` | Visual structure | Understanding layout |

---

## 🎯 Most Important Files to Edit

### Priority 1: Personal Information
1. **`src/components/Hero.jsx`** - Lines 56, 64, 73, 116
   - Your name
   - Your title
   - Your description
   - Your photo

2. **`src/components/About.jsx`** - Lines 17, 24-42, 47-60
   - Your introduction
   - Your skills
   - Your timeline

3. **`src/components/Contact.jsx`** - Lines 50-52, 82-90
   - EmailJS credentials
   - Contact information
   - Social media links

### Priority 2: Content
4. **`src/components/Projects.jsx`** - Lines 12-75
   - Your projects
   - Project images
   - GitHub/demo links

5. **`src/components/Skills.jsx`** - Lines 12-25
   - Your skills
   - Proficiency levels

6. **`src/components/Certifications.jsx`** - Lines 14-49
   - Your certificates
   - Certificate images

### Priority 3: Styling (Optional)
7. **`tailwind.config.js`** - Lines 8-12
   - Color scheme

8. **`src/index.css`** - Throughout
   - Custom animations
   - Global styles

---

## 📂 Folder Structure with Line Numbers

```
portfolio/
│
├── public/                           # Static assets folder
│   ├── resume.pdf                    # ADD YOUR RESUME HERE
│   └── images/                       # CREATE THIS FOLDER
│       ├── profile.jpg               # Your profile photo
│       ├── projects/                 # Project screenshots
│       └── certificates/             # Certificate images
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Lines to edit: 11-17, 67, 90
│   │   ├── Hero.jsx                 # Lines to edit: 56, 64, 73, 116
│   │   ├── About.jsx                # Lines to edit: 17, 24-42, 47-60
│   │   ├── Skills.jsx               # Lines to edit: 12-25
│   │   ├── Projects.jsx             # Lines to edit: 12-75
│   │   ├── Certifications.jsx       # Lines to edit: 14-49
│   │   ├── Contact.jsx              # Lines to edit: 50-52, 82-90
│   │   ├── Footer.jsx               # Lines to edit: 11-15, 18-22
│   │   ├── Preloader.jsx            # Usually no edits needed
│   │   ├── ScrollToTop.jsx          # Usually no edits needed
│   │   └── ParticleBackground.jsx   # Line 37: particle color
│   │
│   ├── data/
│   │   └── portfolioData.js         # EDIT EVERYTHING HERE
│   │
│   ├── App.jsx                      # Lines: 54-62 (sections)
│   ├── main.jsx                     # Don't edit
│   └── index.css                    # Lines: 32-50 (glass-card)
│                                     # Lines: 53-76 (neon-button)
│                                     # Lines: 79-85 (gradient-text)
│
├── index.html                        # Line 7: page title
│                                     # Lines 8-11: fonts
│
├── package.json                      # Add dependencies here
├── vite.config.js                   # Line 7: dev port
├── tailwind.config.js               # Lines 8-12: COLORS
├── postcss.config.js                # Don't edit
└── .gitignore                       # Add ignored files

```

---

## 🔍 Quick Find Guide

### Need to change...

**Your Name?**
- `src/components/Hero.jsx` → Line 56
- `src/components/Navbar.jsx` → Line 67
- `src/data/portfolioData.js` → Line 8

**Your Photo?**
- `src/components/Hero.jsx` → Line 116
- Add image to `public/images/profile.jpg`

**Colors?**
- `tailwind.config.js` → Lines 8-12

**Projects?**
- `src/components/Projects.jsx` → Lines 12-75
- Or `src/data/portfolioData.js` → Lines 49-99

**Skills?**
- `src/components/Skills.jsx` → Lines 12-25
- Or `src/data/portfolioData.js` → Lines 36-47

**Contact Info?**
- `src/components/Contact.jsx` → Lines 82-90
- Or `src/data/portfolioData.js` → Lines 10-13

**Social Links?**
- `src/components/Contact.jsx` → Lines 82-85
- `src/components/Footer.jsx` → Lines 18-22
- `src/components/Navbar.jsx` → Line 90
- Or `src/data/portfolioData.js` → Lines 15-20

**EmailJS?**
- `src/components/Contact.jsx` → Lines 50-52
- Or `src/data/portfolioData.js` → Lines 156-160

---

## 🎨 Common Edit Locations

### Hero Section (First Impression!)
```
src/components/Hero.jsx
├── Line 56: Your name
├── Line 64: Your title/role
├── Line 73: Your description
└── Line 116: Your photo URL
```

### About Section
```
src/components/About.jsx
├── Lines 17-28: Skills array
├── Lines 24-42: Timeline
└── Lines 47-60: Introduction paragraphs
```

### Projects Section
```
src/components/Projects.jsx
└── Lines 12-75: All projects
    ├── title
    ├── description
    ├── image
    ├── tags
    ├── github
    ├── demo
    └── color
```

### Contact Form
```
src/components/Contact.jsx
├── Lines 50-52: EmailJS config
├── Lines 82-90: Contact info
└── Lines 82-85: Social links
```

---

## 📝 Text Search Tips

Use VS Code search (Ctrl+F or Cmd+F) to find:

- `"Ravindra"` - All places with your name
- `"Frontend Developer"` - Your title
- `"https://github.com"` - All social links
- `"YOUR_SERVICE_ID"` - EmailJS config
- `"via.placeholder.com"` - All placeholder images
- `"#0ea5e9"` - Primary color
- `"yourusername"` - Username placeholders

---

## 🚀 Quick Edit Workflow

1. **Open VS Code**
2. **Search** (Ctrl+Shift+F) for text to replace
3. **Find All** instances
4. **Replace All** with your content
5. **Save** (Ctrl+S)
6. **Check browser** (auto-refreshes)

---

## 📍 File Locations Summary

### Images
```
public/
├── resume.pdf              ← Add your resume
└── images/
    ├── profile.jpg         ← Your photo
    ├── projects/           ← Project screenshots
    │   ├── project1.jpg
    │   ├── project2.jpg
    │   └── ...
    └── certificates/       ← Certificate images
        ├── cert1.jpg
        ├── cert2.jpg
        └── ...
```

### Code
```
src/
├── components/            ← All UI components
├── data/                  ← Content configuration
├── App.jsx               ← Main app
└── index.css             ← Global styles
```

### Config
```
Root/
├── tailwind.config.js    ← Colors & theme
├── vite.config.js        ← Build settings
├── package.json          ← Dependencies
└── index.html            ← HTML template
```

---

**Use this guide as your navigation map! 🗺️**
