/**
 * Given a sentence, your function should reverse the order of characters in each word, keeping the same sequence of words.
Example:
Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen
 */

const reverseCharactersOfWord = (str) => {
  let reverseStr = '';
  let temp = '';

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ' ') {
      reverseStr = ' ' + temp + reverseStr;
      temp = '';
    } else {
      temp = temp + str[i];
    }
  }

  reverseStr = temp + reverseStr;

  return reverseStr;
};

console.log(reverseCharactersOfWord('we are neoGrammers'));
