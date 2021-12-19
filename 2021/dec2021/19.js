/*
https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

2108. Find First Palindromic String in the Array
Level: Easy

Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.

@param {string[]} words
@return {string}
*/

var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let center = Math.floor(currentWord.length / 2);

    for (let j = 0; j <= center; j++) {
      if (currentWord[j] !== currentWord[currentWord.length - 1 - j]) {
        currentWord = "";
        break;
      }
    }

    if (currentWord) {
      return currentWord;
    }
  }

  return "";
};

module.exports = firstPalindrome;

/*
Success
 
Runtime: 80 ms, faster than 100.00% of JavaScript online submissions for Find First Palindromic String in the Array.
Memory Usage: 44.5 MB, less than 100.00% of JavaScript online submissions for Find First Palindromic String in the Array.
*/
