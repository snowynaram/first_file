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