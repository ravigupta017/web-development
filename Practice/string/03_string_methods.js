// string constrator method
let str01 = new String("ravi");
// console.log(str);

// use to uppercase method 
let str="ravi gupta";
str =str.toUpperCase();
// console.log(str);

// use to lenght method 
let str2 = "ravi gupta";
// console.log(str2, str2.length)

// access index 
let str3 = "ravi gupta";
// console.log(str3[3])

// of loop for fatching value (character)
for (let ch of str3) {
    // console.log(ch);
}

// in loop for fatching key (index)
for (let key in str3) {
//   console.log(key);
}

// loop for gaping in string
str4=" ";
for (const ch of str3) {
    str4= str4 + ch + " ";
}
// console.log(str4)

// use to toLowerCase
// original string never change its immutable
// effect of toLowerCase copy string (str5New)
let str5="RAVI GUPTA";
let str5New=str5.toLowerCase();
// console.log(str5New, str5);

// trim is used for space removing start and end not middle whitespace
let str6="       hello world    ";
let trimed=str6.trim()
// console.log(trimed)

// include methods for check keyword 
let language="javascrit is client side scripting language"
let check=language.includes("la")
// console.log(check);

// facting character to index data
let str7= "javascrit is client language";
// console.log(str7.indexOf("cl"))

// facting index (postion) to character data
let str8= "javascrit is client language";
// console.log(str8.charAt("5"))

// use of replace
let str9 = "javascrit is client language";
// console.log(str8.replace("javascrit", " js"));

// use of replaceall
let str10 = "javascrit is client language also javascrit";
// console.log(str10.replaceAll("javascrit", " js"));

// uses of slice by index postions
let str11 = "javascrit is client language also javascrit";
// console.log(str11.slice(0,9)) 

// Note:- slice work on both inded postive or nagitive but sub work only postive index(-1) otherwise both are some 

// split method use for break the string behave of whitespace and character and it is convert in string to array
let str12 = "javascrit is client language also javascrit";
// console.log(str12.split(" ")) 



