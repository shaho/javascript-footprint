//
// ─── MEASURE TIME IT TAKES FUNCTION TO RUN ──────────────────────────────────────
//

// use following code in browser console
const getUserData = async (user) =>
  await fetch(`https://api.github.com/users/${user}`);

const timeToRun = (fn, ...args) => {
  console.time("time");
  let result = fn(...args);
  console.timeEnd("time");
  return result;
};

timeToRun(() => getUserData("shaho"));
