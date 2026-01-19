// Blog posts data
const blogs = [
  {
    title: "About Me",
    date: "July 2025",
    desc: "Learn more about Omar! A brief introduction to my background and interests.",
    link: "blogs/aboutme.html"
  },
  {
    title: "AZ-500 How To Pass and Challenges Faced",
    date: "July 2025",
    desc: "A guide on passing the AZ-500 and Becoming an Azure Security Wizard.",
    link: "blogs/Az500.html"
  },
  {
    title: "ImpelBrowser: Secure Browsing and AI Privacy",
    date: "May 2025",
    desc: "A quick guide to incident response and why every organization needs a plan.",
    link: "#"
  }
];

// Social links data
const socials = [
  {
    icon: "ri-github-fill",
    name: "GitHub",
    url: "https://github.com/OmarDEVSEC"
  },
  {
    icon: "ri-linkedin-box-fill",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/fullstackomar/"
  },
  {
    icon: "ri-twitter-x-line",
    name: "Twitter",
    url: "https://x.com/"
  },
  {
    icon: "ri-mail-line",
    name: "Email",
    url: "mailto:your-email@example.com"
  }
];

// Populate blogs
function populateBlogs() {
  const container = document.getElementById('blogs-container');
  
  if (!container) return;
  
  blogs.forEach((blog, index) => {
    const blogCard = document.createElement('div');
    blogCard.className = 'project-card';
    
    blogCard.innerHTML = `
      <h3 class="project-title">### ${blog.title}</h3>
      <p class="project-desc">${blog.desc}</p>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span class="tag" style="background: transparent; color: var(--accent-secondary); border: 1px solid var(--accent-secondary);">${blog.date}</span>
      </div>
      <a href="${blog.link}" class="project-link" style="align-self: flex-start;">
        Read More →
      </a>
    `;
    
    container.appendChild(blogCard);
  });
}

// Populate socials
function populateSocials() {
  const container = document.getElementById('socials-container');
  
  if (!container) return;
  
  socials.forEach(social => {
    const link = document.createElement('a');
    link.href = social.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = 'link-item';
    
    link.innerHTML = `
      <i class="${social.icon}"></i>
      <span>${social.name}</span>
    `;
    
    container.appendChild(link);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  populateBlogs();
  populateSocials();
});
