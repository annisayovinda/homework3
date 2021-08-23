const Converter = require("./Converter");

test("test Celcius to Reamur", () => {
  const transform = new Converter();
  expect(transform.toReamur("celcius", 150)).toBe(120);
});

test("test Celcius to Fahreinheit", () => {
  const transform = new Converter();
  expect(transform.toFahreinheit("celcius", 150)).toBe(302);
});
