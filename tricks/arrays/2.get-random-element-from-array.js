//
// ─── GET A RANDOM ELEMENT FROM AN ARRAY ─────────────────────────────────────────
//

const ages = [21, 32, 98, 55, 38, 76];

// ─── 1 ──────────────────────────────────────────────────────────────────────────
// const randomNo = Math.floor(Math.random() * ages.length);
// console.log(randomNo, ages[randomNo]);

console.log(ages[Math.floor(Math.random() * ages.length)]);
