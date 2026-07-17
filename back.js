//the typing animation JS code, adjust speed and words displayed-->

const typed = new Typed(".auto-type",{
    strings: ["Cybersecurity Engineer","a Programmer"],
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

// Work experience data (sourced from resume.pdf)
// Consolidated into a single Security Engineer entry — merges the
// strongest, most relevant bullets across all roles held at Boeing
// Employee Credit Union (Intern -> Contractor -> Administrator -> Engineer)
// for a recruiter-friendly, no-date-noise summary. Full role-by-role
// history with dates still lives in resume.pdf.
const experience = [
  {
    role: "Security Engineer",
    company: "Boeing Employee Credit Union",
    bullets: [
      "Remediated 2.1 million+ exposed sensitive files using Varonis automation, reducing overall data exposure by 85.5%.",
      "Administered Azure AD for 5,000+ users, managing RBAC, PIM, conditional access, and identity protection policies.",
      "Managed and secured 500+ Azure resources, including VMs, storage accounts, networking, and security configurations.",
      "Deployed Microsoft Defender for Cloud Apps (MDCA) and Microsoft Purview DLP policies to block unauthorized AI tools and prevent data exfiltration.",
      "Increased log analysis efficiency by 60% using KQL queries, Azure Monitor, and Log Analytics for threat hunting.",
      "Improved compliance posture by 30% by implementing Microsoft Purview, Azure Policy, and security baselines.",
      "Reduced VM vulnerabilities by 50% by enforcing Defender for Servers, patch management, and security hardening best practices."
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
      </div>
      <div class="experience-company">${job.company}</div>
      <ul class="experience-bullets">${bullets}</ul>
    `;

    container.appendChild(card);
  });
}

// Skills / certifications / education data (sourced from resume.pdf)
const education = [
  { degree: "B.S., Cybersecurity and Information Assurance", school: "Western Governors University" },
  { degree: "A.S., Programming and IT Support", school: "Seattle Central College" },
  { degree: "Certificate in Computer Network Support", school: "Year Up / Seattle Central College" }
];

const certifications = [
  "Microsoft Certified: Azure Security Engineer Associate (AZ-500)",
  "Microsoft Certified: Azure Fundamentals (AZ-900)",
  "Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)",
  "CCNA",
  "CompTIA Security+",
  "CompTIA Network+",
  "CompTIA A+",
  "Oracle Cloud Foundations Associate"
];

const additionalTraining = [
  "Rapid Ascent Cybersecurity Certificate",
  "Google: Automate Cybersecurity Tasks with Python"
];

const coreSkills = [
  "Varonis", "Microsoft Purview", "Defender for Cloud Apps", "Microsoft Sentinel",
  "Azure Security", "Azure AD", "RBAC & PIM", "Zero Trust Architecture",
  "Kubernetes", "Docker", "Terraform", "CSPM",
  "Incident Response", "Threat Hunting", "SIEM", "KQL",
  "PowerShell", "Python", "Linux/Bash", "Active Directory"
];

function populateCertifications() {
  const container = document.getElementById('certifications-container');
  if (!container) return;

  const educationList = education.map(e =>
    `<li><strong>${e.degree}</strong> — ${e.school}</li>`
  ).join('');

  const certList = certifications.map(c => `<li>${c}</li>`).join('');

  const trainingList = additionalTraining.map(t => `<li>${t}</li>`).join('');

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
      <strong style="color: var(--accent-secondary);">Additional Training:</strong>
      <ul class="cert-list">${trainingList}</ul>
    </div>
    <div class="cert-group">
      <strong style="color: var(--accent-secondary); margin-right: 0.5rem;">Core Skills:</strong>
      <div class="project-tags" style="display: inline-flex; flex-wrap: wrap; margin-top: 0.5rem;">${skillTags}</div>
    </div>
  `;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  populateProjects();
  populateExperience();
  populateCertifications();
});
