const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length === 0) {
    season ='Unable to determine the time of year!';
    return season;
  } else if (Object.prototype.toString.call(date) === '[object Date]') {
    let season;
    if (date.getDate() < 32 && date.getDate() > 0 && date.getMonth() === 2 || date.getMonth() === 4) {
    season = 'spring';    
    } else if (date.getDate() < 31 && date.getDate() > 0 && date.getMonth() === 3) {
      season = 'spring'; 
    } 
    else if (date.getDate() < 32 && date.getDate() > 0 && date.getMonth() === 0 || date.getMonth() === 11) {
      season = 'winter'; 
    } else if (date.getDate() < 29 && date.getDate() > 0 && date.getMonth() === 1) {
      season = 'winter'; 
    } else if (date.getDate() < 32 && date.getDate() > 0 && date.getMonth() === 6 || date.getMonth() === 7) {
    season = 'summer'; 
    } else if (date.getDate() < 31 && date.getDate() > 0 && date.getMonth() === 5) {
      season = 'summer';    
    } else if (date.getDate() < 31 && date.getDate() > 0 && date.getMonth() === 8 || date.getMonth() === 10) {
    season = 'autumn'; 
    } else if (date.getDate() < 32 && date.getDate() > 0 && date.getMonth() === 9) {
      season = 'autumn';    
    }  
   console.log(season); 
   return season;
  } else {
    throw new Error('Invalid Argument!');
  }   
};
