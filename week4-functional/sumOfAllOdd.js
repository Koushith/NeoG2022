/**
 * sum of all odd nubers
 */

let nums = [22, 10, 30, 5, 4, 1, 99, 80, 1, 3, 1];

const oddNumber = nums.filter((item) => item % 2 !== 0);
console.log('odd num', oddNumber);

const sum = nums.reduce((acc, curr) => {
  if (curr % 2 !== 0) {
    return (acc += curr);
  }
  return acc;
});
console.log(sum);
