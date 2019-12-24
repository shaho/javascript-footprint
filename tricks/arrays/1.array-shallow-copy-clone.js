//
// ─── SHALLOW COPY / CLONE AN ARRAY ────────────────────────────────────────────────
//

// ─── 1 ──────────────────────────────────────────────────────────────────────────
// const fruits = ["apple", "banana"];
// const newFruits = fruits.slice(); // or fruits.slice(0);
// newFruits.push("cherry");

// console.log(fruits);
// console.log(newFruits);

//
// ─── 2 ──────────────────────────────────────────────────────────────────────────
//
// const fruits = ["apple", "banana"];
// const newFruits = [].concat(fruits);
// newFruits.push("cherry");

// console.log(fruits);
// console.log(newFruits);

//
// ─── 3 ──────────────────────────────────────────────────────────────────────────
//
const fruits = ["apple", "banana"];
const newFruits = [...fruits];
newFruits.push("cherry");

console.log(fruits);
console.log(newFruits);
