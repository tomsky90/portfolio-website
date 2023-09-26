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

const showMobileSubmenu = () => {
  mobileSubMenu.classList.toggle("active");
};

const toggleMobileNav = () => {
  mobileNavOpenBtn.classList.toggle("active");
  mobileNavCloseBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
};

mobileNavToggle.addEventListener("click", toggleMobileNav);
mobileSubMenuToggler.addEventListener("click", showMobileSubmenu);
// links.forEach((link) => {
//   link.addEventListener("click", toggleMobileNav);
// });

// mobileProjectsLink.addEventListener("click", showMobileLinks);

// //show sublinks
// const projectsLink = document.querySelector(".projects-links");
// const subLinks = document.querySelector(".link-wrapper__sub-links");

// const showLinks = () => {
//   subLinks.classList.toggle("active");
// };

// projectsLink.addEventListener("click", showLinks);

// section observer for projects section

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
