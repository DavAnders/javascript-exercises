const fibonacci = function (n) {
  n = parseInt(n);
  if (n < 0) {
    return "OOPS";
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  let previous = 1;
  let current = 1;
  let next = 0;
  for (let i = 3; i <= n; i++) {
    next = previous + current;
    previous = current;
    current = next;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
