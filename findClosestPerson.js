/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
   if(Math.abs(z - x) < Math.abs(z - y))  return 1
   if(Math.abs(z - x) > Math.abs(z - y))  return 2
   if(Math.abs(z - x) === Math.abs(z - y))  return 0
};
