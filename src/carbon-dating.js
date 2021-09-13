import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

export default function dateSample(sampleActivity) {
  let n = parseFloat(sampleActivity)
  if (typeof sampleActivity !== 'string' || isNaN(n) || n <= 0 || n >= 15) return false
  let k = 0.693 / HALF_LIFE_PERIOD
  let t = Math.ceil(Math.log(MODERN_ACTIVITY / n) / k)
  return t
  // remove line with error and write your code here
}
