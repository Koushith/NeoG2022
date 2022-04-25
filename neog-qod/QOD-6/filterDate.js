/**
 * Write a program that removes the time from the given date string "Wed April 15, 7 pm". It should return only the date without the time.
 *
 * console.log(getDateOnlyForLoop('Wed April 15, 7pm')); //Wed April 15
 */

// const getDateOnlyForLoop = (dateStr) => {
//   let onlyDate = '';

//   for (let i = 0; i <= dateStr.length; i++) {
//     if (dateStr[i] == ',') break;
//     onlyDate += dateStr[i];
//   }
//   return onlyDate;
// };

const getDateOnlyForLoop = (dateStr) => {
  return dateStr.split(',')[0];
};

console.log(getDateOnlyForLoop('Wed April 15, 7pm'));
