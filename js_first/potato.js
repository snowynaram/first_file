
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

function windowwheel(){
    alert ("밑에 아무것도 없어영");
}

function mouseup(){
    document.body.style.backgroundColor = "white";
}

function mousedown(){
    document.body.style.backgroundColor = "orange";
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", mouseenter);
h1.addEventListener("mouseleave", mouseleave);



window.addEventListener("resize", handleresize);
window.addEventListener("copy", windowCopy);
window.addEventListener("offline",windowoffline);
window.addEventListener("online",windowonline);
window.addEventListener("wheel",windowwheel);
window.addEventListener("mouseup",mouseup);
window.addEventListener("mousedown",mousedown);
////mouseup은 클릭을뗏을때 mousedown은 클릭을 할때