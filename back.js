//the typing animation JS code, adjust speed and words displayed-->

const typed = new Typed(".auto-type",{
    strings: ["Omar","a Cybersecurity Admin","a Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })
  

  /*=====SHOW MENU======*/

  const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

  /*=====Menu show======*/
  if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
  }

  /*=====Menu Hidden======*/
  if(navClose){
      navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
      })
  }

  //blog section JS code, blog preview cards

// Blog preview cards functionality
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
    link: "blog3.html"
  }
];

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
