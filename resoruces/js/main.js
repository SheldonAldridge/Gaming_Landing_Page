// Slide Show

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slides");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the current slide
  slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
  slideIndex += n;

  const slides = document.getElementsByClassName("slides");

  // Reset to the first slide if at the end
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // Reset to the last slide if at the beginning
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  showSlides();
}

// Change slide every 2 seconds (adjust as needed)
setInterval(function() {
  plusSlides(1);
}, 10000);

