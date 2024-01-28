
const title = document.querySelector("div.hello:first-child h1");

console.dir(title);
function handleTitleClick(){
    title.style.color = "blue";
}

function mouseenter(){
    title.innerText = "mouse is here";
}

function mouseleave(){
    title.innerText = "Mouse is gone!";
    title.style.color = "black";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", mouseenter);
title.addEventListener("mouseleave", mouseleave);
