"use strict";



// ----------LOADER JS START--------------------------------
let loadWrapper = document.querySelector('.load_wrapper');

// window.addEventListener('DOMContentLoaded',()=>{
//     loadWrapper.style.display = 'flex';
//     document.body.style.overflow="hidden";
// });

// window.addEventListener('load',()=>{

//     setTimeout( ()=>{

//         loadWrapper.style.display = 'none';
//         document.body.style.overflow="visible";

//     },1000)
  
// });
// ----------LOADER JS END--------------------------------




// ---------CARUSEL START--------------------------------
let  caruselWrap = document.querySelector(".carusel2");
let caruselLength= document.querySelectorAll(".span-wrap-span")

let caruselCards =document.querySelectorAll('.carusel2-card');
// let sum = 0;
let indx = 0;

function caruselRight() {
    indx ++ ;
    if(indx > caruselCards.length-3){
        // sum  = 0;
        indx = 0;
    }else if(indx < 0){
        // sum = caruselCards.length-3;
        indx = caruselCards.length-3;
    }

    // if()

    // caruselLength[sum??1].style.backgroundColor = "#0A65CC";
    // if(sum>5){
    //     sum=1;
    // }else{
    //     sum++;
    // }
    // console.log(sum);
    caruselWrap.style.transform = `translateX(${-indx * 465}px)`;
    
}


function caruselLeft() {
    indx -- ;
    if(indx > caruselCards.length-3){
        indx = 0;
    }else if(indx < 0){
        indx = caruselCards.length-3;
    }
    console.log("left carusel");
    caruselWrap.style.transform = `translateX(${-indx * 465}px)`;
}
// --------------CARUEL END --------------------------------