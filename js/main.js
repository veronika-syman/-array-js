'use strict';
let arr = [];
for(let i = -49; i < 50; i++){
   arr.push(i);
}
console.log(arr);
console.log (arr.length);

arr.sort( ( ) => Math.random( ) - 0.5 );
console.log(arr);
let arr10 = arr.filter( el => el % 10 === 0 );
console.log(arr10);
let n0_index = arr.indexOf(0);
let n25_index = arr.indexOf(25);

console.log(n0_index, n25_index);

let start = n0_index < n25_index ? n0_index : n25_index;
let end = start == n0_index ? n25_index : n0_index;

console.log(start, end);