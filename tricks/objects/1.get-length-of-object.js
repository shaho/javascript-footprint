//
// ─── GET LENGTH OF OBJCET ───────────────────────────────────────────────────────
//

// Array length
// const arr = [1, 2, 3];
// console.log(arr.length);

const obj = {
  a: 1,
  b: 2,
};

// Getting obj's keys which return an array of keys and apply length method
const keys = Object.keys(obj).length;
console.log(keys);
