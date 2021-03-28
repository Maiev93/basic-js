const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cat = 0;
  for (const arr of matrix) {
    for (const item of arr) {
      if (item === '^^') {
        cat = cat + 1;
      }
    }
  }
  return cat;  
};