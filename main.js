//mobile nav
const mobileNavToggle = document.querySelector(".mobile-nav__toggle");
const mobileNav = document.querySelector(".mobile-nav__menu");
const mobileNavOpenBtn = document.querySelector(".mobile-nav__bars");
const mobileNavCloseBtn = document.querySelector(".mobile-nav__close-btn");
const links = document.querySelectorAll(".mobile-nav__link");

const toggleMobileNav = () => {
  mobileNavOpenBtn.classList.toggle("active");
  mobileNavCloseBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
};

mobileNavToggle.addEventListener("click", toggleMobileNav);

// ----------------------------------------------------------------------------------------------
//skills
const skills = {
  html: "To ensure your website is easily discoverable and user-friendly, I excel in crafting semantic and well-organized HTML code. I prioritize readability and accessibility, focusing on header hierarchy, section tags, lists, hyperlinks, and forms. I'm also proficient in advanced techniques like multimedia embedding, dynamic forms, and integrating external libraries and scripts for enhanced functionality",
  css: "I have extensive knowledge of CSS, proficient in creating responsive layouts, optimizing styles for consistent cross-device appearance, and crafting advanced visual effects like animations, transitions, shadows, and gradients. I prioritize well-organized and optimized CSS code in user interface development",
  javascript:
    "I possess a strong command of key JavaScript concepts and programming techniques, including DOM manipulation, event handling, asynchronous programming, and user interface development. With these skills, I can design and develop responsive, interactive websites and applications capable of interfacing with third-party APIs. My JavaScript proficiency enables me to write efficient, maintainable, and scalable code",
  bootstrap:
    "With bootstrap, I can quickly create responsive and visually appealing user interfaces. Bootstrap ensures consistent look for UI's built with it, thanks to its support for all major browsers. Additionaly I can customize styling using Sass, allowing me to create personalized and unique interface designs",
  git: "I have a strong grasp of fundamental Git concepts, such as repositories, branches, commits, pull requests, and merging changes. I can proficiently create, clone, and manage Git repositories, both locally and on remote servers, and effectively utilize branches to develop and manage various project versions, particularly on platforms like GitHub",
  react:
    "I thoroughly enjoy working with React as it empowers me to effortlessly develop advanced, responsive, and interactive applications. I am well-versed in core concepts, including creating components, managing state, utilizing hooks, and implementing routing for single-page applications. Furthermore, my expertise extends to integrating external libraries and seamless communication with third-party APIs",
  sass: "I have a strong grasp of Sass/Scss syntax and can proficiently create nested selectors, variables, functions, and mixins. I find Scss particularly advantageous for implementing the BEM methodology, thanks to its support for nested selectors. Leveraging Sass/Scss enables me to write modular and efficient CSS code that's both easy to maintain and extend",
  nodejs:
    "I have a foundational knowledge of Node.js, primarily focusing on server-side development and API creation. While my experience is at a basic level, I am familiar with asynchronous programming and event-driven architecture. I have practical experience working with MongoDB, npm packages, and utilizing Express.js for web server development. I look forward to further expanding my expertise in Node.js in future projects",
  mongodb:
    "I am proficient in creating data schemas and conducting various data operations, including updates, insertions, and deletions, using MongoDB Atlas and Mongoose. I am also committed to continually enhancing and expanding my skills in this area",
  image:
    "In addition to the previously mentioned skills, I have a basic knowledge of image and video editing, and I'm familiar with tools like GIMP and Photopea. I can perform basic tasks such as cropping, optimization, and format conversion",
  php: "I am currently volunteering on a project to build a new WordPress theme for a charity using PHP, among other technologies. Through this experience, I have acquired a foundational understanding of PHP and its basics. I am enthusiastic about further expanding my expertise in this programming language",
  wordpress:
    "As part of my volunteering efforts, I have had the opportunity to learn and work with WordPress. We are currently developing a new WordPress theme for a charity project. This experience has allowed me to gain valuable insights into WordPress, its theme development, and customization. I am eager to further enhance my skills and contribute effectively to this meaningful cause",
};

const skillsDisplay = document.querySelector(".skills__skill-display");
const skillsSelectors = [...document.querySelectorAll(".skills__skill-tile")];

const renderSkillsToDisplay = (selector) => {
  const select = selector.toLowerCase();
  skillsDisplay.textContent = skills[select];
  console.log(select);
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
