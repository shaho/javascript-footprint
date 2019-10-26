// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
// reverse("shaho") === "ohahs";
// reverse("hello") === "olleh";
// reverse("Greetings!") === "!sgniteerG";

function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

module.exports = reverse;