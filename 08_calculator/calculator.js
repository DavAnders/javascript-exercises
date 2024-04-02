const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
  // could also use reduce
};

const multiply = function (arr) {
  return arr.reduce((accumulated, curr) => accumulated * curr, 1);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  let sum = 1;
  for (let i = 1; i <= x; i++) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
