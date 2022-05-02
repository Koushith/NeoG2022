/**
 * write a function that generates a secret code from a given string by shifting alphabets by 'n' places.
 *
 * eg- encode('neogcamp')  --------> pgqiecor
 *
 * a--->c     b---->d and so on
 *
 * lets assume user passses lowercase
 */

/**
 *
 * @param {*} str
 *
 * 1. So the first if statement is checking if the character is a CAPITAL letter between A-Z.
2. The second if statement is for checking if the character is a SMALL letter between a-z.
3. The last statement OR the else statement is for checking if the character is NOT A LETTER/ALPHABET and some random character on keyboard like $%^#@!&*234 etc
 */

// function encodeString(str) {
//   let solved = '';

//   for (let i = 0; i <= str.length; i++) {
//     let asciinum = str[i].charCodeAt() + 2;

//     if (asciinum >= 65 && asciinum <= 77) {
//       solved += String.fromCharCode(asciinum + 2);
//     } else if (asciinum >= 78 && asciinum <= 90) {
//       solved += String.fromCharCode(asciinum - 2);
//     } else {
//       solved += str[i];
//     }
//   }

//   return solved;
// }

// this will handel only lower case
const encode = (code, n) => {
  let result = '';
  code.split('').forEach((c) => {
    console.log('c', c);
    let char = c.charCodeAt(0);
    result += String.fromCharCode(char + n);
  });

  return result;
};

console.log(encode('neogcamp', 2));

/**
 * things i learnt -
 * charCodeAt()  -- return the ascii value of that char
 * fromCharCode()  --->returns alphabet/anything based on number
 */
