const reverse = require("./method3");

test("Reverse function exists", () => {
  expect(reverse).toBeDefined();
});

test("Reverse reverses a string", () => {
  expect(reverse("shaho")).toEqual("ohahs");
});

test("Reverse reverses a string", () => {
  expect(reverse("  shaho")).toEqual("ohahs  ");
});
