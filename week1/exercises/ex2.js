let a = 42;
{
  let a = 100;
}
console.log(a); //42

//42- coz outer a is in global scope and inner a is in bock scope and it is not reachable
