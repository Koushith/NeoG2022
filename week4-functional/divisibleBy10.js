/**
 * return an num that is divisibel by 10
 */

let nums = [22, 10, 30, 5, 4, 1, 99, 80, 1, 3, 1];

function divisibleBy10(arr) {
  let nums = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0) {
      nums.push(arr[i]);
    }
  }
  return nums;
}

//console.log(divisibleBy10(nums));

console.log(nums.filter((item) => item % 10 === 0));
