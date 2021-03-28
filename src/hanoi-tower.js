const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let info = {};
  let move = Math.pow(2, disksNumber) -1;
  let seconds = Math.floor(move / (turnsSpeed / 3600));
  info.turns = move;
  info.seconds = seconds;
  return info;
};