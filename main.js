
// section observer for projects section

const imgsToAppear = document.querySelectorAll('.projects__img-container');
const txtToAppear =  document.querySelectorAll('.projects__text-container')

const imgsOptions = {
    root: null, 
    threshold: 0.2,
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
 }, imgsOptions)


 const txtsOptions = {
    root: null, 
    threshold: 0.5,
 };

 imgsToAppear.forEach(img => imgsObserver.observe(img));

 const txtObserver = new IntersectionObserver(function(entries, txtObserver){
     entries.forEach(entry => {
         if(!entry.isIntersecting){
             return
         } else {
            entry.target.classList.add("active");
            imgsObserver.unobserve(entry.target);
         }
     })
 },txtsOptions)

 txtToAppear.forEach(text => txtObserver.observe(text));
