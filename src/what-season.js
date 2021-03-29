module.exports = function getSeason(date) {
  const seasons = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10]
  };

  if (typeof (date) == 'undefined') return 'Unable to determine the time of year!';
  if (date instanceof Date && isNaN(date.valueOf())) throw new Error();

  let month = date.getMonth();

  for (const season in seasons) {
    if (seasons[season].includes(month)) return season;
  }
};
