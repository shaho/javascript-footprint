//
// ─── CHECK IF A PROPERTY EXISTS IN OBJECT ───────────────────────────────────────
//

const user = {
  name: "Shaho",
  address: {
    street: "baharan",
    city: "korsan",
  },
};

// ─── 1 ──────────────────────────────────────────────────────────────────────────
// The in operator can't check for nested properties even though they exist technically within the user object

// const property = "city" in user;
// console.log(property); // false

// ─── 2 ──────────────────────────────────────────────────────────────────────────
// const property = "toString" in user;
// console.log(property); // true

// ─── 3 ──────────────────────────────────────────────────────────────────────────
const property = user.hasOwnProperty("address");
console.log(property);

// ─── 4 ──────────────────────────────────────────────────────────────────────────
// In order to get deep into sub levels and check existanse, you need to use third party libraries like loadash
// https://lodash.com/docs#get
// _.get(countries, 'greece.sparta.playwright')
