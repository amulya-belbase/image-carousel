let slideIndex = 1;

// displaying the number of dots wrt the number of slides
let slides = document.getElementsByClassName("imgSlides");
for (let i = 0; i < slides.length; i++) {
  const dot_element = document.createElement("span");
  dot_element.setAttribute("class", "dot");
  dot_element.setAttribute("onclick", `currentSlide(${i + 1})`);
  const dot_container = document.getElementById("dotsection");
  dot_container.appendChild(dot_element);
}

showSlides(slideIndex);

// Next/previous clicks
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Dots clicks
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("imgSlides");

  let dots = document.getElementsByClassName("dot");

  // if slide number(n) is more than the number of slides present, set slideIndex to 1, (restart from the left)
  if (n > slides.length) {
    slideIndex = 1;
  }

  // if slide number is less than 1, set slideIndex to 3, (restart from the right)
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    // iterate through slides and hide them
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    // iterate through dots and hide/make them inactive
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block"; // display only the slide with the desired index
  dots[slideIndex - 1].className += " active"; // make the clicked dot active
}
