/**
 * Given three angles of a triangle, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example: Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
 */

// sum of all 3 angle should be 180 deg. else it is not an triangle

const isItATriangle = (sum) => {
  return sum > 0 && sum <= 180 ? true : false;
};

const findTypeOfTriangle = (...args) => {
  if (args.length !== 3) return `Invalid Arguments! Insert 3 angles.`;
  let sum = 0;
  for (let arg of args) {
    if (arg <= 0 || typeof arg !== `number`) return `${arg} is an Invalid Angle.`;
    sum += arg;
  }
  const [angle1, angle2, angle3] = args;

  if (isItATriangle(sum)) {
    if (angle1 === angle2 && angle2 === angle3) {
      return `Equilateral`;
    }
    if (angle1 === angle2 || angle2 === angle3 || angle1 === angle3) {
      return `Isosceles`;
    }
    return `Scalene`;
  }
  return `Not a Triangle`;
};
console.log(findTypeOfTriangle(20, 60, 77));
