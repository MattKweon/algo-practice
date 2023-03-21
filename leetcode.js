/* eslint-disable no-unused-vars */
//
// Algorithm Practice
//

/*
// 9. Palindrome Number
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
// 12. Roman to Integer
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
// 14. Longest Common Prefix
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
// 20. Valid Parentheses
//
Given a string s containing just the characters '(', ')', '{',
'}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

// pseudocode:
[x] define a `pairs` map that has a the opening bracket as a key and the closing as the value
[x] if length of string is odd return false
[x] if first character is a closing tag return false
[x] if the last bracket is opening return false
[x] loop through the string:
   [x] if bracket is opening push it on top of the stack
   [x] if bracket is closing, check to if the top stack is a matching opening bracket:
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
// 26. Remove Duplicate from Sorted Array
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
// 35. Search Insert Position
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

/*
// 58. Length of Last Word
//
// pseudocode:
[x] trim the input string to remove whitespaces from both ends of the string
[x] separate the given string by a space (' ')
[x] take the last string and return the length of that string
*/
function lengthOfLastWord(s) {
  s = s.trim();
  const words = s.split(' ');
  return words[words.length - 1].length;
}

/*
// 66. Plus One
//
// pseudocode:
[x] use the BigInt type
[x] join the numbers in the array by using the join() method
[x] wrap that in BigInt and add BigInt(1) to it
[x] convert BigInt to string then use the split method to get it back in array form
*/
function plusOne(digits) {
  const output = (BigInt(digits.join('')) + BigInt(1)).toString().split('');
  return output;
}

/*
// 1626. Best Team With No Conflicts
//
// pseudocode:
[] create an array that contains the age/score pair of a player
[]
*/
function bestTeamScore(scores, ages) {
  const n = ages.length;
  const ageScorePair = new Array(n);
  for (let i = 0; i < n; i++) {
    ageScorePair[i] = [ages[i], scores[i]];
  }
  ageScorePair.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  const dp = new Array(n).fill(0);
  let maxScore = 0;
  for (let i = 0; i < n; i++) {
    dp[i] = ageScorePair[i][1];
    for (let j = 0; j < i; j++) {
      if (ageScorePair[i][1] >= ageScorePair[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + ageScorePair[i][1]);
      }
    }
    maxScore = Math.max(maxScore, dp[i]);
  }
  return maxScore;
}

/*
// 1071. Greatest Commmon Divisor of Strings
//
// pseudocode:
[x] initialize an output variable with empty string
[x] loop through the first input string
[x] if the letter at index 'i' is the same for both strings and that letter already exists
   in output add to output variable
[x] if not, go next
[x] return output
*/
function gcdOfStrings(str1, str2) {
  let output = '';
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i] && !output.includes(str1[i])) {
      output = output.concat(str1[i]);
    }
  }
  return output;
}

/*
// 69. Sqrt(x)
//
*/
function mySqrt(x) {
  for (let i = 0; i < x + 1; i++) {
    if (i * i > x) return i - 1;
  }
}

/*
// 70. Climbing Stairs
//
// pseudocode:
[] n = 1, just oneway -> 1
[] n = 2, just two ways -> 1+1 or 2
[] n = 3, if we choose:
   [] one step -> two steps left
   [] two steps -> one step left
[] when we know either one or two steps is left, we know how many ways to go to the top
[] so we can write:
   [] one step -> two steps left Fn(2) = 2
   [] two steps -> one step left Fn(1) = 1
[] the answer of Fn(3) = Fn(2) + Fn(1) = 2 + 1 = 3
[] n = 4:
   [] same as above we only have two choices (one step or two steps) at first
   [] one step -> three steps left Fn(3) = 3 (the answer we just got above)
   [] two steps -> two steps left Fn(2) = 2
   [] so we cn get the answer of Fn(4) = Fn(3) = Fn(2) = 3 + 2 = 5
[] n as n:
   [] one step -> n - 1 steps left Fn(n - 1)
    [] two steps -> n - 2 steps left Fn(n - 2)
    [] Fn(n) = Fn(n - 1) + Fn(n - 2)
*/
function climbStairs(n) {
  const arr = [1, 2];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n - 1];
}

/*
// 258. Add Digits
//
// pseudocode:
[] make use of digital root
[] create test case if the input is NaN or less than 10
[] if the remainder of the input divided by 9 is equal to 0, return 9
[] else return the the remainder of the input divided by 9
*/
function addDigits(num) {
  if (isNaN(num) || num === 0) return 0;
  if (num < 10) return num;
  return num % 9 === 0 ? 9 : num % 9;
}

/*
// 286. Missing Number
//
// pseudocode:
[x] sort the given array of nums from least to greatest
[x] if the first number isn't a zero, return zero
[x] loop through the newly sorted array
[x] check to see if the number at [i + 1] is equal to i + 1
[x] if not, return i + 1
[x] else, continue with the loop
*/
function missingNumber(nums) {
  nums.sort((a, b) => a - b);
  if (nums[0] !== 0) return 0;
  for (let i = 0; i < nums.length + 1; i++) {
    if (nums[i + 1] !== i + 1) return i + 1;
  }
}

/*
// 88. Merge Sorted Array
//
// pseudocode:
*/
