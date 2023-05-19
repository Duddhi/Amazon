//<-----------internal-JS------->//

let menu = document.getElementById('btn');
let All = document.getElementById('All');
let burger = document.getElementById('all-head-burger');
let more = document.getElementById('more');
let moreUL = document.querySelector('.more-ul');
let Hide = document.getElementById('hide');
let moreul1 = document.getElementById('.more-ul1');
let sliderContainer = document.getElementById('slider-container');

menu.addEventListener('click' , ()=>{

    sliderContainer.style.top = "0px";
    All.style.opacity = "1";
    All.style.zIndex = "2";
     All.style.transform = "translateX(-0%)";
     All.style.transition = "all 0.5s ease-in-out";
     All.style.width = "25%"; 
     javaSlider.style.filter = "brightness(50%)";
     javaRow.style.filter = "brightness(50%)";
     javaNavBtm.style.filter = "brightness(50%)";
All.style.overflowY = "scroll";
All.style.overscrollBehaviorY = "smooth";
  

})
burger.addEventListener('click' , ()=>{
  Hide.style.filter = "brightness(100%)";
  All.style.overflowY = "scroll";
  All.style.overscrollBehaviorY = "smooth";

  All.style.overflowY = "scroll";
    All.style.transform = "translateX(-100%)";
    All.style.transition = "all 0.5s ease-in-out";

      javaSlider.style.filter = "brightness(100%)";
  javaRow.style.filter = "brightness(100%)";
  javaNavBtm.style.filter = "brightness(100%)";
  
  })

more.addEventListener('click' , ()=>{
moreUL.classList.toggle('js-ul');
})
//<---------mouseover-------->//
let Hover = document.getElementById('hover');
let signin = document.getElementById('signin');
let javaSlider = document.getElementById('java-slider');
let javaRow = document.getElementById('java-row');
let javaNavBtm = document.getElementById('js-navbtm');
let navDD = document.getElementById('nav-dd');

Hover.addEventListener('mouseenter' , ()=>{
 signin.style.display = "block";
 javaSlider.style.filter = "brightness(50%)";
 javaRow.style.filter = "brightness(50%)";
 javaNavBtm.style.filter = "brightness(50%)";
 
})
Hover.addEventListener('mouseleave', ()=>{
  signin.style.display = "none";
  javaSlider.style.filter = "brightness(100%)";
  javaRow.style.filter = "brightness(100%)";
  javaNavBtm.style.filter = "brightness(100%)";
})