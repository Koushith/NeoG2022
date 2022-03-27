/**
 * return an array od numbers where odd numbers are incremented by 1 and even numbers are decremented ny 1
 */

let nums = [22, 10, 30, 5, 4, 1, 99, 80, 1, 3, 1];

function oddAndEver(arr) {
  let evenSum = [];
  let oddDec = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum.push(arr[i] + 1);
    } else {
      oddDec.push(arr[i] - 1);
    }
  }
  console.log('even', evenSum);
  console.log('oddSum', oddDec);
  return [...evenSum, ...oddDec];
}

//console.log(oddAndEver(nums));
let filtered = nums.map((item) => (item % 2 === 0 ? item + 1 : item - 1));
console.log(filtered);
