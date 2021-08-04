// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log("a: ", a);
console.log("b: ", b);
