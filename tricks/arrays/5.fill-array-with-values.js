//
// ─── FILL ARRAY WITH VALUES ─────────────────────────────────────────────────────
//

const phoneNumber = "555-525-5252";

const newNumber = phoneNumber
  .split("")
  .filter((char) => char !== "-")
  .fill("*", 0, 3)
  .join("");

console.log(newNumber);
