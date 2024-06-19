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
    "Writing CSS rules to style HTML elements.",
    "Understanding CSS selectors, properties, and values.",
    "Knowledge of various layout techniques including Flexbox and CSS Grid.",
    "Creating responsive and adaptive layouts using CSS.",
    "Designing responsive websites that adapt to different screen sizes and devices.",
    "Using media queries, viewport settings, and fluid layouts.",
    "Using Sass, including features such as variables, mixins, nesting, and inheritance to write maintainable CSS code.",
    "Working with popular CSS frameworks like Bootstrap.",
    "Creating CSS animations and transitions to add interactivity and visual effects to web interfaces.",
    "Using keyframe animations, transitions, and CSS transform properties.",
    "Familiarity with CSS methodologies like BEM (Block Element Modifier).",
  ],
  javascript: [
    "Fundamental concepts such as variables, data types, operators, control structures, loops, and functions.",
    "Object-Oriented Programming (OOP) principles, including the use of classes, inheritance, encapsulation, and polymorphism.",
    "DOM Manipulation, including accessing and manipulating the Document Object Model (DOM) efficiently with methods like getElementById, querySelector, addEventListener, etc.",
    "Asynchronous JavaScript, including AJAX and fetching data from APIs.",
    "Modern JavaScript features introduced in ECMAScript 6 and later (ES6+), such as arrow functions, template literals, destructuring, spread/rest operators, and classes.",
  ],
  bootstrap: [
    "Utilizing Bootstrap's responsive grid system to create flexible and responsive layouts.",
    "Understanding grid classes (container, row, col-*) and their usage for building multi-column layouts.",
    "Leveraging Bootstrap's pre-styled components such as buttons, forms, navigation bars, modals, etc.",
    "Designing responsive websites using Bootstrap's built-in responsive utilities and grid system.",
  ],
  git: [
    "Using Git and GitHub for version control, including branching, merging, committing changes, and resolving conflicts.",
    "Creating, cloning, forking, and managing repositories on GitHub.",
    "Utilizing GitHub's collaboration features such as pull requests, code reviews, and issue tracking.",
    "Collaborating with team members on GitHub.",
    "Setting up and deploying websites using GitHub Pages.",
  ],
  react: [
    "React's core concepts such as components, props, state, and the component lifecycle.",
    "JSX syntax and writing React components using JSX.",
    "Building applications with a component-based architecture using React.",
    "Creating reusable and composable components to efficiently manage UI elements.",
    "State management in React using built-in state and props, as well as external state management libraries like Redux.",
    "Managing complex application state and data flow patterns.",
    "React Hooks for managing state, side effects, and other React features without writing class components.",
    "Using built-in hooks like useState, useEffect, useContext, and custom hooks.",
    "Implementing client-side routing in React applications using React Router, including route configuration, nested routes, route parameters, and navigation.",
    "Fetching data from APIs and integrating external data sources into React applications using methods like fetch or Axios.",
  ],

  sass: [
    "Writing Sass code using nested syntax, variables, mixins, and functions.",
    "Understanding Sass features such as partials, imports, and extends.",
    "Organizing CSS code into modular and reusable Sass partials.",
    "Using Sass features like mixins and placeholders effectively.",
    "Utilizing variables to store reusable values such as colors, font sizes, and spacing.",
    "Creating and using mixins to encapsulate styles and apply them to multiple selectors.",
    "Understanding Sass's nested selector syntax for writing concise and maintainable CSS.",
  ],
  nodejs: [
    "Server-side JavaScript development using Node.js runtime.",
    "Building web applications and APIs using the Express.js framework.",
    "Creating routes, handling requests, and managing middleware in Express.js applications.",
    "Using npm (Node Package Manager) for managing dependencies and packages in Node.js projects",
    "Configuring package.json, npm scripts, and dependency versioning.",
    "Asynchronous programming patterns in Node.js, including callbacks, Promises, and async/await.",
    "Integrating Node.js applications with databases like MongoDB.",
    "Designing and implementing RESTful APIs in Node.js applications.",
    "Understanding HTTP methods, status codes, request/response handling, and API documentation.",
    "Implementing authentication and authorization mechanisms in Node.js applications using JWT (JSON Web Tokens).",
    "Handling errors and implementing error handling middleware in Node.js applications.",
  ],
  mongodb: [
    "Understanding MongoDB's document-oriented data model, collections, and documents.",
    "Experience in performing CRUD (Create, Read, Update, Delete) operations on MongoDB documents using methods like insert, find, update, and remove.",
    "Knowledge of MongoDB's query language and operators for filtering, sorting, and aggregating data.",
    "Ability to design MongoDB schemas and data models based on application requirements.",
    "Proficiency in integrating MongoDB with Node.js and Express.js applications using MongoDB Node.js drivers like mongoose.",
    "Experience in building RESTful APIs and web applications with MongoDB as the database backend.",
    "Understanding of MongoDB deployment options such as self-managed deployments and MongoDB Atlas.",
  ],
  figma: [
    "Proficiency in designing user interfaces (UI) for web and mobile applications using Figma.",
    "Familiarity with Figma's interface, tools, and features for creating and editing designs.",
    "Experience using tools such as frames, shapes, text, vector drawing, and prototyping features in Figma.",
    "Understanding of responsive design principles and techniques in Figma for designing layouts that adapt to different screen sizes and devices.",
    "Ability to export assets in various formats and sizes for development purposes.",
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
const skillsSection = document.querySelector("#skills");
const skillsSelectors = [...document.querySelectorAll(".skills__skill-tile")];
const aboutMeSection = document.querySelector("#about");

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
    console.log(aboutMeSection.clientHeight);
    blur.classList.add("active");
    skillsDisplay.classList.add("active");
    const text = selector.childNodes[3].textContent;
    renderSkillsToDisplay(text);
    skillsDisplay.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
