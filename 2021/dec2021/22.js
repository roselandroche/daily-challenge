/*
https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

1662. Check If Two String Arrays are Equivalent
Level: Easy

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

@param {string[]} word1
@param {string[]} word2
@return {boolean}
*/
var arrayStringsAreEqual = function (word1, word2) {
  if (word1.join("") === word2.join("")) {
    return true;
  }
  return false;
};

module.exports = arrayStringsAreEqual;

/*
Success
 
Runtime: 72 ms, faster than 75.83% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
Memory Usage: 38.9 MB, less than 72.85% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
*/
