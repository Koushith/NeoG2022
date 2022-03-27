/**
 * return an object with sum of all odd numbers and even numbers seperately
 *
 * {
 * even : --,
 * odd :---
 * }
 */

let nums = [22, 10, 30, 5, 4, 1, 99, 80, 1, 3, 1];

const reducer = (acc, currItem) =>
  currItem % 2 === 0 ? { ...acc, even: acc.even + currItem } : { ...acc, odd: acc.odd + currItem };

const initialObj = {
  even: 0,
  odd: 0,
};

console.log(nums.reduce(reducer, initialObj)); //  odd -110  even -146
