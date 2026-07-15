//the typing animation JS code, adjust speed and words displayed-->

const typed = new Typed(".auto-type",{
    strings: ["Omar","a Cybersecurity Admin","a Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })

// Projects data
// TODO: replace these with real project entries (title, desc, languages,
// frameworks, demoUrl, repoUrl). Leave demoUrl blank ("") if there's no
// live demo — the "View" link only renders when demoUrl is set.
const projects = [
  {
    title: "[ADD REAL PROJECT] Project 1",
    desc: "A brief description of your first project and its key features.",
    languages: ["JavaScript", "React", "Node.js"],
    frameworks: ["Express", "MongoDB"],
    demoUrl: "",
    repoUrl: ""
  },
  {
    title: "[ADD REAL PROJECT] Project 2",
    desc: "Description of your second project highlighting technologies used.",
    languages: ["Python", "Azure"],
    frameworks: ["Django", "REST API"],
    demoUrl: "",
    repoUrl: ""
  },
  {
    title: "[ADD REAL PROJECT] Project 3",
    desc: "Overview of your third project and the problem it solves.",
    languages: ["Python", "Linux"],
    frameworks: ["Automation", "Security"],
    demoUrl: "",
    repoUrl: ""
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

    const links = [
      project.demoUrl ? `<a href="${project.demoUrl}" class="project-link" target="_blank" rel="noopener noreferrer">View</a>` : '',
      project.repoUrl ? `<a href="${project.repoUrl}" class="project-link" target="_blank" rel="noopener noreferrer">Code</a>` : ''
    ].join('');

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
        ${links}
      </div>
    `;

    container.appendChild(projectCard);
  });
}

// Work experience data
// TODO: replace with real roles (role, company, dates, bullets[])
const experience = [
  {
    role: "[ADD REAL ROLE]",
    company: "[ADD REAL COMPANY]",
    dates: "[ADD REAL DATES]",
    bullets: [
      "Replace this with a real responsibility or achievement.",
      "Replace this with a real responsibility or achievement."
    ]
  }
];

function populateExperience() {
  const container = document.getElementById('experience-container');
  if (!container) return;

  experience.forEach(job => {
    const card = document.createElement('div');
    card.className = 'experience-card';

    const bullets = job.bullets.map(bullet => `<li>${bullet}</li>`).join('');

    card.innerHTML = `
      <div class="experience-header">
        <h3 class="experience-role">${job.role}</h3>
        <span class="experience-dates">${job.dates}</span>
      </div>
      <div class="experience-company">${job.company}</div>
      <ul class="experience-bullets">${bullets}</ul>
    `;

    container.appendChild(card);
  });
}

// Skills / certifications / education data (real — sourced from blogs/aboutme.html)
const education = [
  { degree: "Bachelor of Science, Cybersecurity and Information Assurance", school: "Western Governors University" },
  { degree: "Associate of Science, Programming and IT Support", school: "Seattle Central College" }
];

const certifications = [
  "Microsoft Certified: Azure Security Engineer Associate (AZ-500)",
  "CCNA (in progress)",
  "Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)",
  "CompTIA A+",
  "CompTIA Security+",
  "CompTIA Network+"
];

const coreSkills = ["Azure", "Security", "Python", "Linux", "AI & Machine Learning"];

function populateCertifications() {
  const container = document.getElementById('certifications-container');
  if (!container) return;

  const educationList = education.map(e =>
    `<li><strong>${e.degree}</strong> — ${e.school}</li>`
  ).join('');

  const certList = certifications.map(c => `<li>${c}</li>`).join('');

  const skillTags = coreSkills.map(skill => `<span class="tag">${skill}</span>`).join('');

  container.innerHTML = `
    <div class="cert-group">
      <strong style="color: var(--accent-secondary);">Education:</strong>
      <ul class="cert-list">${educationList}</ul>
    </div>
    <div class="cert-group">
      <strong style="color: var(--accent-secondary);">Certifications:</strong>
      <ul class="cert-list">${certList}</ul>
    </div>
    <div class="cert-group">
      <strong style="color: var(--accent-secondary); margin-right: 0.5rem;">Core Skills:</strong>
      <div class="project-tags" style="display: inline-flex; margin-top: 0.5rem;">${skillTags}</div>
    </div>
  `;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  populateProjects();
  populateExperience();
  populateCertifications();
});
