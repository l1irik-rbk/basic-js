import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  let str = n.split('-').join('')

  let letters = ''
  let digits = ''

  let codeA = 'A'.charCodeAt(0)
  let code1 = '0'.charCodeAt(0)
   
  for (let i = codeA; i < codeA + 6; i ++) {
    letters += String.fromCharCode(i)
  }

  for (let i = code1; i < code1 + 10; i ++) {
    digits += String.fromCharCode(i)
  }
  console.log(digits)
  for (let i = 0; i < str.length; i++) {
    if (letters.includes(str[i]) || digits.includes(str[i])) {
      return true 
    } else {
      return false
    }
  }
}
