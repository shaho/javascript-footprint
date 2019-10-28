// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(number) {
  // const reversed = number
  //   .toString()
  //   .split("")
  //   .reverse()
  //   .join("");
  // return parseInt(reversed) * Math.sign(number);

  return (
    parseInt(
      number
        .toString()
        .split("")
        .reverse()
        .join(""),
    ) * Math.sign(number)
  );
}

module.exports = reverseInt;
