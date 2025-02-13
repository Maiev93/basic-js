const CustomError = require("../extensions/custom-error");

module.exports =  function repeater(str, options) {
  let string = [];
  let separator = [];
  if (str == null) {
    str = 'null';
  }
  if (options.repeatTimes == undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes == undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.separator == undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = '|';
  }
   if (typeof options.addition === null) {
    options.addition = 'null';
  } else if (options.addition === undefined) {
    options.addition = '';
  }
  
  for (let i = 0; i < options.repeatTimes; i++) {
    string.push(str);
  }
    
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    separator.push(`${options.addition}`);
  }
 
  let addSeparator = separator.join(options.additionSeparator);
  string = string.map(function(elem) {
    return elem + addSeparator;
  })
  return string.join(options.separator);
 
};