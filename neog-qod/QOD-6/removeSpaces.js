/**
 * Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word.
 *     noSpacesForLoop('       We are     neoGrammers   ')   // WeareneoGrammers
 */

const noSpacesForLoop = (str) => {
  let unspacedStr = '';
  let trimmed = str.trim();
  for (let i = 0; i < trimmed.length; i++) {
    if (trimmed[i] !== ' ') {
      unspacedStr += trimmed[i];
    }
  }
  return unspacedStr;
};

// const noSpacesForLoop = (str) => {
//   return str.split(' ').join('');
// };

console.log(noSpacesForLoop('       We are     neoGrammers   '));
