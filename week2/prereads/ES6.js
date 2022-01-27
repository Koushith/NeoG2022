// if (true) {
//   // var a = 2;
//   let a = 2;
// }
//console.log(a); // undefined - a has already defined. cant redeclare with same variable

// let a = 42;
// {
//   let a = 100;
// }
// //console.log(a);  //42- coz a is defined in global scope

// let a = 100
// function App() {
//   console.log('1', a)
//   let a = 42
//   console.log('2', a)
//   {
//     let a = 100
//   }
//   console.log('3', a)
// }

// App()  // throw an error- functuonal scope and trying to access before initilization

// let a = 100;
// function App() {
//   a = 42;
//   console.log('1', a); // 42- coz it will treat as var
// }
// console.log(a); //- 100 coz- global scope
// App();

/**
 * TDZ
 */

// function something() {
//   console.log(a); //error- cannot access before initilization
//   let a = 2;
// }

//something();

function something() {
  // a = undefined
  console.log(a); // undefined
  var a = 2;
}

something();
