/**
 *
 * @param {Given a string, determine if it is a palindrome, considering only alphanumeric characters} string
 */
const checkPalindrome = (string) => {
  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  if (reversed === string) return true;

  return false;
};

console.log(checkPalindrome('madam121madam'));

const checkPalindrome = (string) => {
  let i = 0,
    j = string.length - 1;
  while (i < j) {
    if (string[i++] !== string[j--]) {
      return false;
    }
  }
  return true;
};

console.log(checkPalindrome('madam121madam'));
