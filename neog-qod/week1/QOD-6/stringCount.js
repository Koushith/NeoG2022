/**
 * A program that reads a string and counts the number of characters present in the string- ignore all spaces
 */

// const strCount = (str) => {
//   // return str.length
//   let trimmed = str.trim();
//   let count = 0;
//   for (let i = 0; i < trimmed.length; i++) {
//     count++;
//   }
//   return count;
// };

const strCount = (str) => {
  // return str.split(' ').filter((ch) => ch !== '').length;
  return str.split('').filter((i) => i !== ' ').length;
};

// console.log(strCount('  We are neoGrammers   '));

const countNumberOfCharecters = (str) => {
  let count = 0;

  const trimmedStr = str.trim();
  for (let i = 0; i <= trimmedStr.length - 1; i++) {
    if (trimmedStr[i] !== ' ') {
      count++;
    }
  }

  return count;
};

console.log(countNumberOfCharecters('  We are neoGrammers   '));
