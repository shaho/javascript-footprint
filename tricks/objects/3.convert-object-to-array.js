//
// ─── CONVERT OBJECT TO ARRAY ────────────────────────────────────────────────────
//

// ─── 1 ──────────────────────────────────────────────────────────────────────────
// const person = {
//   name: "John",
//   age: 40,
// };

// const arr = [];

// Object.keys(person).forEach((key) => {
//   return arr.push([key, person[key]]);
// });

// console.log(arr);

// ─── 2 ──────────────────────────────────────────────────────────────────────────
// const person = {
//   name: "John",
//   age: 40,
// };

// const result = Object.keys(person).map((key) => {
//   return [key, person[key]];
// });

// console.log(result);

// ─── 3 ──────────────────────────────────────────────────────────────────────────
const person = {
  name: "John",
  age: 40,
};

console.log(Object.entries(person));
