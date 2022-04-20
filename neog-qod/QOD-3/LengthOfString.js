/**
 *
 * count no of words= countNumberOfWords('    We are neoGrammers    ')  //3 - white spaces are not included
 */

// const countNumberOfWords = (sentence) => {
//   return sentence.split(' ').filter((empty) => empty !== '').length;
// };

const countNumberOfWords = (sentence) => {
  let count = 0;
  const trimmedSentence = sentence.trim();
  console.log(trimmedSentence);
  for (let i = 0; i < trimmedSentence.length; i++) {
    if (trimmedSentence[i] === ' ' && trimmedSentence[i + 1] === ' ') {
      continue;
    } else if (trimmedSentence[i] === ' ') count++;
  }
  return count + 1;
};

console.log(countNumberOfWords('    We are neoGrammers    ')); //3
