const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.lenght;
  },
  addLink(value) {
    if (value === 'null') {
      this.chain.push('null');
    } else {
      this.chain.push(value);
      return this;
    }
  },
  removeLink(position) {
   if (this.chain[position - 1] === undefined) {
      this.chain = [];
      throw new Error ('Invalid position!');
   } else {
      this.chain.splice(position - 1, 1);
      return this;
   }
  },
  reverseChain() {
   this.chain.reverse();
   return this;
  },
  finishChain() {
    let finish = '';
    for (link of this.chain) {
      finish+='( '+link+' )~~';
    }
    this.chain = [];
    return finish.slice(0, finish.length - 2).replace('function ', 'function');
  }
};

module.exports = chainMaker;
