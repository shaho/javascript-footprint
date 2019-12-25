//
// ─── FIND CERTAIN ELEMENT / INDEX OF ARRAY ────────────────────────────────────────
//

const people = ["Shaho", "Pooya", "Azad", "Sirwan", "Shaho"];

// ─── 1 ──────────────────────────────────────────────────────────────────────────
// const result = people.find((person) => person === "Shaho");
// console.log(result);

// ─── 2 ──────────────────────────────────────────────────────────────────────────
// const result = people.findIndex((person) => person === "Shaho");
// console.log(result);

// ─── 3 ──────────────────────────────────────────────────────────────────────────
// function findIndexAll(arr, value) {
//   let indices = [];

//   arr.forEach((element, index) => {
//     if (element === value) {
//       indices.push(index);
//     }
//   });

//   return indices;
// }
// console.log(findIndexAll(people, "Shaho"));

// ─── 4 ──────────────────────────────────────────────────────────────────────────
// function findIndexAll(arr, value) {
//   let indices = [];
//   arr.map((element, index) => element === value && indices.push(index));
//   return indices;
// }

// console.log(findIndexAll(people, "Shaho"));

// ─── 5 ──────────────────────────────────────────────────────────────────────────
function findIndexAll(arr, value) {
  // let indices = [];
  return arr.map((element, index) => element === value);
}

console.log(findIndexAll(people, "Shaho"));
