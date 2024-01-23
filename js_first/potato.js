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