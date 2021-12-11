const welcomeMessages = ['Hi, there!', 'My name is Tom', "I'm a Front-End developer pasionate about creaiting web applications"];

const firstParagraph = document.querySelector('.welcom-txt__first-txt');
const heading = document.querySelector('.welcom-txt h1');
const secondParagraph = document.querySelector('.welcom-txt__second-txt');
let wordIndex = 0;
let textIndex = 0;

const displayWelcomeMessages = () => {
    if(textIndex === 0) {
        firstParagraph.textContent += welcomeMessages[textIndex][wordIndex]
    wordIndex++
    }
    
    if(wordIndex === welcomeMessages[textIndex].length) {
        textIndex++;
        wordIndex = 0;
    }
    if(textIndex === 1) {
        heading.textContent += welcomeMessages[textIndex][wordIndex]
        wordIndex++
    }
    if(textIndex === 2) {
        secondParagraph.textContent += welcomeMessages[textIndex][wordIndex]
        wordIndex++
    }
    setTimeout(() => {displayWelcomeMessages()}, 150)
}

const animateCursor = () => {

}

document.addEventListener("DOMContentLoaded", function(event) {
    displayWelcomeMessages()
});