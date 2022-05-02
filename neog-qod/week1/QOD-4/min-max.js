/**
 * Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMin(3,5) ––> Output: 3
Input: findMin(3,5,9,1) ––> Output: 1
 */

const min = (...args) => {
  console.log(args);
  let minimum = args[0];
  for (let i = 0; i < args.length; i++) {
    if (minimum > args[i]) {
      minimum = args[i];
    }
  }
  return minimum;
};

console.log(min(4, 3, 7, 9, -5, 0.3));
