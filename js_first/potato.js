//parseInt는 string을 number로바꿔준다.
const age = parseInt(prompt("나이를 입력하시오"));
//isNaN false=number, true=NaN
console.log(isNaN(age));  

if(isNaN(age)){

    alert("숫자를 입력하세요");

}else{

     alert("잘햇어요");

}