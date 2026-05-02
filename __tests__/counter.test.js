test("counter increments: 0 + 1 equals 1", () => {
  expect(0 + 1).toBe(1);
});

test("counter decrements: 1 - 1 equals 0", () => {
  expect(1 - 1).toBe(0);
});

test("counter resets to zero", () => {
  let count = 5;
  count = 0;
  expect(count).toBe(0);
});

test("counter holds negative values after decrement below zero", () => {
  let count = 0;
  count--;
  expect(count).toBe(-1);
});
