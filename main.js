/* eslint-disable no-unused-vars */
//
// Algorithm Practice
//

// Palindrome Number
// Given an integer x, return true if x is a palindrome,
// and false otherwise.
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

// Roman to Integer
// Given a roman numeral, convert it to an integer.
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

// Longest Common Prefix
// Write a function to find the longest common prefix string amongst
// an array of strings.
// If there is no common prefix, return an empty string "".
function longestCommonPrefix(strs) {
  if (!strs.length) return '';

  for (let i = 0; i <= strs[0].length; i++) {
    if (!strs.every(string => string[i] === strs[0][i])) {
      return strs[0].slice(0, i);
    }
  }
  return strs[0];
}
