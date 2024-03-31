const sumAll = function (start, end) {
  if (
    end < 0 ||
    start < 0 ||
    !Number.isInteger(end) ||
    !Number.isInteger(start)
  ) {
    return "ERROR";
  }
  if (end < start) {
    [start, end] = [end, start];
  }
  let sum = start;
  for (let i = start + 1; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
