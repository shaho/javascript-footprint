//
// ─── FIND CERTAIN ELEMENT / INDEX OF ARRAY ────────────────────────────────────────
//

const people = ["Shaho", "Pooya", "Azad", "Sirwan", "Shaho"];

// ─── 1 ──────────────────────────────────────────────────────────────────────────
// const result = people.find((person) => person === "Shaho");
// console.log(result);

// ─── 2 ──────────────────────────────────────────────────────────────────────────
const result = people.findIndex((person) => person === "Shaho");
// console.log(result);

// function findIndexAll(arr, value) {
//   let indices = [];

//   arr.forEach((element, index) => {
//     if (element === value) {
//       indices.push(index);
//     }
//   });

//   return indices;
// }

function findIndexAll(arr, value) {
  // return arr
  //   .map((element, index) => {
  //     if (element === value) return index;
  //   })
  //   .filter((element) => element !== undefined);

  return arr
    .map((element, index) => (element === value ? index : undefined))
    .filter((element) => element !== undefined);
}

console.log(findIndexAll(people, "Shaho"));
