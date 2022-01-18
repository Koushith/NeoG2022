function sum(a, b, ...rest) {
  console.log('rest', rest);
  return a + b;
}
//console.log(sum(1, 2, 3, 4, 5)); //There will be no error because of “excessive” arguments. But of course in the result only the first two will be counted.

function sumAll(...rest) {
  let sum = 0;

  for (let arg of rest) sum += arg;
  return sum;
}

// console.log(sumAll(1)); // 1
// console.log(sumAll(1, 2)); // 3
// console.log(sumAll(1, 2, 3)); // 6

function showName(firstname, lastname, ...titles) {
  console.log(`${firstname} , ${lastname}`);
  console.log('Titles in rest', titles[0]);
}

//showName('Julius', 'Caesar', 'Consul', 'Imperator');

// the arguementvariable

function showName() {
  // console.log(arguments.length);
  // console.log(arguments[0]);
  // console.log(arguments[1])
  // it's iterable
  // for(let arg of arguments) console.log(arg);
}

// shows: 2, Julius, Caesar
showName('Julius', 'Caesar');

// shows: 1, Ilya, undefined (no second argument)
showName('Ilya');

/**
 * spread
 */

// console.log(Math.max(3, 5, 1)); // 5

let arr = [3, 5, 1];
// console.log(Math.max(arr)); // nan- because Math.max expects a list of numeric arguments, not a single array:
// console.log(Math.max(...arr));

// let arr2 = [...arr];

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

let var2 = [1, ...arr1, 2, ...arr2, 25];
//console.log(1, ...arr1, 2, ...arr2, 25); // 1, 1, -2, 3 ,4, 2 , 8, 3, -8, 1, 25

// console.log(var2);

let str = 'Hello';

console.log([...str]);
