let a=10;
let b=5;
let c="10";
// a +=b*2;
// console.log(a)
let isEqual= a == c;
// console.log(isEqual)

let isStrickEqual = a === c;
// console.log(isStrickEqual);

let logicTest=(isEqual || isStrickEqual) && !(b >10);
console.log(logicTest)