//
// ─── REMOVE FALSY VALUES IN ARRAY ───────────────────────────────────────────────
//

const temperatures = [72, 68, 65, undefined, 80, 0, NaN, "", null];

// Falsy values = values which, when converted to a boolean always become false
// Five falsy values in JavaScript = "", 0, null, undefined, NaN

console.log(temperatures.filter((item) => item));

// include 0
// console.log(temperatures.filter((item) => item || item === 0));
