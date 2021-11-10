module.exports.absolute = function (number) {
  if (number > 0) return number;
  if (number < 0) return -number;
  return 0;
};

module.exports.greet = function (name) {
  return "welcome" + name + "!";
};

module.exports.calculate = function (number) {
  if (number + number) return number;
  if (number - number) return number;
  if (number * number) return number;
  return 0;
};

const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;

module.exports = { sum, mul, sub, div };
