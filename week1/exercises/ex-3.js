/**
 * hosisting
 */

let a = 20;
function something() {
  // a = undefined
  console.log(a);
  var a = 2;
}

something(); // undefined coz in the first phase memoreory is allocated and it is not assoged the vlue yet. we are logging before that
