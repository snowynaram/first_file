
const h1 = document.querySelector("div.hello:first-child h1");


function handleTitleClick(){
    const clickedClass = "active";
    h1.classList.toggle("active");
}
h1.addEventListener("click", handleTitleClick);