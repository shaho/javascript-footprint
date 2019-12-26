//
// ─── FIND SHARED VALUES BETWEEN TWO ARRAYS ──────────────────────────────────────
//

const men = ["Jim", "Doug", "Fred", "Jim"];

const over50 = ["Angie", "Dave", "Jessica", "Jim"];

const shared = men.filter((man) => over50.includes(man));

// toString => men.filter((man) => over50.includes(man))[0];

// remvoe duplicate values in the array
// console.log([...new Set(shared)]);
console.log(shared);
