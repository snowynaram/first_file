alert ("###");  ###을 경고문처럼 나오게함
console. log (###); ###을 콘솔에 보냄
const # = @@; #을 @@로 정의
let # = @@; 위랑 같지만 const는 상수이고 let은 새롭게 정의하면 바뀔수있는 값이다
const를 디폴트로 사용하고 업데이트를 해야할때 let을 사용한다. 옛날에는 var을 사용했다.(현재도 사용은 가능하지만 비추)
null 은 비어있음 undefined는 const는 되어있지만 정의는 되어있지 않은 상태
뭔가를 나열할때는 대괄호([])를 이용하여 나열하면 된다. 그리고 출력할 때 []를 이용하여 순서를 정의하면 된다 순서는 0부터 시작한다는 사실을 잊지말것
###. push("@@@"); ###이라는 나열에 @@@이라는 정보를 축하는것

//중괄호로 object를 지정,array랑 다른점은 순서가 아닌 항목하나마다 지정하는것
const player = {
     name: "naram",
     points: 10,
     fat : true,
};

console.log(player);
console.log(player.name);
//없던 내용을 새로 넣거나 안에있는 내용은 수정가능 const로인해 player자체만 수정 불가능
player.birth = 991226;
player.points = 25
console.log(player);

//function 을 치고 함수를 지정해주면 앞으로 치는 모든 지정된 언어는 함수로 들어간다.
//plus라고 친후 괄호안에 넣는 함수를 추후에 지정가능
function plus(a, b){
     console .log(a,"+",b, "=",a+b);
}
//4,5를 지정해줘서 위에 계산기에 들어갈수있게 함
plus(4,5)

//consy 안에 함수를 넣을때 형태가 다름
const player = {
     sayHello: function (name){
          console. log("hello" + name);
     },
    
    
};

player. sayHello("kotte");
player. sayHello("naram");

//간단계산기 만들기
const calculator ={
     plus : function (a,b){
          console. log(a+b);
     },
     minus : function (a,b){
          console. log(a-b);
     },
     devide : function (a,b){
          console. log(a/b);
     },
     powerOf : function (a){
          console. log(a*a);
     },
}

calculator. plus(5,6);
calculator. minus(7,5);
calculator. devide(15,3);
calculator. powerOf(3);


// return 을 이용하면 계산값을 새롭게 정의가 가능함.
let age = 24;
function calculateKAge(ageOfForeigner){
     return ageOfForeigner + 2;
}

const krAge = calculateKAge(age);

console.log(krAge);

age = 26;
const newage = calculateKAge(age);
console.log(newage);

const plusage = newage + krAge;
console.log(plusage);



const age = prompt("나이를 입력하시오");
//typeof @@ = @@의 데이터 타입을 알아볼수있음
console.log(typeof age);  


//parseInt는 string을 number로바꿔준다.
const age = parseInt(prompt("나이를 입력하시오"));
//isNaN false=number, true=NaN
console.log(isNaN(age));  

//if하고 처음나오는게 true일때의 출력할것 else다음에 나오는게 false일때 나오는 값
//여러 조건문일때는 else if를 사용한다.
//&&=and ||=or
//else를 꼭써야하는건 아님
//true || true === true
//true || false === true
//false || true === true
//false || false === false
// true && true === true
//false && true === false
// true && false === false
//false && false === false

if(isNaN(age)){
    alert("숫자를 입력하세요");
} else if (age < 18){
     alert("너무어려요");
} else if (age >= 18 && age <= 50){
     alert ("술을 마음껏마셔요!");
} else {
     alert("그만마셔")
}


//document.title = "@@"  콘솔안에서 제목을 @@으로 바꿀수있음


// html 코드와 element를 자바스크립트로 접근하는 방법
//title을 정의하고 가져오거나 바꾸고있음
const title = document.getElementById("title");

title.innerText = "Got you bitch"

console.log(title.id);
console.log(title.className);


//hello안에 h1을 찾아서 알려줌
//querySelector은 제일 처음것만 가져와줌 모두가져오고싶을때는 뒤에 All을 붙여주면 된다.
//querySelector는 매우 중요@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const title = document.querySelector("div h1");

console.log(title);


 <div class = "hello" >
    <h1>Grab me!</h1>
  </div>
  저위에 vs코드가 밑에 grab me!를 가져옴


  //html을 가져오고
const title = document.querySelector("div.hello:first-child h1");

//클릭햇을때 실행하는것
//색을 blue로 바꿈
function handleTitleClick(){
    title.style.color = "blue";
}
//addEventListener무슨 이벤트를 "click"클릭이벤트를 handleTitleClick작동시킨다.
title.addEventListener("click", handleTitleClick);