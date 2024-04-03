const palindromes = function (str) {
  const alpha = "abcdefghijklmnopqrstuvwxyz0123456789";
  const newString = str
    .toLowerCase()
    .split("")
    .filter((char) => {
      return alpha.includes(char);
    })
    .join("");
  const reversed = newString.split("").reverse().join("");
  return reversed === newString;
};

// Do not edit below this line
module.exports = palindromes;
