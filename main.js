//mobile nav
const mobileNavToggle = document.querySelector(".mobile-nav__toggle");
const mobileNav = document.querySelector(".mobile-nav__menu");
const mobileNavOpenBtn = document.querySelector(".mobile-nav__bars");
const mobileNavCloseBtn = document.querySelector(".mobile-nav__close-btn");
const links = document.querySelectorAll(".mobile-nav__link");
const mobileSubMenuToggler = document.querySelector(
  ".mobile-nav__dropdown-toggle"
);
const mobileSubMenu = document.querySelector(".mobile-nav__submenu");
const mobileNavDropdownArrow = document.querySelector(
  ".mobile-nav__dropdown-arrow"
);

const showMobileSubmenu = () => {
  mobileSubMenu.classList.toggle("active");
  mobileNavDropdownArrow.classList.toggle("active");
};

const toggleMobileNav = () => {
  mobileNavOpenBtn.classList.toggle("active");
  mobileNavCloseBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
};

mobileNavToggle.addEventListener("click", toggleMobileNav);
mobileSubMenuToggler.addEventListener("click", showMobileSubmenu);

// ----------------------------------------------------------------------------------------------
//skills
const skills = {
  html: "To ensure your website is easily discoverable and user-friendly, I excel in crafting semantic and well-organized HTML code. I prioritize readability and accessibility, focusing on header hierarchy, section tags, lists, hyperlinks, and forms. I'm also proficient in advanced techniques like multimedia embedding, dynamic forms, and integrating external libraries and scripts for enhanced functionality",
  css: "I have extensive knowledge of CSS, proficient in creating responsive layouts, optimizing styles for consistent cross-device appearance, and crafting advanced visual effects like animations, transitions, shadows, and gradients. I prioritize well-organized and optimized CSS code in user interface development",
};

const skillsDisplay = document.querySelector(".skills__skill-display");
const skillsSelectors = [...document.querySelectorAll(".skills__skill-tile")];

const renderSkillsToDisplay = (selector) => {
  const select = selector.toLowerCase();
  skillsDisplay.textContent = skills[select];
};

skillsSelectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    const text = selector.childNodes[3].textContent;
    renderSkillsToDisplay(text);
  });
});

renderSkillsToDisplay("HTML");

// --------------------
//slider
const swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const imgsToAppear = document.querySelectorAll(".projects__img-container");
const txtToAppear = document.querySelectorAll(".projects__text-container");

const imgsOptions = {
  root: null,
  threshold: 0.2,
};

const imgsObserver = new IntersectionObserver(function (entries, imgsObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("active");
      imgsObserver.unobserve(entry.target);
    }
  });
}, imgsOptions);

const txtsOptions = {
  root: null,
  threshold: 0.5,
};

imgsToAppear.forEach((img) => imgsObserver.observe(img));

const txtObserver = new IntersectionObserver(function (entries, txtObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("active");
      imgsObserver.unobserve(entry.target);
    }
  });
}, txtsOptions);

txtToAppear.forEach((text) => txtObserver.observe(text));
