/**
 *
 * @param {*} letter
 * @returns
 *
 * Given a sentence, return a sentence with first letter of all words as capital.
 * eg- getSentenceCase('we are neoGrammers') //We Are NeoGrammers
 */

const getUpperCase = (letter) => {
  const asciiValue = letter.charCodeAt(0);
  // preserving ascii if current letter is already in uppercase
  let finalAscii = asciiValue;

  // if current letter is in smaller case
  if (asciiValue >= 97 && asciiValue <= 122) {
    // difference between ascii of small and capital alphabet is 32
    // Eg: a -> 97 ; A -> 65 | 97 - 65 = 32
    finalAscii -= 32; //converts to uppercase
  }

  return String.fromCharCode(finalAscii);
};

const getSentenceCase = (sentence) => {
  let result = '';

  for (let index = 0; index < sentence.length; index++) {
    // if we are at first letter, convert to uppercase
    if (index === 0) {
      result += getUpperCase(sentence[index]);
    } else {
      result += sentence[index];
      // if current letter is space then make the first letter of next word
      // as uppercase, and also increment index, such that that letter is not
      //reevaluated
      if (sentence[index] === ' ') {
        result += getUpperCase(sentence[index + 1]);
        index++;
      }
    }
  }
  return result;
};

console.log(getSentenceCase('we are neoGrammers'));
