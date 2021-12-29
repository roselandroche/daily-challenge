/*
https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

2114. Maximum Number of Words Found in Sentences
Level: Easy

A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.

@param {string[]} sentences
@return {number}
*/

var mostWordsFound = function (sentences) {
  let maxCount = 1;

  for (let i = 0; i < sentences.length; i++) {
    let current = sentences[i];
    let count = 1;

    for (let j = 0; j < current.length; j++) {
      if (current[j] === " ") {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
    }
  }

  return maxCount;
};

module.exports = mostWordsFound;

/*
Success
 
Runtime: 103 ms, faster than 14.55% of JavaScript online submissions for Maximum Number of Words Found in Sentences.
Memory Usage: 40.3 MB, less than 85.91% of JavaScript online submissions for Maximum Number of Words Found in Sentences.
*/
