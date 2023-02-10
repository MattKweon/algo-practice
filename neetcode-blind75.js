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

/*
// 49. Group Anagrams
//
// pseudocode:
[x] create a new map
[x] loop through the input array using a for of loop
[x] for each word at index, rearrange the word so that all the letters are in alphabetical order
[x] if the word doesn't exist in the map place an empty array placeholder for that word
[x] push the origial word value into the map at the correct key
[x] return all values in the map object
*/
function groupAnagrams(strs) {
  const map = {};
  for (const str of strs) {
    const s = str.split('').sort().join('');
    if (!map[s]) map[s] = [];
    map[s].push(str);
  }
  return Object.values(map);
}

/*
// 347. Top K Frequent Elements
//
// pseudocode:
[x] create a new map
[x] loop through the input array
[x] if the integer at index doesn't exists in the map, add it to the map with a key value pair of
   integer and 1
[x] if it does exist, increment the value of the current key
[x] sort the map keys based on its pair values from highest to lowest
[x] slice the array from index 0 to index 'k'
[x] return output
*/
function topKFrequent(nums, k) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!m.has(nums[i])) {
      m.set(nums[i], 1);
    } else {
      m.set(nums[i], m.get(nums[i]) + 1);
    }
  }
  const output = [...m.keys()].sort((a, b) => m.get(b) - m.get(a)).slice(0, k);
  return output;
}

/*
// 238. Product of Array Except Self
//
// pseudocode:
[x] set up an empty array as our result
[x] initilaize a prefix tracker at 1
[x] loop through the input array
[x] for each position, the result array should equal the prefix tracker
[x] then, update the prefix tracker to be the product of itself multipled by the input value at the position
[x] initialize a suffix tracker at 1
[x] loop backwards through the array
[x] for each iteration, set the result array to be the product of itself multiplied by the suffix tracker
[x] then, update the suffix tracker to be the product of itself, multipled by the input value at that position
*/
function productExceptSelf(nums) {
  const result = [];
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  return result;
}

/*
// 36. Valid Sudoku
//
// pseudocode:
[x] we need to check three things:
   [x] are there duplicates in each row? if yes, return false
   [x] are there duplictes in each column? if yes, return false
   [x] are there duplicates in each 3x3 box? if yes, return false
[x] if everything passes, return true at the end
[x] when dealing with checking duplicates, we use a hash set
[x] create a loop to deal with the row
[x] then create another nest loop to deal with columns
[x] check to see if the first number in the first row is in the row hash set
[x] if it is, then return false
[x] if it isn't add it to the set
[x] check if the number in the first column of the first row is in the set
[x] if not add to the according set
[x] if so return false
[x] do this with the remaining numbers in the correct rows and columns
*/
function isValidSudoku(board) {
  for (let i = 0; i < 9; i++) {
    const row = new Set();
    const col = new Set();
    const box = new Set();

    for (let j = 0; j < 9; j++) {
      const _row = board[i][j];
      const _col = board[j][i];
      const _box = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (_row !== '.') {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col !== '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }

      if (_box !== '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      }
    }
  }
  return true;
}

/*
// 128. Longest Consecutive Sequence
//
// pseudocode:
[x] add a special case if input array is empty, return 0
[x] initialize a counter variable and set it as an empty array
[x] initialize a counter variable that and assign it the value of 1
[x] sort the integer array in ascending order
[x] create a loop for the array starting at the second index
[x] check to see that the value of the current index is one more than the previous integer:
   [x] if it is, add one to the counter
   [x] if the current integer is equal to the next integer, do nothing
   [x] if not, add the current counter to the output and reset the counter back to 1
[x] return the highest number in the output array
*/
function longestConsecutive(nums) {
  if (nums.length === 0) return 0;
  const output = [];
  let counter = 1;
  nums = nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - 1 === nums[i - 1]) {
      counter++;
    } else if (nums[i] !== nums[i - 1]) {
      output.push(counter);
      counter = 1;
    }
  }
  output.push(counter);
  return Math.max(...output);
}
