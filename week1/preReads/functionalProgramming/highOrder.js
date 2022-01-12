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
// noisy(Math.min)(3, 2, 1);

// ['a', 'b', 'c'].forEach((e) => console.log(e));

//Filtering array

let SCRIPTS = [
  {
    name: 'Coptic',
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: 'ltr',
    year: -200,
    living: false,
    link: 'https://en.wikipedia.org/wiki/Coptic_alphabet',
  },
  {
    name: 'Coptic',
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: 'ltr',
    year: -200,
    living: false,
    link: 'https://en.wikipedia.org/wiki/Coptic_alphabet',
  },
  {
    name: 'Copdsfsdfsdfsdtic',
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: 'ltr',
    year: -200,
    living: false,
    link: 'https://en.wikipedia.org/wiki/Coptic_alphabet',
  },
  {
    name: 'dsfdsf',
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    direction: 'ltr',
    year: -200,
    living: true,
    link: 'https://en.wikipedia.org/wiki/Coptic_alphabet',
  },
];

/**
 *
 *
 * The function uses the argument named test, a function value, to fill a “gap” in the computation—the process of deciding which elements to collect.

Note how the filter function, rather than deleting elements from the existing array, builds up a new array with only the elements that pass the test. This function is pure. It does not modify the array it is given.
Like forEach, filter is a standard array method. The example defined the function only to show what it does internally. From now on, we’ll use it like this instead:} array

 */

function filterArray(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

// console.log(filterArray(SCRIPTS, (scripts) => scripts.living));

/**
 * Say we have an array of objects representing scripts, produced by filtering the SCRIPTS array somehow. But we want an array of names, which is easier to inspect.
 *
 * The map method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but its content will have been mapped to a new form by the function.
 */

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

console.log(map(SCRIPTS, (e) => e.name));
