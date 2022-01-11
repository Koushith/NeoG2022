/**
 * Leassons are from EJS
 */

let total = 0,
  count = 1;

while (count <= 10) {
  total += count; // 0+1, 1+1, 2+2, 3 ...
  count += 1;
}

/**
 * Abstractions-
 *  function and functions are just values, we can pass our action as a function value.
 */

function repeat(n, action) {
  for (let i = 0; i <= n; i++) {
    action(i);
  }
}
// repeat(10, console.log);

let labels = [];

// repeat(5, (i) => {
//   labels.push(`Unit ${i + 1}`);
// });

repeat(5, function (i) {
  labels.push(`Unit ${i + 1}`);
}); //structure is like for loop.

// console.log(labels);

function greaterThan(n) {
  return (m) => m > n;
}

function greaterThan(n) {
  return function (m) {
    return m > n;
  };
}
let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

function noisy(f) {
  return (...koushith) => {
    console.log('calling with args', koushith);
    let result = f(...koushith);
    console.log('called with', koushith, ', returned', result);
    return result;
  };
}
noisy(Math.min)(3, 2, 1);
