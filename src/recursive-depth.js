const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr, depth = 1, sum = []) {
  sum.push(depth);
  for (let innerArr of arr) {
    if (Array.isArray(innerArr) === true) {
      this.calculateDepth(innerArr, depth + 1, sum)
    }
  }
  return Math.max(...sum);
}

};