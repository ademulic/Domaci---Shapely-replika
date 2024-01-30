const searchBtn = document.querySelector('#search');
const searchBox = document.querySelector('.search-box');
const section = document.querySelectorAll('section'); 
 
let isOpen = true;
 
searchBtn.addEventListener('click', ()=>{
    if(isOpen){
        searchBox.classList.add('search-box-active');
        isOpen=false;
    }else{
        searchBox.classList.remove('search-box-active');
        isOpen=true;
    }
    
})

section.forEach(sect => {
    sect.addEventListener('click', ()=>{
        searchBox.classList.remove('search-box-active');
        isOpen=true;
    });
})

