//Toggle Menu

let hamburger = document.querySelector('.header .navbar .navlist .hamburger');
let toggleMenu = document.querySelector('.header .navbar .navlist ul');
let header = document.querySelector('.header.container');
let navLinks = document.querySelectorAll('.header .navbar .navlist ul li a');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    toggleMenu.classList.toggle('active');
});
// add event listener to all nav links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      toggleMenu.classList.remove('active');
  });
});

//Nav bar scroll effect
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        let nav = document.querySelector('header');
        if (window.scrollY > 250) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
    });
});

//Image slider
let slides = document.querySelectorAll('.slide');
let slideInterval = 5000; // time interval between slides in milliseconds
let slideIndex = 0;
  
// function to show the slide with the specified index
function showSlide(index) {
  // remove active class from current slide
  slides[slideIndex].classList.remove('active');
  // show the slide with the specified index
  slideIndex = index;
  // add active class to new slide 
  slides[slideIndex].classList.add('active');
}
  
// set the interval to change slides automatically
let slideIntervalID = setInterval(() => showSlide((slideIndex + 1) % slides.length), slideInterval);


// Toggle Read More  button for section1
function toggleReadMode() {
  var section = document.getElementById("read-mode-section");
  var btn = document.querySelector(".read-mode-button");
  section.style.display === "none"
  if (section.style.display === "none") {
    section.style.display = "block";
    btn.innerHTML = "Read Less";
  } else {
    section.style.display = "none";
    btn.innerHTML = "Read More";
  }
}







