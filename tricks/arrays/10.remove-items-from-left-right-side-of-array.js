//
// ─── REMOVE ITEMS FROM LEFT / RIGHT SIDE OF ARRAY ─────────────────────────────────
//

const numbers = [23, 987, 45, 89];

const removeFromLeft = numbers.slice(0, 3);
// console.log(removeFromLeft); // [ 23, 987, 45 ]
// console.log(numbers);

const removeFromRight = numbers.slice(2);
// console.log(removeFromRight); // [ 45, 89 ]

// Pop() removes last element of array and return that element
// Slice extracts sections of an array and returns a new array
// In order to extract an element from an array, we can use following function
const getNthItem = (arr, number) => arr.slice(number - 1, number)[0];
console.log(getNthItem(numbers, 3)); // 45

// Offsetting an array
function offsetArray(arr, offset) {
  return [...arr.slice(offset), ...arr.slice(0, offset)];
}

const result = offsetArray([1, 2, 3, 4], 1);
console.log(result); // [ 2, 3, 4, 1 ]
