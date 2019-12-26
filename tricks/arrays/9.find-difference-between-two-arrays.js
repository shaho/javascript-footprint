//
// ─── FIND TH DIFFERENCES (NON-SHARED ITEMS) BETWEEN TWO ARRAYS ────────────────────
//

const arr1 = ["Shaho", "Mohsen", "Azad", "Azad"];
const arr2 = ["Shaho", "Mohsen", "Pooya"];

// Determine shared elements between two arrays
// const result = arr1.filter((element) => {
//   return arr2.includes(element);
// });
// console.log(result);

// Determine non-shared elements between two arrays
// const result = arr1.filter((element) => {
//   return !arr2.includes(element);
// });
// console.log(result);

// Determine unique non-shared elements between two arrays
const result = [...new Set(arr1)].filter((element) => {
  return !arr2.includes(element);
});
console.log(result);
