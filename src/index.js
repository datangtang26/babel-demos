import 'babel-polyfill';

console.log(Array.from('aaa'));

const sum = (a, b) => a + b;

let x = sum(1, 2);
let y = sum(3, 4);
let s = sum(5, 10);

console.log(x);
console.log(y);

Object.assign();