// Question.1:- input fullName from user convert to username like @ravigupta_8 
// this type of using method called method cain
let fullNane=prompt("enter your fullname");
let username=(`@${fullNane.trim().replaceAll(" ","" )} _${fullNane.length}gmail.com`);
console.log(username);
