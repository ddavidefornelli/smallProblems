/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let arrPiece = [0, nums.length - 1]
  let i = Math.floor(nums.length/2)
  while(true){
    if (target > nums[nums.length - 1]) return nums.length
    if (target < nums[0]) return 0 
    if (nums[arrPiece[0]] === target) return arrPiece[0]
    if (nums[arrPiece[1]] === target) return arrPiece[1]
    if(nums[i] === target) return i
     else {
    if(nums[i] < target) {
      arrPiece[0] = i
      i = arrPiece[0] + Math.floor((arrPiece[1] - arrPiece[0]) / 2)
    } else if (nums[i] > target) {
      arrPiece[1] = i
      i = arrPiece[0] + Math.floor((arrPiece[1] - arrPiece[0]) / 2)
    } 
        console.log(arrPiece)
    } 
    if(arrPiece[0] === arrPiece[1] - 1) return arrPiece[1]
  }
};

console.log("result", searchInsert([1,3], 1))
console.log("result", searchInsert([1,3,5,6], 2))

