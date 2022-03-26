/**
 * find the largest number in the array
 */

let nums = [22, 10, 30, 5, 4, 1, 99, 80, 1, 3, 1];

function largest(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
    }
  }
  return num;
}
//or you can use math.max(..arr)
// console.log(largest(nums));

const reducer = (acc, curr) => {
  // if (acc > curr) {
  //   return acc;
  // } else {
  //   return curr;
  // }

  return acc > curr ? acc : curr;
};

console.log('with reduce', nums.reduce(reducer, 0));
