/**
 * https://1drv.ms/u/s!Anpl7NAWZiaZiQndZoDw8b5O8LzH?e=mahbts
 */

function sayHi() {
  console.log('Haiii');
}

let func = sayHi;

console.log(func); // prints func- value. doesn't invoke the function
func(); // this will invoke the function- see we have assigned this to another variable above
sayHi(); // even this works

/**
 * Call back
 */

/**
 * question
Text of the question
yes
Function to run if the answer is “Yes”
no
Function to run if the answer is “No”
The function should ask the question and, depending on the user’s answer, call yes() or no():
 */

function ask(question, yes, no) {
  if (confirm(question)) yes();
  //conform is like prompt- window method. wontwork on node
  else no();
}

function showOk() {
  console.log('you agreed');
}

function showCancel() {
  console.log('You canceled the execution.');
}

// usage: functions showOk, showCancel are passed as arguments to ask

ask('Do you sgree?', showOk, showCancel);
