/* eslint-disable no-unused-vars */
//
// Blind 75 - neetcode
//

/*
// 217. Contains Duplicate
//
// pseudocode:
[x] create a new set and compare the size of the set to the length of the input integer array
   to see if they equal each other
*/
function containsDuplicate(nums) {
  const s = new Set(nums);
  return s.size !== nums.length;
}
