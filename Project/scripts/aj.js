let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

// Services Slider
const sliderTrack = document.getElementById("sliderTrack");
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.getElementById("dotsContainer");
  const slidesPerPage = window.innerWidth <= 768 ? 1 : 3;
  const totalSlides = slides.length;
  const pageCount = Math.ceil(totalSlides / slidesPerPage);
  let currentPage = 0;

  // Generate dots
  for (let i = 0; i < pageCount; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => moveToPage(i));
    dotsContainer.appendChild(dot);
  }

  function moveToPage(index) {
    const slideWidth = slides[0].offsetWidth;
    sliderTrack.style.transform = `translateX(-${index * slideWidth * slidesPerPage}px)`;
    updateDots(index);
    currentPage = index;
  }

  function updateDots(activeIndex) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[activeIndex].classList.add("active");
  }

  // Recalculate slidesPerPage on resize
  window.addEventListener("resize", () => {
    location.reload(); // Reload page to reset layout if screen size changes
  });