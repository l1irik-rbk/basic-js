import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let acc = 1
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      acc++
    } else if (str[i] !== str[i + 1]) {
      newStr += `${acc}${str[i]}`
      acc = 1
    }
  }
  return newStr.replace(/1/g, '')
}
