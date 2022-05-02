/**
 * Given an array and an item, your function should return the index at which the item is present.
 *
 * eg - getElementIndex([1, 5, 6, 7, 3, 8], 6) // 2
 */

const getElementIndex = (array, key) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return i;
    }
  }
  return -1;
};

// console.log(getElementIndex([1, 5, 6, 7, 3, 8], 8));

// console.log([1, 5, 6, 7, 3, 8].findIndex((i) => i == 8));

/**
 * return the element instead of index
 */

const getElement = (array, key) => {
  for (let i = 0; i < array.length; i++) {
    return array[key];
  }
  return -1;
};

console.log(getElement([1, 5, 6, 7, 3, 8], 2));

console.log([1, 5, 6, 7, 3, 8].find((ele, index) => index === 2 && ele));
