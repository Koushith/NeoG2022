let a = 100;
function App() {
  a = 42;
  console.log('1', a);
}

App();

/**
 * 1, 42 - ie will look for inner scope first- block
 */
