const lib = require("./lib");
const { expect, it } = require("@jest/globals");
const { describe } = require("yargs");

test("our first test", () => {});

test(" second test", () => {
  expect(1).toBe(1);
});

test("absolute- should be return positive number if input is positive", () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});

test("absolute- should be return positive number if input is negative ", () => {
  const result = lib.absolute(-1);
  expect(result).toBe(1);
});

test("absolute- should return 0 if input is 0", () => {
  const result = lib.absolute(0);
  expect(result).toBe(0);
});

describe("absolute", () => {
  it(" should be return positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should be return positive number if input is negative ", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

test(" two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test(" five minus two is three", () => {
  expect(5 - 2).toBe(3);
});
test("  three multiply three is nine", () => {
  expect(3 * 3).toBe(9);
});
test(" fifteen divide three is five", () => {
  expect(15 / 3).toBe(5);
});

test("greet- should return some msg like abc......", () => {
  const result = lib.greet("abc");
  expect(result).toMatch(/abc/);
  expect(result).toContain("welcome abc");
});
test("greet- should return some msg like something different......", () => {
  const result = lib.greet("something different");
  expect(result).toMatch(/something different/);
  expect(result).toContain("welcome something different");
});

test("greet- should return some msg like something new.........", () => {
  const result = lib.greet("something new");
  expect(result).toMatch(/something new/);
  expect(result).toContain("welcome something new");
});

describe("greet", () => {
  it("should return first greeting message", () => {
    const result1 = lib.greet("asbbhjbn");
    expect(result1).toMatch(/asbbhjbn/);
    expect(result1).toContain("welcome asbbhjbn");
  });
  it("should return second greeting message", () => {
    const result2 = lib.greet("mdskdmkd");
    expect(result2).toMatch(/mdskdmkd/);
    expect(result2).toContain("welcome mdskdmkd");
  });
  it("should return third greeting message", () => {
    const result3 = lib.greet("hegghb");
    expect(result3).toMatch(/hegghb/);
    expect(result3).toContain("welcome hegghb");
  });
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

test("the shopping list has milk on it", () => {
  // const shoppingList = lib.greet("");
  expect(shoppingList).toContain("milk");
});

test("Adding 1 + 1 does not equal 3", () => {
  expect(1 + 1).not.toBe(3);
});

const regular = ["students", "employee", "Developer"];
test(" in this list has employee on it", () => {
  // const regular = lib.greet("employee");
  expect(regular).toContain("employee");
});
