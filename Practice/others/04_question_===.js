// verify user credentials if username && password not empty print login successfull otherwish show both field are required

let username=prompt("enter your user name");
let password=prompt("enter password");

const result=(username === "ravi" && password ==="gupta")? ("loging"):("login fail");
console.log(result)