//
// ─── GET ONLY UNIQUE VALUES IN ARRAY ────────────────────────────────────────────
//

const usernames = ["Sirwan", "Azad", "Shaho", "Shaho"];

// ─── 1 ──────────────────────────────────────────────────────────────────────────
// const newUsernames = usernames.filter((name, index, array) => {
//   if (array.indexOf(name) === index) {
//     return name;
//   }
// });
// console.log(newUsernames);

// ─── 2 ──────────────────────────────────────────────────────────────────────────
const set = [...new Set(usernames)];

console.log(set);
