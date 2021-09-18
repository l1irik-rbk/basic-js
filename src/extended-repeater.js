import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let newStr = ''
  let newAddition = ''
  str = String(str)

  if (options.repeatTimes  === undefined) {
    options.repeatTimes = 1
  }

  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1
  }

  if (options.addition === undefined) {
    options.addition = ''
  }

  if (options.separator === undefined) {
    options.separator = '+'
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }

  for (let j = 0; j < options.additionRepeatTimes; j++) {
    newAddition += `${options.addition}${options.additionSeparator}`
  }
  newAddition = newAddition.slice(0, newAddition.length - options.additionSeparator.length)
  
  for (let i = 0; i < options.repeatTimes ; i++) {
    newStr += `${str}${newAddition}${options.separator}`
  }
  newStr = newStr.slice(0, newStr.length - options.separator.length)

  return newStr
}
