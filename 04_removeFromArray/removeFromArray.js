const removeFromArray = function (arr, ...targets) {
  let i = arr.length;
  while (i--) {
    if (targets.includes(arr[i])) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
