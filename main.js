/* Open and Close menu*/
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

const links = document.querySelectorAll('nav ul li a');

for (const element of links) {
  element.addEventListener('click', () => {
    nav.classList.remove('show');
  })
}

const header = document.querySelector("#header");
function changeHeader() {
  if (window.scrollY > 80) {
    header.classList.add('scroll')
  }
  else {
    header.classList.remove('scroll')
  }
}

const buttonUp = document.querySelector('.back-top');
function backToTop() {

  if (window.scrollY >= 2500) {
    buttonUp.classList.add('showup');
  }
  else {
    buttonUp.classList.remove('showup');
  }

}

// ActiveLinks
const sections = document.querySelectorAll('main section[id]')
function activateMenuSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active');
    }
    else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  }
}

window.addEventListener('scroll', () => {
  changeHeader();
  backToTop();
  activateMenuSection();
});

// Slide
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

// ScroolsAnimations
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900,
  reset: false
});

scrollReveal.reveal(`
    #home .image,
    #home .text,
    #backend header,
    #backend .card,
    #frontend header,
    #frontend .card,
    #projects header,
    footer .logo,
    footer .brand,
    footer .social
`, {
  interval: 100
});