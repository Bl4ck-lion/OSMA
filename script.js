let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");

let desert_room = document.getElementById("desert-moon");
let man = document.getElementById("man");


window.addEventListener("scroll", ()=> {
    let value = window.scrollY;
    moon.style.top = value * .9 + "px";
    text.style.top = 80 + value * -0.2 + '%';


})

let clacScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let ScrollValue = Math.round((pos * 100)/calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", ()=>{
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = 'conic.gradient(#194eb9 ${scrollValue}%,#67ccff ${scrollValue}%)';
};



window.onscroll = clacScrollValue;
window.onload = clacScrollValue;
