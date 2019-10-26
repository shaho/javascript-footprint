// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
// reverse("shaho") === "ohahs";
// reverse("hello") === "olleh";
// reverse("Greetings!") === "!sgniteerG";

function reverse(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

module.exports = reverse;
