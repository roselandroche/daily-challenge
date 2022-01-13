/*
https://leetcode.com/problems/check-if-the-sentence-is-pangram/

1832. Check if the Sentence Is Pangram
Level: Easy

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

@param {string} sentence
@return {boolean}
*/

var checkIfPangram = function (sentence) {
  let alph = [];

  for (let i = 0; i < sentence.length; i++) {
    if (!alph.includes(sentence[i])) {
      alph.push(sentence[i]);
    }
  }

  if (alph.length === 26) {
    return true;
  }

  return false;
};

module.exports = checkIfPangram;

/*
Success
 
Runtime: 68 ms, faster than 90.83% of JavaScript online submissions for Check if the Sentence Is Pangram.
Memory Usage: 39.4 MB, less than 77.29% of JavaScript online submissions for Check if the Sentence Is Pangram.
*/
