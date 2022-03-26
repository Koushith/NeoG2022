/**
 * Reduce method
 */

// function sum(arr) {
//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
// let arr = [10, 20, 30];

// const euros = [29.76, 41.85, 46.5];
// const reducer = (total, amount) => {
//   console.log('total', total);
//   console.log('amount', amount);
//   return total + amount;
// };

// const sum = euros.reduce(reducer);

// let sum = 0;
// for (let n of euros) sum += n;

// console.log(sum);

let arr = [1, 2, 5, 11];

const reducer1 = (accumulator, currentValue) => accumulator + currentValue;

// a, c => a+c     a=0, c= 1

// const result = arr.reduce(reducer, 0);

let peoples = [
  { name: 'koushith', age: 25 },
  { name: 'Preetham', age: 20 },
  { name: 'Rach', age: 23 },
  { name: 'Anki', age: 24 },
];

const allAges = peoples.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.age;
}, 0);

// console.log('all', allAges);

/**
 * given an array of no- calculate the sum
 */

let nums = [22, 10, 30, 5, 4, 1, 99, 80, 1, 3, 1];

const reducer2 = (sum, curr) => sum + curr;

// console.log(nums.reduce(reducer, 0));

/**
 * given an arrat of numbers, return the sum of even and odd even, oddd count- {even:10,odd:20}
 */

let obj = {
  even: 0,
  odd: 0,
};

// const reducer = (acc, curr) => (curr % 2 === 0 ? { ...acc, even: acc.even + curr } : { ...acc, odd: acc.odd + curr });

// console.log(nums.reduce(reducer, obj));

function sumCounter(arr) {
  let obj = {
    even: 0,
    odd: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      obj.even = obj.even + arr[i];
    } else {
      obj.odd = obj.odd + arr[i];
    }
  }

  return obj;
}

//console.log(sumCounter(nums));

/**
 * return an obj with odd count and even count
 */

function evenOddCount(arr) {
  let obj = {
    even: 0,
    odd: 0,
  };

  let oddCount = 0;
  let evenCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
      obj.even = evenCount;
    } else {
      oddCount++;
      obj.odd = oddCount;
    }
  }
  return obj;
}

// console.log(evenOddCount(nums));

const reducer = (acc, curr) => {
  let evenCount = 0;
  let oddCount = 0;
  if (curr % 2 == 0) {
    evenCount++;
    console.log('even0', evenCount);

    acc.even = evenCount;
  } else {
    oddCount++;
    acc.odd = oddCount;
  }
  return acc;
};

console.log(nums.reduce(reducer, obj));

// console.log(
//   'evenTedst',
//   nums.filter((num) => num % 2 === 0)
// );

// console.log(
//   'odd',
//   nums.filter((num) => num % 2 !== 0)
// );
