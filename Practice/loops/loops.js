// simple for loop
for (let i= 0; i < 5; i++) {
    console.log(i);
  }


// while loop
let count=1;
while (count<=10) {
    console.log(count);
    count++;
}

// do while loop
let i=100/2;
do {
    console.log(i);
    i++;
}while (i<=5)

// forof loop (for acess characters)
let str="Ravi Gupta";
for (let ch of str) {
    console.log(ch);
     }

// forin loop (for acess key_value )
let str1="Ravi Gupta";
for(let key in str){
    console.log(key)
}

// foreach loop with fat arrow funtions(working with function)
const array = ["ravi", "rahul", "amit"];
array.forEach((element) => console.log(element));
