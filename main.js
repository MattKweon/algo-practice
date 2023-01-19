/* eslint-disable no-unused-vars */
//
// Algorithm Practice
//

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
