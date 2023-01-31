/* eslint-disable no-unused-vars */
//
// Algorithm Practice
//

/*
// Palindrome Number
//
Given an integer x, return true if x is a palindrome,
and false otherwise.
*/
function palindromeNum(x) {
  x = x.toString();
  let k = x.length;
  for (let i = 0; i < k; i++) {
    if (x[i] !== x[k - 1]) {
      return false;
    }
    k--;
  }
  return true;
}

/*
// Roman to Integer
//
Given a roman numeral, convert it to an integer.
*/
function romanToInt(s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = sym[s[i]];
    const next = sym[s[i + 1]];

    if (cur < next) {
      result += next - cur;
      i++;
    } else {
      result += cur;
    }
  }
  return result;
}

/*
// Longest Common Prefix
//
Write a function to find the longest common prefix string amongst
an array of strings.
If there is no common prefix, return an empty string "".
*/
function longestCommonPrefix(strs) {
  if (!strs.length) return '';

  for (let i = 0; i <= strs[0].length; i++) {
    if (!strs.every(string => string[i] === strs[0][i])) {
      return strs[0].slice(0, i);
    }
  }
  return strs[0];
}

/*
// Valid Parentheses
//
Given a string s containing just the characters '(', ')', '{',
'}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

// pseudocode:
[x] define a `pairs` map that has a the opening bracket as a key and the closing
   as the value
[x] if length of string is odd return false
[x] if first character is a closing tag return false
[x] if the last bracket is opening return false
[x] loop through the string:
   [x] if bracket is opening push it on top of the stack
   [x] if bracket is closing, check to if the top stack is a matching opening
      bracket:
      [x] if no match is found return false
   [x] if stack is empty, the string is valid, return true
*/
function isValid(s) {
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  if (s.length % 2 === 1) return false;
  if (s[0] === ')' || s[0] === ']' || s[0] === '}') return false;
  if (s[s.length - 1] === '(' || s[s.length - 1] === '(' || s[s.length - 1] === '{') return false;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else if (pairs[stack.pop()] !== s[i]) {
      return false;
    }
  }
  return stack.length === 0;
}

/*
// Remove Duplicate from Sorted Array
//
// pseudocode:
[x] create an output variable and assign a value of one
[x] create a variable for the length of input array
[x] loop through the input array and start the second position
[x] if the value at index 'i' is the same as the previous number:
   [x] remove the number from the input array
   [x] push the number to the end of the array
   [x] decrement index 'i'
   [x] decrement the value of the input length by 1
[x] if not increment the value of output and go to the next increment
*/
function removeDuplicates(nums) {
  let output = 1;
  let inputLen = nums.length;

  for (let i = 1; i < inputLen; i++) {
    if (nums[i] !== nums[i - 1]) {
      output++;
    } else {
      nums.push(nums.splice(i, 1)[0]);
      i--;
      inputLen--;
    }
  }
  return output;
}

/*
// Search Insert Position
//
//pseudocode:
[x] if the input array has the target value, return the index
[x] if not lopp through the input array
[x] check if the target value is less than or equal to the value at index 'i'
[x] if its more go next
[x] if its less return the value of index 'i'
*/
function searchInsert(nums, target) {
  if (nums.indexOf(target) > 0) {
    return nums.indexOf(target);
  } else {
    if (target > nums[nums.length - 1]) {
      return nums.length;
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) {
          return i;
        }
      }
    }
  }
}
