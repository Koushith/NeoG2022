/**
 * Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted by the user. Example:Input: findMax(3,5) ––> Output: 5Input: findMax(3,5,9,1) ––> Output: 9
 */

function findMax(...args) {
  let max = 0; //o(1)

  for (let i = 0; i < args.length; i++) {
    //o(n)
    if (max < args[i]) {
      max = args[i];
    }
  }
  return max;
}

// console.log(findMax(3, 5, 9, 1));

let arr = [3, 5, 9, 1];

const max = (arr) => {
  arr.sort((a, b) => a - b);

  return arr[arr.length - 1];
};

console.log(max(arr));
