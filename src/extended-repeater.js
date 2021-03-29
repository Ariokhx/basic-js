module.exports = function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  let additionString = '';

  if (addition !== '') {
    additionString = `${addition + additionSeparator}`.repeat(additionRepeatTimes - 1) + addition;
  }
  
  return `${str + additionString + separator}`.repeat(repeatTimes - 1) + str + additionString;
};
  