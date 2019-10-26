const reverse = require("./method2");

test("Reverse function exists", () => {
  expect(reverse).toBeDefined();
});

test("Reverse reverses a string", () => {
  expect(reverse("shaho")).toEqual("ohahs");
});

test("Reverse reverses a string", () => {
  expect(reverse("  shaho")).toEqual("ohahs  ");
});
