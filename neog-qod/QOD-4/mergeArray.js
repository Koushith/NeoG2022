/**
 * Given two arrays, your function should return single merged array.
Example:
Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]
 */

// const mergeArray = (arr1, arr2) => {
//   let merged = [];
//   arr1.forEach((e) => {
//     merged.push(e);
//   });
//   arr2.forEach((e) => {
//     merged.push(e);
//   });
//   return merged;
// };

const mergeArray = (arr1, arr2) => {
  let merged = [];
  const pushArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      merged.push(arr[i]);
    }
  };

  pushArr(arr1);
  pushArr(arr2);
  return merged;
};

console.log(mergeArray([1, 3, 5], [2, 4, 6]));
