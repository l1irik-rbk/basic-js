import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error (`Incorrect arguments!`)
    }
  
    let kf = Math.ceil(message.length / key.length)
    key = key.repeat(kf).toUpperCase()
    message = message.toUpperCase()
  
    let A = 'A'.charCodeAt(0)
    let alphabetNumbers = 26
  
    let alphabet = [' ']
    for (let i = A; i < A + 26; i++) {
      alphabet.push(String.fromCharCode(i))
    }
  
    let encryptArr = []
    let counter = 0
    for (let i = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i])) {
        encryptArr.push(message[i])
        continue
      }
  
      if (message[i] === ' ') {
        encryptArr.push(message[i])
        counter++
      } else {
        let letterIndex = message.charCodeAt(i) - A
        let shift = key.charCodeAt(i - counter) - A
  
        encryptArr.push(String.fromCharCode(A + (letterIndex + shift) % alphabetNumbers))
  
      }
    }
  
    return encryptArr.join('')
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error (`Incorrect arguments!`)
    }
  
    let kf = Math.ceil(message.length / key.length)
    key = key.repeat(kf).toUpperCase()
    message = message.toUpperCase()
  
    let A = 'A'.charCodeAt(0)
    let alphabetNumbers = 26
  
    let alphabet = [' ']
    for (let i = A; i < A + 26; i++) {
      alphabet.push(String.fromCharCode(i))
    }
  
    let decryptArr = []
    let counter = 0
    for (let i = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i])) {
        decryptArr.push(message[i])
        continue
      }
  
      if (message[i] === ' ') {
        decryptArr.push(message[i])
        counter++
      } else {
        let letterIndex = message.charCodeAt(i) - A
        let shift = key.charCodeAt(i - counter) - A
  
        decryptArr.push(String.fromCharCode(A + (letterIndex - shift + alphabetNumbers) % alphabetNumbers))
  
      }
    }
  
    return decryptArr.join('')
  }
}
