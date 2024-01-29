
const h1 = document.querySelector("div.hello:first-child h1");

//뭔가를 반복해서 작동시킬때 코딩법
//const로 새로운걸 정의하여 let 과함께 이용해서 쓸수있다.
function handleTitleClick(){
    const currentcolor = h1.style.color;
    let newcolor;
    if(currentcolor === "blue") {
        newcolor = "tomato";
    } else {
        newcolor = "blue";
    }
    h1.style.color = newcolor;
}
h1.addEventListener("click", handleTitleClick);