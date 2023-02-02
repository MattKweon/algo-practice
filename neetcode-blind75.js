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

/*
// 242. Valid Anagram
//
// pseudocode:
[x] split up both of the input strings into an array of individual characters
[x] sort the new arrays by alphabetical order
[x] if the length of of the two strings do not equal each other return false
[x] loop through the first string and make sure all the characters match
*/
function isAnagram(s, t) {
  s = s.split('').sort();
  t = t.split('').sort();
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) return false;
  }
  return true;
}

/*
// 1. Two Sum
//
// pseudocode:
[x] create a new hashmap
[x] loop through the input array of integers
[x] find the difference between the target integer and the value at index
[x] if it does exists return the index of the two numbers
[x] if the difference doesn't exists in the new hashmap add the index value pair to the map
*/
function twoSum(nums, target) {
  const mp = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (mp.has(diff)) {
      return [i, mp.get(diff)];
    }
    mp.set(nums[i], i);
  }
}
