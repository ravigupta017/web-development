// // push method used to add new element  into array in end postion and its return a new lenght of array
// let arr=[10, 20 , 30 , 40 , "ravi"]
// arr.push(55,"rohit", 11);
// // checking what its return
// let retrn = arr.push(55, "rohit", 11); /* return a new lenght of array*/
// // console.log(retrn)
// // console.log(arr);

// // using of pop.method()
// let arr1 = [10, 20,30, 40, ];
// arr1.pop(); /* pop.() method is remove element from array in the end postion*/
// // console.log(arr1)
// let retrn01=arr1.pop();
// // console.log(retrn01)

// // using of unshift.() method
// let arr3=[1, 2, 3, 4];
// arr3.unshift(5);/* add new element into the array in start postion*/
// // console.log(arr3)
// let check = arr3.unshift();/* its return a lenght after adding new element in array at start postion */
// // console.log(check)

// // using of shift
// let arr4=[5,47,8,9];
// arr4.shift();
// console.log(arr4)
// let checkReturn = arr4.shift(); /* its a return a value that removed in array from the starting postion */
// // console.log(checkReturn);

// // using of slice
// let arr5 = [5, 47, 8, 9];
// let arrSlice =arr5.slice(2,3)/* slice is cut the and store a new variable not any on original variable*/
// // console.log(arrSlice)

/* splice note:- (1)delete (2)add delte both(3)only add */

// // using of splice
// // let arr6 = [5, 47, 8, 9];
// // arr6.splice(1, 2, 11, 22, );/* delet from original array and also add new value ther */
// // console.log(arr6);

// // using of splice
// // note :- if you dont want to delete only add value there then you used to 0 like
// // let arr6 = [5, 47, 8, 9];
// // arr6.splice(1, 0, 22, );
// // console.log(arr6, "lenght is", arr6.length);

// usig of concat
// let arr=[];
let arrOne = [10, 20, 30];
let arrTwo = ["Ravi", "amit", "vishal"];
// let arrThree=arr.concat(arrOne,arrTwo)
// console.log(arrThree)

// using of spread
// let newArr=[...arrOne,...arrTwo];
// console.log(newArr )/*spread method work as concat method*/

// // using of join method
// let fruit=["mango", "banana", "lichi"]
// let test=fruit.join();
// console.log( typeof test)

// let fruit = ["mango", "banana", "lichi"];
// let includeNew= fruit.includes("mango"); /*include check the value*/
// console.log(includeNew)

// let fruit = ["mango", "banana", "lichi"];
// let str=fruit.toString(); /*array to string method*/
// console.log(str);

// let fruit = ["mango", "banana", "lichi"];
// console.log(fruit.indexOf("lichi")) /*find the index of aaray*/

// let fruit = ["mango", "banana", "lichi"];
// fruit.reverse(); /*reverse array */
// console.log(fruit);

let fruit1 = ["mango", "banana", "lichi"];
let findtes = fruit1.find(function (/* find use along with function*/ item) {
  return item === "mango";
});
console.log(findtes);

let flatMethod=[["one"],["two","three","four","five",['six']]];
console.log(flatMethod.flat(2));