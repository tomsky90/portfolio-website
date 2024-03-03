//links

window.addEventListener("load", function () {
  const navLinks = document.querySelectorAll(".link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((navLink) => navLink.classList.remove("active"));

      link.classList.add("active");
    });
  });
});

//mobile nav
const body = document.querySelector("body");
const mobileNavToggle = document.querySelector(".mobile-nav__toggle");
const mobileNav = document.querySelector(".mobile-nav__menu");
const mobileNavOpenBtn = document.querySelector(".mobile-nav__bars");
const mobileNavCloseBtn = document.querySelector(".mobile-nav__close-btn");
const links = document.querySelectorAll(".mobile-nav__link");

const toggleMobileNav = () => {
  mobileNavOpenBtn.classList.toggle("active");
  mobileNavCloseBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
  body.classList.toggle("active");
};

mobileNavToggle.addEventListener("click", toggleMobileNav);

links.forEach((link) => {
  link.addEventListener("click", toggleMobileNav);
});

// ----------------------------------------------------------------------------------------------
//skills
const skills = {
  html: [
    "Proficiency in writing well-structured HTML markup.",
    "Understanding of HTML elements, attributes, and their semantic meaning.",
    "Knowledge of new HTML5 elements like <header>, <footer>, <nav>, <section>, <article>, <aside>, etc.",
    "Familiarity with HTML5 APIs such as localStorage, sessionStorage, Geolocation, Canvas, etc.",
    "Experience in creating HTML forms and handling form submissions.",
    "Understanding of input types, attributes, and form validation techniques using HTML5 attributes like required, pattern, min, max, etc.",
    "Knowledge of making forms and interactive elements accessible to users with disabilities.",
    "Understanding of HTML elements that impact SEO, such as <title>, <meta> tags, heading hierarchy (<h1> to <h6>), alt attributes for images, etc.",
  ],
  css: [
    "Proficiency in writing CSS rules to style HTML elements.",
    "Understanding of CSS selectors, properties, and values.",
    "Knowledge of various layout techniques including flexbox and CSS Grid.",
    "Ability to create responsive and adaptive layouts using CSS.",
    "Experience in designing responsive websites that adapt to different screen sizes and devices.",
    "Understanding of media queries, viewport settings, and fluid layouts.",
    "Experience using Sass",
    "Proficiency in using features such as variables, mixins, nesting, and inheritance to write maintainable CSS code.",
    "Experience with popular CSS framework Bootstrap.",
    "Understanding of CSS animations and transitions to add interactivity and visual effects to web interfaces.",
    "Proficiency in using keyframe animations, transitions, and CSS transform properties.",
    "Familiarity with CSS methodologies like BEM (Block Element Modifier).",
  ],
  javascript: [
    "Good understanding of fundamental concepts such as variables, data types, operators, control structures, loops, and functions.",
    "DOM Manipulation - Experience in accessing and manipulating the Document Object Model (DOM) efficiently",
    "Knowledge of methods like getElementById, querySelector, addEventListener, etc",
    "Asynchronous JavaScript",
    "Understanding of AJAX and fetching data from APIs",
    "ES6+ - Familiarity with modern JavaScript features introduced in ECMAScript 6 and later, such as arrow functions, template literals, destructuring, spread/rest operators, and classes.",
  ],
  bootstrap: [
    "Proficiency in utilizing Bootstrap's responsive grid system to create flexible and responsive layouts.",
    "Understanding of grid classes (container, row, col-*) and their usage for building multi-column layouts.",
    "Experience in leveraging Bootstrap's pre-styled components such as buttons, forms, navigation bars, modals, etc.",
    "Knowledge of how to design responsive websites using Bootstrap's built-in responsive utilities and grid system.",
  ],
  git: [
    "Proficiency in using Git and GitHub for version control, including branching, merging, committing changes, and resolving conflicts.",
    "Experience in creating, cloning, forking, and managing repositories on GitHub.",
    "Familiarity with GitHub's collaboration features such as pull requests, code reviews, and issue tracking.",
    "Experience in collaborating with team members on GitHub.",
    "Knowledge of setting up and deploying websites using GitHub Pages.",
  ],
  react: [
    "Proficiency in React's core concepts such as components, props, state, and the component lifecycle.",
    "Understanding of JSX syntax and how to write React components using JSX.",
    "Experience in building applications with a component-based architecture using React.",
    "Ability to create reusable and composable components to efficiently manage UI elements.",
    "Knowledge of state management in React using built-in state and props, as well as external state management libraries like Redux",
    "Experience in managing complex application state and data flow patterns.",
    "Familiarity with React Hooks for managing state, side effects, and other React features without writing class components.",
    "Proficiency in using built-in hooks like useState, useEffect, useContext, and custom hooks.",
    "Experience in implementing client-side routing in React applications using React Router.",
    "Understanding of route configuration, nested routes, route parameters, and navigation.",
    "Proficiency in fetching data from APIs and integrating external data sources into React applications using methods like fetch or Axios.",
  ],

  sass: [
    "Proficiency in writing Sass code using nested syntax, variables, mixins, and functions.",
    "Understanding of Sass features such as partials, imports, and extends.",
    "Experience in organizing CSS code into modular and reusable Sass partials.",
    "Ability to use Sass features like mixins and placeholders.",
    "Knowledge of using variables to store reusable values like colors, font sizes, and spacing.",
    "Proficiency in creating and using mixins to encapsulate styles and apply them to multiple selectors.",
    "Understanding of Sass's nested selector syntax for writing more concise and maintainable CSS.",
  ],
  nodejs: [
    "Proficiency in server-side JavaScript development using Node.js runtime.",
    "Experience in building web applications and APIs using the Express.js framework.",
    "Ability to create routes, handle requests, and manage middleware in Express.js applications.",
    "Knowledge of npm (Node Package Manager) for managing dependencies and packages in Node.js projects.",
    "Familiarity with package.json configuration, npm scripts, and dependency versioning.",
    "Understanding of asynchronous programming patterns in Node.js, including callbacks, Promises, and async/await.",
    "Knowledge of integrating Node.js applications with databases like MongoDB",
    "Proficiency in designing and implementing RESTful APIs in Node.js applications.",
    "Understanding of HTTP methods, status codes, request/response handling, and API documentation.",
    "Experience in implementing authentication and authorization mechanisms in Node.js applications using JWT (JSON Web Tokens).",
    "Ability to handle errors and implement error handling middleware in Node.js applications.",
  ],
  mongodb: [
    "Understanding of MongoDB's document-oriented data model, collections, and documents.",
    "Experience in performing CRUD (Create, Read, Update, Delete) operations on MongoDB documents using methods like insert, find, update, and remove.",
    "Knowledge of MongoDB's query language and operators for filtering, sorting, and aggregating data.",
    "Ability to design MongoDB schemas and data models based on application requirements.",
    "Proficiency in integrating MongoDB with Node.js and Express.js applications using MongoDB Node.js drivers like mongoose.",
    "Experience in building RESTful APIs and web applications with MongoDB as the database backend.",
    "Understanding of MongoDB deployment options such as self-managed deployments, MongoDB Atlas.",
  ],
  figma: [
    "Proficiency in designing user interfaces (UI) for web and mobile applications using Figma.",
    "Familiarity with Figma's interface, tools, and features for creating and editing designs.",
    "Experience in using tools such as frames, shapes, text, vector drawing, and prototyping features",
    "Understanding of responsive design principles and techniques in Figma for designing layouts that adapt to different screen sizes and devices.",
    "Ability to export assets in different formats and sizes for development.",
  ],
  other: [
    "Basic knowledge of image and video editing.",
    "Familiarity with tools like GIMP and Photopea.",
    "Ability to perform basic tasks such as cropping, optimization, and format conversion.",
  ],
  php: [
    "Proficiency in PHP programming language fundamentals such as variables, data types, operators, control structures, and functions.",
    "Understanding of PHP's syntax, conventions, and best practices.",
    "Experience in building dynamic web applications and websites using PHP.",
    "Ability to generate dynamic content, handle form submissions, and interact with databases.",
    "Experience in building Wordpress themes.",
  ],
  wordpress: [
    "Proficiency in working with WordPress.",
    "Understanding of WordPress's architecture, features, and terminology such as posts, pages, themes, and plugins.",
    "Experience in developing custom WordPress themes from scratch or customizing existing themes.",
    "Ability to create responsive, cross-browser compatible, and SEO-friendly WordPress themes using HTML, CSS, JavaScript, and PHP.",
  ],
};

const skillsCloseBtn = document.querySelector(".skills__close-btn");
const skillsTextDisplay = document.querySelector(".skills__skill-display");
const skillsHeading = document.querySelector(".skills__pop-up-heading");
const blur = document.querySelector(".blur");
const skillsDisplay = document.querySelector(".skills__pop-up");
const skillsSection = document.querySelector("#skills").offsetTop;
const skillsSelectors = [...document.querySelectorAll(".skills__skill-tile")];

const renderSkillsToDisplay = (selector) => {
  skillsTextDisplay.textContent = "";
  skillsHeading.textContent = selector;
  const skillSelector = selector.toLowerCase();
  skills[skillSelector].forEach((item) => {
    const listElement = document.createElement("li");
    listElement.textContent = item;
    skillsTextDisplay.appendChild(listElement);
  });
};

skillsCloseBtn.addEventListener("click", () => {
  blur.classList.remove("active");
  skillsDisplay.classList.remove("active");
});

skillsSelectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    blur.classList.add("active");
    skillsDisplay.classList.add("active");
    const text = selector.childNodes[3].textContent;
    renderSkillsToDisplay(text);
    window.scrollTo(0, skillsSection);
  });
});

renderSkillsToDisplay("HTML");

// --------------------   Projects -----------------------

const alert = document.querySelector(".projects__alert");
const alertCloseBtn = document.querySelector(".projects__alert-close-btn");
const showAllertBtn = document.querySelector(".projects-link--btn");

showAllertBtn.addEventListener("click", () => {
  alert.classList.add("active");
});

alertCloseBtn.addEventListener("click", () => {
  alert.classList.remove("active");
});

//section observer

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
