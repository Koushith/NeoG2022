/**
 * filter out all the numbers which is less than 10
 */

let arr = [22, 10, 30, 5, 4, 1, 99, 80, 1, 3, 1];

// const filtered = arr.filter((num) => num < 10);

// console.log(filtered);

function filterArr(arr) {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}

console.log(filterArr(arr) === arr);
