const repeatString = function (string, amount) {
  if (amount < 0) {
    return "ERROR";
  }
  let final = "";
  for (let i = 0; i < amount; i++) {
    final += string;
  }
  return final;
};

// Do not edit below this line
module.exports = repeatString;
