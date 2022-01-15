/*
https://leetcode.com/problems/reverse-prefix-of-word/submissions/

2000. Reverse Prefix of Word
Level: Easy

Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
Return the resulting string.

@param {string} word
@param {character} ch
@return {string}
*/

var reversePrefix = function (word, ch) {
  let endInd;

  if (!word.includes(ch)) {
    return word;
  } else {
    endInd = word.indexOf(ch) + 1;
  }

  let newWord = "";

  for (let i = endInd - 1; i >= 0; i--) {
    newWord += word[i];
  }

  newWord += word.slice(endInd);

  return newWord;
};

module.exports = reversePrefix;

/*
Success
 
Runtime: 67 ms, faster than 93.86% of JavaScript online submissions for Reverse Prefix of Word.
Memory Usage: 38.5 MB, less than 93.86% of JavaScript online submissions for Reverse Prefix of Word.
*/
