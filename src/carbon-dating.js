const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) { 
  if (typeof sampleActivity != 'string') {
      return false;
  } else if (sampleActivity > 15 || sampleActivity <= 0) {
      return false;
  } else if (sampleActivity.trim() == '') {
      return false;
  } else if (isNaN(sampleActivity)) {
    return false;
  } else if (isFinite(sampleActivity) == false) {
    return false;
  } else {
    const FACTOR = Math.LN2 / HALF_LIFE_PERIOD;
    let year = Math.ceil( Math.log(MODERN_ACTIVITY / sampleActivity) / FACTOR);
    return year; 
  }
}        
