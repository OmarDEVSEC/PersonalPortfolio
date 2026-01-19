//the typing animation JS code, adjust speed and words displayed-->

const typed = new Typed(".auto-type",{
    strings: ["Omar","a Cybersecurity Admin","a Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })

// Projects data
const projects = [
  {
    title: "Project 1",
    desc: "A brief description of your first project and its key features.",
    languages: ["JavaScript", "React", "Node.js"],
    frameworks: ["Express", "MongoDB"],
    link: "#"
  },
  {
    title: "Project 2",
    desc: "Description of your second project highlighting technologies used.",
    languages: ["Python", "Azure"],
    frameworks: ["Django", "REST API"],
    link: "#"
  },
  {
    title: "Project 3",
    desc: "Overview of your third project and the problem it solves.",
    languages: ["Python", "Linux"],
    frameworks: ["Automation", "Security"],
    link: "#"
  }
];

// Populate projects
function populateProjects() {
  const container = document.getElementById('projects-container');
  
  if (!container) return;
  
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    const languagesTags = project.languages.map(lang => 
      `<span class="tag">${lang}</span>`
    ).join('');
    
    const frameworksTags = project.frameworks.map(fw => 
      `<span class="tag">${fw}</span>`
    ).join('');
    
    projectCard.innerHTML = `
      <h3 class="project-title">$ ${project.title}</h3>
      <p class="project-desc">${project.desc}</p>
      <div class="project-tags">
        <strong style="color: var(--accent-secondary); margin-right: 0.5rem;">Languages:</strong>
        ${languagesTags}
      </div>
      <div class="project-tags">
        <strong style="color: var(--accent-secondary); margin-right: 0.5rem;">Frameworks:</strong>
        ${frameworksTags}
      </div>
      <div class="project-links">
        <a href="${project.link}" class="project-link">View</a>
        <a href="${project.link}" class="project-link">Code</a>
      </div>
    `;
    
    container.appendChild(projectCard);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', populateProjects);
    link: "blog3.html"


function renderBlogPreviews() {
  const container = document.getElementById('blog-previews');
  if (container) {
    container.innerHTML = blogs.map(blog => `
      <div class="blog-card">
        <div class="blog-card-title">${blog.title}</div>
        <div class="blog-card-date">${blog.date}</div>
        <div class="blog-card-desc">${blog.desc}</div>
        <a class="blog-card-link" href="${blog.link}">Read More &rarr;</a>
      </div>
    `).join('');
  }
}

document.addEventListener('DOMContentLoaded', renderBlogPreviews);
