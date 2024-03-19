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