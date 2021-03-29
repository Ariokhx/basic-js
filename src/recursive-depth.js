module.exports = class DepthCalculator {
  calculateDepth = (arr) => {
    if (!Array.isArray(arr)) {
      return 0;
    }

    if (arr.length === 0) {
      return 1;
    }

    let dep = arr.map(this.calculateDepth);
    return Math.max(...dep) + 1;
  }
};