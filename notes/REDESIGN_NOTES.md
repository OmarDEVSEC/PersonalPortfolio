# Portfolio Redesign Summary

## Changes Made

portfolio has been completely redesigned with a **terminal/CLI aesthetic** similar to alexwalker.app, featuring a modern dark theme with green/cyan accents.

### Files Updated/Created:

1. **index.html** (renamed from front.html)
   - Complete redesign with terminal-style sections
   - Added command prompts (`$`) for each section
   - Sections: whoami, about.txt, projects, external links, and exit
   - Clean, minimal structure optimized for scrolling

2. **style.css**
   - Completely rewritten with monospace font (Fira Code)
   - Color scheme: Dark background (#0a0e27) with green (#00ff88) and cyan (#00d4ff) accents
   - Terminal-inspired styling with border-left accents on sections
   - Responsive design for mobile and tablet
   - Grid layouts for projects and links

3. **back.js**
   - Updated to populate projects dynamically
   - Projects display with languages and frameworks
   - Hover effects and smooth transitions

4. **links.html** (NEW)
   - Dedicated page for blogs and social links
   - CLI-style command interface
   - Grid layout for easy browsing
   - Back navigation to home

5. **links.js** (NEW)
   - Populates blog posts with dates and descriptions
   - Populates social media links (GitHub, LinkedIn, Twitter, Email)
   - Easy to customize data

## Design Features

- **Terminal Aesthetic**: Command prompts, output styling
- **Color Scheme**: Dark navy background with neon green and cyan accents
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Monospace Font**: Fira Code for authentic terminal feel
- **Hover Effects**: Smooth transitions and visual feedback
- **Grid Layouts**: Projects and links display in responsive grids

## How to Customize

### Update Projects in back.js:
```javascript
const projects = [
  {
    title: "Your Project Name",
    desc: "Project description here",
    languages: ["JavaScript", "React"],
    frameworks: ["Express", "MongoDB"],
    link: "https://project-url.com"
  }
  // Add more projects...
];
```

### Update Blogs in links.js:
```javascript
const blogs = [
  {
    title: "Blog Title",
    date: "Month Year",
    desc: "Blog description",
    link: "blogs/filename.html"
  }
  // Add more blogs...
];
```

### Update Social Links in links.js:
```javascript
const socials = [
  {
    icon: "ri-icon-name",  // From Remixicon library
    name: "Platform Name",
    url: "https://link-url"
  }
  // Add more socials...
];
```

## Navigation Structure

- **Home (index.html)**
  - Introduction (whoami)
  - About details (cat about.txt)
  - Projects showcase (./show_projects.sh)
  - Links section with button to links page

- **Links (links.html)**
  - Blog posts list
  - Social media links
  - Back to home button

## Color Variables (in style.css)

- `--bg-primary`: #0a0e27 (Main background)
- `--bg-secondary`: #1a1f3a (Card background)
- `--accent-primary`: #00ff88 (Green accent)
- `--accent-secondary`: #00d4ff (Cyan accent)
- `--text-primary`: #e0e6ed (Main text)
- `--text-secondary`: #a0a6ad (Secondary text)
- `--border-color`: #2a2f4a (Borders)

## Next Steps

1. Update the blog descriptions in links.js
2. Add your real project data to back.js
3. Update social media links with your actual profiles
4. Add more blog entries as needed
5. Update your email in the socials section


