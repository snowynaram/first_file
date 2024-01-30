const logininput = document.querySelector("#login-form input");
const loginbutton = document.querySelector("#login-form button");

function onLoginBtnClick(){
   const name = logininput.value;
    if(name === ""){
alert ("이름을 입력하세요");
    }else{
        alert ("안녕 "+ logininput.value);
    }
}


loginbutton.addEventListener("click", onLoginBtnClick);