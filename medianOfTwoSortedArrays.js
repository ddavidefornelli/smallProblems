/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let s = []
  let l1 = nums1.length
  let l2 = nums2.length

  let i = 0
  let j = 0
  while(i < l1 && j < l2) {
    if(nums1[i] < nums2[j]) {
      s.push(nums1[i])
      i++
    } else if(nums2[j] < nums1[i]) {
      s.push(nums2[j])
      j++
    } else if(nums2[j] === nums1[i]){
      s.push(nums1[i])
      s.push(nums2[j])
      i++
      j++
    }
  }

  while(i < l1) {
    s.push(nums1[i])
    i++
  }
  while(j < l2) {
    s.push(nums2[j])
    j++
  }


  let mp
  if(s.length % 2 === 0){
    mp = (s.length / 2) - 1
    return (s[mp] + s[mp+1]) / 2
  } else { 
    mp = Math.round(s.length / 2)
    return s[mp] 
  }
};
