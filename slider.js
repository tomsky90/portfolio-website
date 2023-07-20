//slider for skills section
const slider = document.querySelector(".slider");
const slide = document.querySelector(".my-skills__slider-wrapper__slide");
const nextBtn = document.querySelector(".my-skills__slider-wrapper__next-btn");
const prevBtn = document.querySelector(".my-skills__slider-wrapper__prev-btn");

let index = 0;
const switchNextCard = () => {
  if (index === 9) {
    return;
  }
  const size = slide.offsetWidth;
  console.log(slide.offsetWidth);
  slider.style.transition = "transform ease-in-out .7s";
  index++;
  slider.style.transform = `translateX(-${size * index + 40 * index}px)`;
};

const switchPrevCard = () => {
  if (index === 0) {
    return;
  }
  --index;
  const size = slide.offsetWidth;
  console.log(slide.offsetWidth);
  slider.style.transition = "transform ease-in-out .7s";
  slider.style.transform = `translateX(-${size * index + 40 * index}px)`;
};

nextBtn.addEventListener("click", switchNextCard);
prevBtn.addEventListener("click", switchPrevCard);
