/*
https://leetcode.com/problems/sorting-the-sentence/submissions/

1859. Sorting the Sentence
Level: Easy

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

@param {string} s
return {string}
*/

var sortSentence = function (s) {
  let result = new Array(9);
  let start = s.length - 1;
  let end = s.length - 1;
  let order = s.length - 1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      start = i + 1;
      let newWord = s.slice(start, end);
      order = s[end];
      end = i - 1;
      result.splice(order - 1, 1, newWord);
    } else if (i === 0) {
      start = 0;
      let newWord = s.slice(start, end);
      order = s[end];
      result.splice(order - 1, 1, newWord);
    }
  }

  result = result.filter((item) => item);

  result = result.join(" ");

  return result;
};

module.exports = sortSentence;

/*
Success
 
Runtime: 101 ms, faster than 13.33% of JavaScript online submissions for Sorting the Sentence.
Memory Usage: 38.4 MB, less than 83.58% of JavaScript online submissions for Sorting the Sentence.
*/
