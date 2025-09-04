/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let k = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== nums[k-1]){
      nums[k] = nums[i]
      if(i != k) {
        nums[i] = null
      }
      k++
    } else {
      nums[i] = null
    }
  }
  console.log(nums)
  return k
};

console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 5]))
