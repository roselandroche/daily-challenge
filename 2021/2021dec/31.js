/*
https://leetcode.com/problems/truncate-sentence/submissions/

1816. Truncate Sentence
Level: Easy

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.



@param {string} s
@param {number} k
@return {string}
*/

var truncateSentence = function (s, k) {
  let spaces = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " && spaces < k) {
      spaces++;
    }
    if (s[i] === " " && spaces === k) {
      end = i;
      break;
    }
  }

  if (spaces === k - 1) {
    return s;
  } else {
    return s.slice(0, end);
  }
};

module.exports = truncateSentence;

/*
Success
 
Runtime: 84 ms, faster than 18.86% of JavaScript online submissions for Truncate Sentence.
Memory Usage: 38 MB, less than 99.75% of JavaScript online submissions for Truncate Sentence.
*/
