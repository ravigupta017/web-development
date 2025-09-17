/* splice note:- (1)delete (2)add delte both(3)only add */
// // using of splice
let arr6 = [5, 47, 8, 9];
arr6.splice(1, 2, 11, 22, );/* delet from original array and also add new value ther */
console.log(arr6);

// // using of splice
// // note :- if you dont want to delete only add value there then you used to 0 like
let arr7 = [5, 47, 8, 9];
arr6.splice(1, 0, 22, );
console.log(arr7, "lenght is", arr6.length);