//html을 가져오고
const title = document.querySelector("div.hello:first-child h1");

//클릭햇을때 실행하는것
//색을 blue로 바꿈
function handleTitleClick(){
    title.style.color = "blue";
}
//addEventListener무슨 이벤트를 "click"클릭이벤트를 handleTitleClick작동시킨다.
title.addEventListener("click", handleTitleClick);

