//
// ─── GET ALL VALUES IN OBJECT ───────────────────────────────────────────────────
//

const name = {
  first: "Shaho",
  last: "Toofani",
  age: 40,
};

// ─── 1 ──────────────────────────────────────────────────────────────────────────
// const values = Object.keys(name).map((key) => {
//   return name[key];
// });

// console.log(values);

// ─── 2 ──────────────────────────────────────────────────────────────────────────
console.log(Object.values(name));
