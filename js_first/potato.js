const loginForm = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"

function onLoginSubmit(event){
    event. preventDefault();
    loginForm.classList.add("hidden");
    const username = logininput.value;
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove("hidden")
}


loginForm.addEventListener("submit", onLoginSubmit);


