let a = 100;

function App() {
  console.log('1', a);
  let a = 42;
  console.log('2', a);
  {
    let a = 100;
  }
  console.log('3', a);
}

App();

// /**
//  * reference error- cannot access a before initilzation- js knowss a is there but it is in TDZ. it would have worked if a was not initilized inside
//  */

// let b = 20;

// function test() {
//   console.log('b', b);
// }

// test();
