const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {   
  let transformedArr = [];
  if (Array.isArray(arr) === true) {
    let copiedArr = arr.slice();    
    for (item of copiedArr) {
       if (typeof item === 'number' && isNaN(item) === false) {
          transformedArr.push(item);
       } else if (typeof item === 'string') {
       if (item === '--discard-prev' && typeof copiedArr[copiedArr.indexOf(item) - 1] === 'number') {
          transformedArr.pop();
       } else if (item === '--discard-next' && typeof copiedArr[copiedArr.indexOf(item) + 1] === 'number') {
          copiedArr.splice(copiedArr.indexOf(item) + 1, 1);
       } else if (item === '--double-prev' && typeof copiedArr[copiedArr.indexOf(item) - 1] === 'number') {
          transformedArr.push(copiedArr[copiedArr.indexOf(item) - 1]);
       } else if (item === '--double-next' && typeof copiedArr[copiedArr.indexOf(item) + 1] === 'number') {
          transformedArr.push(copiedArr[copiedArr.indexOf(item) + 1]);
       } 
       } 
       } 
       return transformedArr;  
    } else {      
     throw new Error('Invalid Argument!'); 
 }  
};