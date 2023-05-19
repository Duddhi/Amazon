let sliderBtnLeft = document.getElementById('slider-left-btn')
let sliderBtnRight = document.getElementById('slider-right-btn')
let imgItem = document.querySelectorAll('.image-item')
let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100;

sliderBtnLeft.addEventListener("click",()=>{

if(startSlider < 0){
    startSlider = startSlider + 100;
  }
  imgItem.forEach(element =>{
    element.style.transform = `translateX(${startSlider}%)`;
  })
})
sliderBtnRight.addEventListener("click",()=>{

      if(startSlider > -endSlider + 100){
        startSlider = startSlider -100;
      }
      imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
      })
})
//-------------- books slider javascript ------- //
let booksBtnLeft = document.getElementById('books-btn-left')
let booksBtnRight = document.getElementById('books-btn-right')
let booksImgList = document.querySelectorAll('.books-img-list')
let startBooksSlider = 0;
let endBooksSlider = (booksImgList.length) * 100;

booksBtnLeft.addEventListener("click" , ()=>{
  if(startBooksSlider < 0){
    startBooksSlider = startBooksSlider + 100;
  }
  booksImgList.forEach(element =>{
    element.style.transform = `translateX(${startBooksSlider}%)`;
  })
})
booksBtnRight.addEventListener("click" , ()=>{
  if(startBooksSlider > -endBooksSlider + 100){
    startBooksSlider = startBooksSlider -100;
  }
  booksImgList.forEach(element =>{
    element.style.transform = `translateX(${startBooksSlider}%)`;
  })

})
//---------pc-s;ider-javascript--------//
let pcBtnLeft = document.getElementById('pc-btn-left')
let pcBtnRight = document.getElementById('pc-btn-right')
let pcImgList = document.querySelectorAll('.pc-img-list')
let startpcSlider = 0;
let endpcSlider = (pcImgList.length) * 100;

pcBtnLeft.addEventListener("click" , ()=>{
  if(startpcSlider < 0){
    startpcSlider = startpcSlider + 100;
  }
  pcImgList.forEach(element =>{
    element.style.transform = `translateX(${startpcSlider}%)`;
  })
})
pcBtnRight.addEventListener("click" , ()=>{
  if(startpcSlider > -endpcSlider + 100){
    startpcSlider = startpcSlider -100;
  }
  pcImgList.forEach(element =>{
    element.style.transform = `translateX(${startpcSlider}%)`;
  })

})
//---------toy-slider-javascript--------//
let toyBtnLeft = document.getElementById('toy-btn-left')
let toyBtnRight = document.getElementById('toy-btn-right')
let toyImgList = document.querySelectorAll('.toy-img-list')
let starttoySlider = 0;
let endtoySlider = (toyImgList.length) * 100;

toyBtnLeft.addEventListener("click" , ()=>{
  if(starttoySlider < 0){
    starttoySlider = starttoySlider + 100;
  }
  toyImgList.forEach(element =>{
    element.style.transform = `translateX(${starttoySlider}%)`;
  })
})
toyBtnRight.addEventListener("click" , ()=>{
  if(starttoySlider > -endtoySlider + 100){
    starttoySlider = starttoySlider -100;
  }
  toyImgList.forEach(element =>{
    element.style.transform = `translateX(${starttoySlider}%)`;
  })

})
//---------Phone-slider-javascript--------//
let phoneBtnLeft = document.getElementById('phone-btn-left')
let phoneBtnRight = document.getElementById('phone-btn-right')
let phoneImgList = document.querySelectorAll('.phone-img-list')
let startphoneSlider = 0;
let endphoneSlider = (phoneImgList.length) * 100;

phoneBtnLeft.addEventListener("click" , ()=>{
  if(startphoneSlider < 0){
    startphoneSlider = startphoneSlider + 100;
  }
  else {
    startphoneSlider = endphoneSlider - 700;
  }
  phoneImgList.forEach(element =>{
    element.style.transform = `translateX(${startphoneSlider}%)`;
  })
})
phoneBtnRight.addEventListener("click" , ()=>{
  if(startphoneSlider > -endphoneSlider + 100){
    startphoneSlider = startphoneSlider -100;
  }
  else {
     startphoneSlider = endphoneSlider - 400 ;
    
  }
  phoneImgList.forEach(element =>{
    element.style.transform = `translateX(${startphoneSlider}%)`;
  })

})
//---------oxford-slider-javascript--------//
let oxfordBtnLeft = document.getElementById('oxford-btn-left')
let oxfordBtnRight = document.getElementById('oxford-btn-right')
let oxfordImgList = document.querySelectorAll('.oxford-img-list')
let startoxfordSlider = 0;
let endoxfordSlider = (oxfordImgList.length) * 100;

oxfordBtnLeft.addEventListener("click" , ()=>{
  if(startoxfordSlider < 0){
    startoxfordSlider = startoxfordSlider + 100;
  }
  else {
    startoxfordSlider = endoxfordSlider - 500;
  }
  oxfordImgList.forEach(element =>{
    element.style.transform = `translateX(${startoxfordSlider}%)`;
  })
})
oxfordBtnRight.addEventListener("click" , ()=>{
  if(startoxfordSlider > -endoxfordSlider + 100){
    startoxfordSlider = startoxfordSlider -100;
  }
  else {
     startoxfordSlider = endoxfordSlider - 300 ;
    
  }
  oxfordImgList.forEach(element =>{
    element.style.transform = `translateX(${startoxfordSlider}%)`;
  })

})
//---------browse-slider-javascript--------//
let browseBtnLeft = document.getElementById('browse-btn-left')
let browseBtnRight = document.getElementById('browse-btn-right')
let browseList = document.querySelectorAll('.browse-list')
let startbrowseSlider = 0;
let endbrowseSlider = (browseList.length) * 100;

browseBtnLeft.addEventListener("click" , ()=>{
  if(startbrowseSlider < 0){
    startbrowseSlider = startbrowseSlider + 100;
  }
  browseList.forEach(element =>{
    element.style.transform = `translateX(${startbrowseSlider}%)`;
  })
})
browseBtnRight.addEventListener("click" , ()=>{
  if(startbrowseSlider > -endbrowseSlider + 100){
    startbrowseSlider = startbrowseSlider -100;
  }
  else {
    startbrowseSlider = endbrowseSlider - 300 ;
    
   
 }
  browseList.forEach(element =>{
    element.style.transform = `translateX(${startbrowseSlider}%)`;
  })

})

// <----------Drug-slider----->

let drugLeft =document.getElementById('drug-left');
let drugRight = document.getElementById('drug-right');
let Img =  document.querySelectorAll('.img');

let drugStartSlider = 0;
let drugEndSlider = (Img.length) * 100 ;

drugLeft.addEventListener('click' , ()=>{
  if(drugStartSlider < 0){
    drugStartSlider = drugStartSlider + 100;
  }
  else {
    drugStartSlider = drugEndSlider - 1100 ;
    
   
 }
  Img.forEach(element =>{
    element.style.transform = `translateX(${drugStartSlider}%)`;
  })

})

drugRight.addEventListener('click' , ()=>{
  if(drugStartSlider > -drugEndSlider + 100){
    drugStartSlider = drugStartSlider - 100;
  }
  else {
    drugStartSlider = drugEndSlider - 600 ;
    
   
 }
  Img.forEach(element =>{
    element.style.transform = `translateX(${drugStartSlider}%)`;
  })

})
//<-----------internal-JS------->//

let menu = document.getElementById('btn');
let All = document.getElementById('All');
let burger = document.getElementById('all-head-burger');
let more = document.getElementById('more');
let moreUL = document.querySelector('.more-ul');
let Hide = document.getElementById('hide');
let moreul1 = document.getElementById('.more-ul1');
let sliderContainer = document.getElementById('slider-container');
let NAV = document.getElementById("js-nav");
menu.addEventListener('click' , ()=>{

    sliderContainer.style.top = "0px";
    All.style.opacity = "1";
    All.style.zIndex = "2";
     All.style.transform = "translateX(-0%)";
     All.style.transition = "all 0.4s ease";
     All.style.width = "25%"; 
     javaSlider.style.filter = "brightness(30%)";
     javaRow.style.filter = "brightness(30%)";
     javaNavBtm.style.filter = "brightness(30%)";

All.style.overflowY = "scroll";
All.style.overscrollBehaviorY = "smooth";
Hide.style.overflow = "hidden";
  

})
burger.addEventListener('click' , ()=>{
  Hide.style.filter = "brightness(100%)";
  All.style.overflowY = "scroll";
  All.style.overscrollBehaviorY = "smooth";
  Hide.style.overflow = "auto";
  All.style.overflowY = "scroll";
    All.style.transform = "translateX(-100%)";
    All.style.transition = "all 0.3s ease";

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
 sliderContainer.style.top = "0px";
 
})
Hover.addEventListener('mouseleave', ()=>{
  signin.style.display = "none";
  javaSlider.style.filter = "brightness(100%)";
  javaRow.style.filter = "brightness(100%)";
  javaNavBtm.style.filter = "brightness(100%)";
})

// on load js start//
let Load = document.getElementById('load');
window.onload = function(){
Load.style.visibility = "visible";



}
Hide.onclick = function(){
  Load.style.visibility = "hidden";
}
Hover.onmouseenter = function(){
  Load.style.visibility = "hidden";
}
// on load js end //
//dropmenu start//
let dropMenu = document.getElementById('drop-menu');
let dropList = document.querySelector(".drop-list");

dropMenu.addEventListener("click" , ()=>{
dropList.classList.toggle("drop-visible");
})
