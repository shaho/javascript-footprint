//
// ─── DELETE OR FILTER PROPERTY OF OBJECT ────────────────────────────────────────
//

const name = {
  first: "Shaho",
  last: "Toofani",
};

// ─── 1 ──────────────────────────────────────────────────────────────────────────
// delete name.first;
// console.log(name);

// ─── 2 ──────────────────────────────────────────────────────────────────────────
// const filteredObj = {};
// const result = Object.keys(name)
//   .filter((key) => {
//     return key !== "first";
//   })
//   .map((key) => {
//     return (filteredObj[key] = name[key]);
//   });
// console.log(filteredObj);

// ─── 3 ──────────────────────────────────────────────────────────────────────────
function filterObject(object, property) {
  const filteredObj = {};
  Object.keys(object)
    .filter((key) => {
      return key !== property;
    })
    .map((key) => {
      return (filteredObj[key] = object[key]);
    });
  return filteredObj;
}

console.log(filterObject(name, "first"));
