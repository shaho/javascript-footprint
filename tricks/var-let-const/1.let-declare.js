// Scope
// ReferenceError: sum is not defined

function addNumbers() {
  let a = 10;
  let b = 20;
  let flag = true;

  if (flag) {
    let sum = a + b;
    console.log("Inside if block", sum);
  }

  console.log("Outside if block", sum);
}

addNumbers();
