//
// ─── GET LAST ITEM IN ARRAY / GET EVERYTHING BEFORE LAST ITEM IN ARRAY ────────────
//

const names = ["Shaho", "Azad", "Pooya", "Sirwan", "Mohsen"];

// Get last item in array
console.log(names[names.length - 1]);

// Get everything before last item in array

// ─── 1 ──────────────────────────────────────────────────────────────────────────
// const beforeLastName = names.slice(0, names.length - 1);
// console.log(beforeLastName);

// ─── 2 ──────────────────────────────────────────────────────────────────────────
const beforeLastName = names.slice(0, -1);
console.log(beforeLastName);
