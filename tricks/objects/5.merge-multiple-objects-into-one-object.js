//
// ─── MERGE MULTIPLE OBJECTS INTO ONE OBJECT ─────────────────────────────────────
//

const defaultUser = {
  name: "",
  email: "",
  subscribed: true,
};

const actualUser = {
  name: "Shaho",
  email: "toofani@gmail.com",
};

const user2 = {
  phone: "555 - 555 - 5252",
};

// ─── 1 ──────────────────────────────────────────────────────────────────────────
// const userData = Object.assign(defaultUser, actualUser, user2);
// console.log(userData);

// ─── 2 ──────────────────────────────────────────────────────────────────────────
const userData = { ...defaultUser, ...actualUser };
console.log(userData);
