// Review /Happy Customer Section

const slides = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

/* Smooth slider update */
function updateSlider() {
  const card = document.querySelector(".review-card");
  if (!card) return;

  const cardWidth = card.offsetWidth + 18; // GAP + CARD
  slides.style.transform = `translateX(-${index * cardWidth}px)`;
}

/* Arrow navigation */
nextBtn.addEventListener("click", () => {
  if (index < slides.children.length - 1) index++;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  if (index > 0) index--;
  updateSlider();
});

/* Resize recalculates position */
window.addEventListener("resize", updateSlider);

/* MOBILE SWIPE (drag support)    */

let startX = 0;
let endX = 0;

slides.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slides.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

slides.addEventListener("touchend", () => {
  const swipe = endX - startX;

  if (swipe > 50 && index > 0) {
    index--;
  } else if (swipe < -50 && index < slides.children.length - 1) {
    index++;
  }

  updateSlider();
});