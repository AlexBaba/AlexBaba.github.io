const slides = document.querySelectorAll('.slide'); // Node list with anything of slide class
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // automatic sliding
const intervalTime = 30000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // If no next slide, Add current to start
    slides[0].classList.add('current'); // The node list, array of slides. Start from beginning
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for slide
  if (current.previousElementSibling) {
    // Add current to next sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // If no next slide, Add current to start
    slides[slides.length - 1].classList.add('current'); // The node list, array of slides. Start from beginning
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  // When user hits button, the interval resets waiting 5 seconds to change to the next slide
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}