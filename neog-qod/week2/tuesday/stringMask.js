/**
 * Write a program that masks all but the last four characters of the string "5565534276455423" to '#'
 *
 * - #########6455
 */

const maskString = (string) => {
  // if string is <4- return

  if (string.length < 4) return string;
  // masking strings with 4 or more characters in it only
  let result = '';

  for (let i = 0; i < string.length - 4; i++) {
    result += '#';
  }
  /**start from last fourth index */
  for (let i = string.length - 4; i < string.length; i++) {
    result += string[i];
  }
  return result;
};
const str = '5565534276455';
console.log(maskString(str));
