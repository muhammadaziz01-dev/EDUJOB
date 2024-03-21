"use strict";



// ----------LOADER JS START--------------------------------
let loadWrapper = document.querySelector('.load_wrapper');

window.addEventListener('DOMContentLoaded',()=>{
    loadWrapper.style.display = 'flex';
    document.body.style.overflow="hidden";
});

window.addEventListener('load',()=>{

    setTimeout( ()=>{

        loadWrapper.style.display = 'none';
        document.body.style.overflow="visible";

    },1000)
  
});
// ----------LOADER JS END--------------------------------




// ---------CARUSEL START--------------------------------
let  caruselWrap = document.querySelector(".carusel2");
let caruselLength= document.querySelectorAll(".span-wrap-span")

let caruselCards =document.querySelectorAll('.carusel2-card');
let sum = 0;
let indx = 0;

function caruselRight() {
    indx ++ ;
    
    
    if(indx > caruselCards.length-3){
        
        indx = 0;
        sum = 0;
    }else if(indx < 0){
       
        indx = caruselCards.length-3;
    }

    // if()

    // caruselLength[sum??1].style.backgroundColor = "#0A65CC";
    // if(sum>5){
    //     sum=1;
    // }else{
    //     sum++;
    // }
    if(sum == 0 ){
        caruselLength[0].style.backgroundColor = "#0A65CC"; 
        caruselLength[0].style.width = "17px"; 

        caruselLength[1].style.backgroundColor = "#99C2FF"; 
        caruselLength[1].style.width = "10px"; 
        caruselLength[2].style.backgroundColor = "#99C2FF"; 
        caruselLength[2].style.width = "10px";
        caruselLength[3].style.backgroundColor = "#99C2FF"; 
        caruselLength[3].style.width = "10px";
        caruselLength[4].style.backgroundColor = "#99C2FF"; 
        caruselLength[4].style.width = "10px";
        sum ++ ;

    }else if( sum == 1 ){
        caruselLength[1].style.backgroundColor = "#0A65CC"; 
        caruselLength[1].style.width = "17px";

        caruselLength[0].style.backgroundColor = "#99C2FF"; 
        caruselLength[0].style.width = "10px"; 
        caruselLength[2].style.backgroundColor = "#99C2FF"; 
        caruselLength[2].style.width = "10px"; 
        caruselLength[3].style.backgroundColor = "#99C2FF"; 
        caruselLength[3].style.width = "10px";
        caruselLength[4].style.backgroundColor = "#99C2FF"; 
        caruselLength[4].style.width = "10px";
        sum ++ ;

    }else if(sum==2){
        caruselLength[2].style.backgroundColor = "#0A65CC";
        caruselLength[2].style.width = "17px"; 

        caruselLength[0].style.backgroundColor = "#99C2FF"; 
        caruselLength[0].style.width = "10px"; 
        caruselLength[1].style.backgroundColor = "#99C2FF"; 
        caruselLength[1].style.width = "10px"; 
        caruselLength[3].style.backgroundColor = "#99C2FF"; 
        caruselLength[3].style.width = "10px";
        caruselLength[4].style.backgroundColor = "#99C2FF"; 
        caruselLength[4].style.width = "10px";
        sum ++ ;

    } else if(sum==3){
        caruselLength[3].style.backgroundColor = "#0A65CC";
        caruselLength[3].style.width = "17px"; 

        caruselLength[0].style.backgroundColor = "#99C2FF"; 
        caruselLength[0].style.width = "10px"; 
        caruselLength[2].style.backgroundColor = "#99C2FF"; 
        caruselLength[2].style.width = "10px"; 
        caruselLength[1].style.backgroundColor = "#99C2FF"; 
        caruselLength[1].style.width = "10px";
        caruselLength[4].style.backgroundColor = "#99C2FF"; 
        caruselLength[4].style.width = "10px";
        sum ++;
    }else if(sum == 4){
        caruselLength[4].style.backgroundColor = "#0A65CC";
        caruselLength[4].style.width = "17px"; 

        caruselLength[0].style.backgroundColor = "#99C2FF"; 
        caruselLength[0].style.width = "10px"; 
        caruselLength[2].style.backgroundColor = "#99C2FF"; 
        caruselLength[2].style.width = "10px"; 
        caruselLength[1].style.backgroundColor = "#99C2FF"; 
        caruselLength[1].style.width = "10px";
        caruselLength[3].style.backgroundColor = "#99C2FF"; 
        caruselLength[3].style.width = "10px";
        sum ++;
    }


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

const tim = setInterval(()=>{
    caruselRight();
},3000)
// --------------CARUEL END --------------------------------



// ---------------SELECTORS --------------------------------
let select1 = document.querySelector("#select1");
let select2 = document.querySelector("#select2");
let imgSelect1 = document.querySelector('#img-select1');
let imgSelect2 = document.querySelector('#img-select2');
select1.addEventListener("change", (e)=>{
    console.log(e);
    if(e.target.value == "English"){
        imgSelect1.src="./assets/img/flag-usa.svg"
        console.log("Enabling");
    }else if(e.target.value == "Indian"){
        console.log('Indonesian');
        imgSelect1.src="./assets/img/flag-ind.svg"
    }
});


select2.addEventListener("change", (e)=>{
    console.log(e);
    if(e.target.value == "USA"){
        imgSelect2.src="./assets/img/flag-usa.svg"
        console.log("Enabling");
    }else if(e.target.value == "India"){
        console.log('India');
        imgSelect2.src="./assets/img/flag-ind.svg"
    }
});