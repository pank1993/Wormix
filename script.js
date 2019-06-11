let back = document.querySelector(".back");
let next = document.querySelector(".next");
let content = document.querySelectorAll(".content-box div");
let slider = document.querySelectorAll(".slider li");
let i = 0;
back.onclick = function(){
     content[i].className = "content-box__item-off";
     slider[i].className = "slider__item2";
     i = i - 1; /* i-- */
     
     if(i < 0){
         i = content.length - 1;
     }
     slider[i].className = "slider__item";
     content[i].className = "content-box__item-on";
}

next.onclick = function(){
     content[i].className = "content-box__item-off";
     slider[i].className = "slider__item2";
     i = i + 1; /* i++ */
     
     if(i >= content.length){
         i = 0;
     }
     slider[i].className = "slider__item";
     content[i].className = "content-box__item-on";
}

let menu = document.querySelector(".menu-button");
let nav = document.querySelector(".nav");
let close = document.querySelector(".close");
let e = 0;

menu.onclick = function(){
    e++;
    if(e == 1){
        nav.className = "nav";
    }else if(e == 2){
        nav.className = "nav2";
        e = 0;
    }
}

close.onclick = function(){
        nav.className = "nav2";
    e = 0;
}

let search = document.querySelector(".search");
let searchForm = document.querySelector(".search-form");
let searchItem = document.querySelector(".search-form__item")
let b = 0;

search.onclick = function(){
    b++;
    if(b == 1){
        searchItem.className = "search-form__item2";

    }else if(b == 2){
        searchItem.className = "search-form__item";
        b = 0;
    }
};
