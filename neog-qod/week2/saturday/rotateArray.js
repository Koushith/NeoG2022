/**
 * Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.
 * Enter a Number: 1234
Enter the Number of Rotations: 2
Output: 3412
 */

// using slice
const rotateANumberByXPositions = (num, rotation) => {
  // Convert to string
  const numStr = num.toString();

  // Find actual number of rotations
  const actualRotations = rotation % numStr.length;

  // divide the str into 2 parts & join
  const rotatedStr = numStr.slice(actualRotations) + numStr.slice(0, actualRotations);

  // return str after converting to number
  return parseInt(rotatedStr, 10);
};

console.log(rotateANumberByXPositions(1234, 2));

/**
 * Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7
1) Store the first d elements in a temp array
   temp[] = [1, 2]
2) Shift rest of the arr[]
   arr[] = [3, 4, 5, 6, 7, 6, 7]
3) Store back the d elements
   arr[] = [3, 4, 5, 6, 7, 1, 2]
 */
