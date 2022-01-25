/**
 * A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
 */

function greeting(name) {
  console.log(`hello ${name}`);
}

function processUserInput(callback) {
  let name = 'koushith';
  callback(name);
}
processUserInput(greeting);
