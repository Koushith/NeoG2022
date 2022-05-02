/**
 * Given an array and two numbers, your function should replace all entries of the first number in an array with the second number.
 *
 * eg-   we pass 5- if 5 exixt- replace with num3 -10
 * console.log(replace([1, 5, 3, 5, 6, 8], 5, 10));
// [ 1, 10, 3, 10, 6, 8 ]
 */

const replace = (arr, num1, num2) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num1) {
      arr[i] = num2;
    }
  }
  return arr;
};

console.log(replace([1, 5, 3, 5, 6, 8], 5, 10));
