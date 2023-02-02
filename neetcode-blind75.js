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
[] split up both of the input strings into an array of individual characters
[] sort the new arrays by alphabetical order
[] if the length of of the two strings do not equal each other return false
[] loop through the first string and make sure all the characters match
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
