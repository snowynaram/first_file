const loginForm = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden"
const usernamekey = "username"


function logoutbutton(event){
    //event. preventDefault();
    localStorage.removeItem(usernamekey);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    logout.classList.add(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event. preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usernamethatuserwrote = logininput.value;
    localStorage.setItem(usernamekey, usernamethatuserwrote);
    paintGreetings(usernamethatuserwrote);
    logout.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
logout.addEventListener("click",logoutbutton);
loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(usernamekey);

if(savedUsername === null){
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit",onLoginSubmit);
} else{
paintGreetings(savedUsername);
logout.classList.remove(HIDDEN_CLASSNAME);
}