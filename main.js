
// Header text animation

const welcomeMessages = ['Hi, there!', 'My name is Tom', "I'm a Front-End developer pasionate about creaiting web applications"];

const firstParagraph = document.querySelector('.welcom-txt__first-txt');
const heading = document.querySelector('.welcom-txt h1');
const secondParagraph = document.querySelector('.welcom-txt__second-txt');
let activeLetter = 0;
let activeText = 0;

const displayWelcomeMessages = () => {
    
    if(activeText === 0) {
        firstParagraph.textContent += welcomeMessages[activeText][activeLetter]
        activeLetter++
    }
    
    if(activeLetter === welcomeMessages[activeText].length) {
        
        activeText++;
        activeLetter = 0;
        return setTimeout(displayWelcomeMessages, 1000)
       
    }
    if(activeText === 1) {
        
        heading.textContent += welcomeMessages[activeText][activeLetter]
        activeLetter++
    }
    if(activeText === 2) {
        secondParagraph.textContent += welcomeMessages[activeText][activeLetter]
        activeLetter++
        if(activeLetter === welcomeMessages[activeText].length) {
            return
        }
    }

    setTimeout(displayWelcomeMessages, 80)
}

document.addEventListener("DOMContentLoaded", function(event) {
   setTimeout(displayWelcomeMessages, 1000) 
});


// section observer for projects section

const imgsToAppear = document.querySelectorAll('.projects__img-container');

const options = {
    root: null, 
    threshold: 1, 
 };

 const imgsObserver = new IntersectionObserver(function(entries, imgsObserver){
     entries.forEach(entry => {
         if(!entry.isIntersecting){
             return
         }else {
            entry.target.classList.add("active");
             imgsObserver.unobserve(entry.target);
         }
     })
 })

 imgsToAppear.forEach(img => imgsObserver.observe(img));