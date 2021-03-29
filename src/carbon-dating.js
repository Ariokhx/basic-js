const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleAct) {
  if (typeof (sampleAct) == 'string' && (sampleAct > 0 && sampleAct < MODERN_ACTIVITY) && sampleAct != undefined) {
    let result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleAct) * HALF_LIFE_PERIOD / 0.693);
    return result;
  }
  return false;
};
