const loginForm = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");

function onLoginSubmit(event){
    event. preventDefault();
    console.log(logininput.value);
}


loginForm.addEventListener("submit", onLoginSubmit);
