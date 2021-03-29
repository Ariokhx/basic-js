module.exports = function transform(arr) {
  const sequences = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];

  let transformedArr = [];

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === sequences[0]) {
        i++;
      } else if (arr[i] === sequences[1]) {
        if (arr[i - 2] !== sequences[0] && i !== 0) {
          transformedArr.pop(arr[i - 1]);
        }
      } else if (arr[i] === sequences[2]) {
        if (i < arr.length - 1) {
          transformedArr.push(arr[i + 1]);
        }
      } else if (arr[i] === sequences[3]) {
        if (i - 1 >= 0 && arr[i - 2] !== sequences[0]) {
          transformedArr.push(arr[i - 1]);
        }
      } else transformedArr.push(arr[i]);
    }
  } else throw new Error();

  return transformedArr;
};
