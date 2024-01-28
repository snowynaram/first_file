
const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);
h1.style.color = "blue";

function handleTitleClick(){
    h1.style.color = "black";
}

function mouseenter(){
    h1.innerText = "마우스 여깄당.";
    h1.style.color = "blue";
}

function mouseleave(){
    h1.innerText = "Mouse is gone!";
    h1.style.color = "red";
}

function handleresize(){
    document.body.style.backgroundColor = "black";
}

function windowCopy(){
    alert ("복사하지마!");
}

function windowoffline(){
    alert ("인터넷이 끊겼어요!!");
}

function windowonline(){
    alert ("인터넷이 돌아왔다.");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", mouseenter);
h1.addEventListener("mouseleave", mouseleave);


window.addEventListener("resize", handleresize);
window.addEventListener("copy", windowCopy);
window.addEventListener("offline",windowoffline);
window.addEventListener("online",windowonline);