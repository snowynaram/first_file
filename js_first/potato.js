const loginForm = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");

const link= document.querySelector("a");


function onLoginSubmit(event){
    event. preventDefault();
    console.log(logininput.value);
}
function handleLinkClick(event) {
    event.preventDefault()
    console.dir(event);
    alert("사이트로 이동합니다!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click",handleLinkClick);

