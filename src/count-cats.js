module.exports = function countCats(matrix) {
  let count = 0;
  matrix.flat().forEach(el => {
    if (el == '^^') count += 1;
  });
  return count;
};
