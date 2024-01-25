//parseInt는 string을 number로바꿔준다.
const age = parseInt(prompt("나이를 입력하시오"));
//isNaN false=number, true=NaN
console.log(isNaN(age));  

//&&=and ||=or
if(isNaN(age)){
    alert("숫자를 입력하세요");
} else if (age < 18){
     alert("너무어려요");
} else if (age >= 18 && age <= 50){
     alert ("술을 마음껏마셔요!");
} else {
     alert("그만마셔")
}