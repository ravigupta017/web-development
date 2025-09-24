let totalBalance = 10000;

let usersChoice = Number(
  prompt(
    "Press [1. Check Balance 2. Deposit 3. Withdraw 4. Exit]"
  )
);

if (usersChoice === 1) {
  console.log("your current balance is : ", totalBalance);
} else if (usersChoice === 2) {
  let depositAmount = Number(prompt("Enter Amount to deposit: "));
  if (depositAmount > 0) {
    totalBalance += depositAmount;
    console.log("Deposit successfull!");
    console.log("Your current balance is : ", totalBalance);
  } else {
    console.log("Please enter a valid deposite amount");
  }
} else if (usersChoice == 3) {
  let withdrawAmount = Number(prompt("Enter Amount to deposit: "));
  if (withdrawAmount > 0 && withdrawAmount <= totalBalance) {
    totalBalance -= withdrawAmount;
    console.log("Withdraw successfull!");
    console.log("Your current balance is : ", totalBalance);
  } else {
    console.log("Please enter a valid withdraw amount.");
  }
} else if(usersChoice===4){
    console.log("Thanks for comming!");
}else{
    console.log("choose vaild options")
}