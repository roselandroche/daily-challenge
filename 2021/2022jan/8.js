/*
https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/

1967. Number of Strings That Appear as Substrings in Word
Level: Easy

Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

A substring is a contiguous sequence of characters within a string.

@param {string[]} patterns
@param {string} word
@return {number}
*/

var numOfStrings = function (patterns, word) {
  let count = 0;

  for (let i = 0; i < patterns.length; i++) {
    if (word.includes(patterns[i])) {
      count++;
    }
  }

  return count;
};

module.exports = numOfStrings;

/*
Success
 
Runtime: 76 ms, faster than 67.32% of JavaScript online submissions for Number of Strings That Appear as Substrings in Word.
Memory Usage: 39.7 MB, less than 72.76% of JavaScript online submissions for Number of Strings That Appear as Substrings in Word.
*/
