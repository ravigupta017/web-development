// questions :- find the largest number that given by three number?
let a=Number(prompt("Enter 1st Number"))
let b=Number(prompt("Enter 2nd Number"))
let c=Number(prompt("Enter 3rd Number"))
let result= a>b? (a>c? a:c ) : (b>c? b:c)
console.log(result);


