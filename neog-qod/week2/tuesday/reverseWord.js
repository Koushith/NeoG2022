/**
 * Reverse the given string word wise. That is, the last word in a given string should come at 1st place, the last-second word at 2nd place and so on. Individual words should remain as it is. example: Input: Welcome to neoG Camp → Camp neoG to Welcome
 */

const reverseWordWise = (sentence) => {
  const wordsArray = sentence.split(' ');
  let res = '';
  console.log(wordsArray);

  for (let i = wordsArray.length - 1; i >= 0; i--) {
    res += wordsArray[i];
    console.log(res);
    if (i > 0) {
      res += ' ';
    }
  }
  return res;
};

console.log(reverseWordWise('Welcome to neoG Camp'));
