const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam (members) {
  let arr = [];
  if (Array.isArray(members) === true) {
    for (let item of members) {
    if (typeof item === 'string') {
      let sym = item.trim().toUpperCase()[0];
      arr.push(sym);
    } else if (typeof item === 'array') {
      for (let i of item) {
        let sym = i.trim()[0];
        arr.push(sym);
      }
    }
    }
    let team = arr.sort().join(''); 
    return team;
  } else {return false;}     
}