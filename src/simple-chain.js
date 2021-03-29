const chainMaker = {
  chain: '',

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (this.chain.length) this.chain += '~~';
    if (typeof value === 'undefined') this.chain += '( )';
    else this.chain += `( ${value} )`;
    return this;
  },
  removeLink(position) {
    let arr = this.chain.split('~~');

    if (typeof position === 'number' && Number.isInteger(position) && arr[position - 1]) {
      let delEl = arr[position - 1];
      this.chain = arr.filter(item => item !== delEl).join('~~');

      return this;
    } else {
      this.chain = '';
      throw new Error('An error occurred');
    }
  },
  reverseChain() {
    let arr = this.chain.split('~~').reverse();
    this.chain = arr.join('~~');

    return this;
  },
  finishChain() {
    let curCh = this.chain;
    this.chain = '';

    return curCh;
  }
};

module.exports = chainMaker;
