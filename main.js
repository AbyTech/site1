// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

navbar.onclick = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};







// SCROLL SECTION
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    
    let header = document.querySelector(header);

    header.classList.toggle('sticky', window.scrollY > 100);
};





const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fullName = document.querySelector('input[placeholder="Full Name"]').value;
  const email = document.querySelector('input[placeholder="Email Address"]').value;
  const mobileNumber = document.querySelector('input[placeholder="Mobile Number"]').value;
  const emailSubject = document.querySelector('input[placeholder="Email Subject"]').value;
  const message = document.querySelector('textarea[placeholder="Your Message"]').value;

  const mailToLink = `mailto:abrahamisaacjames22@gmail.com?subject=${emailSubject}&body=Name: ${fullName}%0AEmail: ${email}%0AMobile Number: ${mobileNumber}%0AMessage: ${message}`;

  window.location.href = mailToLink;
});








// Scroll Reveal Animations
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Home section animations
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Services section animations with cascade effect
ScrollReveal().reveal('.services-box', { 
    origin: 'bottom',
    interval: 200 
});

// Portfolio items with stagger effect
ScrollReveal().reveal('.portfolio-box', { 
    origin: 'left',
    interval: 300,
    distance: '100px' 
});

// Contact form elements with fade in
ScrollReveal().reveal('.contact form .input-box', { 
    origin: 'right',
    interval: 100 
});

// let selectins = document.querySelectorAll