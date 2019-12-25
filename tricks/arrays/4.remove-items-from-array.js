//
// ─── REMOVE ITEMS FROM ARRAY ────────────────────────────────────────────────────
//

const numbers = [48, 29, 30];

// const numbers = [1, 2, 3, 4, 5, 6];
// const mod = numbers.splice(0, 1); // mod = [1]

function removeItems(arr, fn) {
  return arr.filter(fn).map((el) => {
    arr.splice(arr.indexOf(el), 1);
    return el;
  });
}

const result = removeItems(numbers, (number) => number > 29);

console.log(result);
console.log(numbers);
