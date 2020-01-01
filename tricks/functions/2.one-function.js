//
// ─── FUNCTION THAT CAN BE CALLED ONLY ONCE ──────────────────────────────────────
//

const once = (fn, ...args) => {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
};

const onClick = (text, time) => {
  button.disabled = true; // for the sake of demonestration
  console.log(`${text} at ${time}`);
};

const button = document.querySelector("button");
button.addEventListener(
  "click",
  once(onClick, "form submited!", new Date(Date.now())),
);
