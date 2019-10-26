// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
// reverse("shaho") === "ohahs";
// reverse("hello") === "olleh";
// reverse("Greetings!") === "!sgniteerG";

function reverse(str) {
  // for of: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  let reversed = "";
  for (const character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

module.exports = reverse;
