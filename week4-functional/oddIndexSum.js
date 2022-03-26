/**
 * find the um of all numbers at odd index
 */

let nums = [22, 10, 30, 5, 4, 1, 99, 80, 1, 3, 1];

// test fun

let oddIndex = nums.filter((num, index) => index % 2 !== 0);

console.log('oddIndex helper', oddIndex);

console.log(
  'odd Index without redce',
  oddIndex.reduce((acc, curr) => (acc += curr), 0)
);

const reducer = (acc, num, index) => {
  if (index % 2 !== 0) {
    // console.log(index);
    console.log(num);
    acc = acc + num;
  }
  return acc;
};

console.log('with reducer', nums.reduce(reducer, 0));
