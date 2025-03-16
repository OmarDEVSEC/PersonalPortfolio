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