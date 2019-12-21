//
// ─── ITERATING OVER AN OBJECT ───────────────────────────────────────────────────
//

// ─── 1 ──────────────────────────────────────────────────────────────────────────
// Following solution iterate over an object's properties, However the caveat to working with for loops is that for in loop will iterate over every property tha's on an object including its prototype

// const username = {
//   first: "John",
//   last: "Doe",
// };

// for (let property in username) {
//   console.log(property, username[property]);
// }

// ─── 2 ──────────────────────────────────────────────────────────────────────────
// const username = {
//   first: "John",
//   last: "Doe",
// };

// for (let property in username) {
//   if (username.hasOwnProperty(property)) {
//     console.log(property, username[property]);
//   }
// }

// ─── 3 ──────────────────────────────────────────────────────────────────────────
// const username = {
//   first: "John",
//   last: "Doe",
// };

// for (property of Object.keys(username)) {
//   console.log(property, username[property]);
// }

// ─── 4 ──────────────────────────────────────────────────────────────────────────
// ES2017 Object.entries()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

const username = {
  first: "John",
  last: "Doe",
};

Object.entries(username).forEach(([key, value]) => {
  console.log(key, value);
});
