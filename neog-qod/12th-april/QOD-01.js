/**
 * Q1- Given a and b, your function should return value of a^b -
 *
 * eg- power(2,3)  ----->8
 */

const power = (a, b) => Math.pow(a, b);
//or

function power1(base, exponent) {
  // start from 1- coz if we start from zero- mul on 0 will results in 0 itself.
  let result = 1;
  //if you don't pass exponent- set the exponent to 2- default
  if (exponent === undefined) exponent = 2;

  for (let i = 1; i <= exponent; i++) {
    result = result * base;
  }
  return result;
}

function power3(a, b) {
  return a ** b;
}

console.log(power3(3, 3));

// q2

/**
 * given an array- function should return an length of the array
 */

const arr = [5, 52, 31, 35, 48, 60];
const lengthOfArray = (arr) => arr.length;
console.log(lengthOfArray(arr));
