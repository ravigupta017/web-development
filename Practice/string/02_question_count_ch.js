let str = prompt("Enter String");
let ch = prompt("Enter Ch that you count");
let count = 0;
for (Val of str) {
    if (Val.toLowerCase() === ch.toLowerCase()) {
        count++;
    }
}
console.log(count);
