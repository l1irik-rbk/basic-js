import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let obj = {}
  let str = ''
  for (let i = 0; i < domains.length; i++) {
    let splitedDomains = domains[i].split('.').reverse()
    str = ''
    for (let j = 0; j < splitedDomains.length; j++) {
      str += `.${splitedDomains[j]}`
      obj[str] = (obj[str] || 0) + 1
    }
  }
  return obj
}
