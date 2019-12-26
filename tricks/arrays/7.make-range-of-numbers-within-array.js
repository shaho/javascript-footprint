//
// ─── MAKE A RANGE OF NUMBERS AS AN ARRAY ────────────────────────────────────────
//

// function f() {
//   return Array.from(arguments);
// }
// console.log(f(1, 2, 3));

// Second parameter in Array.from() will be a map function

const range = Array.from({ length: 5 }, (value, index) => index + 1);

console.log(range); // [ 1, 2, 3, 4, 5 ]
