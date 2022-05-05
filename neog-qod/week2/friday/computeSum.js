/**
 * Write a JavaScript program to compute the sum of all digits that occur in a given string.
 */

const computeSum = (numStr) => {
  let sum = 0;
  for (let num of numStr) {
    sum += num - '0';
    console.log(sum);
  }
  return sum;
};

console.log(computeSum('1234'));
