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

const reducer = (accumulator, currentValue) => accumulator + currentValue;

// a, c => a+c     a=0, c= 1

const result = arr.reduce(reducer, 0);

let peoples = [
  { name: 'koushith', age: 25 },
  { name: 'Preetham', age: 20 },
  { name: 'Rach', age: 23 },
  { name: 'Anki', age: 24 },
];

const allAges = peoples.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.age;
}, 0);

console.log('all', allAges);
