/**
 * > Given length of a regular hexagon, your function should return area of the hexagon.
 *  Find the area of a regular hexagon that has a side length of 10 units.
 *
 * area of hexagonal=  Area of the hexagon = (3√3 s2)/2,
>
 */

// const areaofHexagon = (sides) => ((3 * Math.sqrt(3) * sides ** 2) / 2).toFixed(2);
const areaofHexagon = (sideLength) => (((3 * Math.sqrt(3)) / 2) * Math.pow(sideLength, 2)).toFixed(2);
console.log('area', areaofHexagon(20));
