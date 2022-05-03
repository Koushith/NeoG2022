/**
 * TDZ
 */

function something() {
  console.log(a);
  let a = 2;
}

something();

/**
 * reference error- cannot access before initilization. it will be in tdz
 */
