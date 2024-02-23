const loginForm = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const usernamekey = "username"

function logoutbutton(event){
    console.log("click");
}

function onLoginSubmit(event){
    event. preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usernamethatuserwrote = logininput.value;
    localStorage.setItem(usernamekey, usernamethatuserwrote);
    paintGreetings(usernamethatuserwrote);
}

function paintGreetings(username) {
    greeting.innerText = `hello ${username}`;
    //const button = greeting.createElement("button");
    //greeting.button.innerText = "Log Out";
    //greeting.button.addEventListener("click", logoutbutton); 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//greeting.addEventListener("button",logoutbutton);
loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(usernamekey);

if(savedUsername === null){
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit",onLoginSubmit);
} else{
paintGreetings(savedUsername);
}