/*
https://leetcode.com/problems/count-the-number-of-consistent-strings/submissions/

1684. Count the Number of Consistent Strings
Level: Easy

You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words

@param {string} allowed
@param {string[]} words
@return {number}
*/

var countConsistentStrings = function (allowed, words) {
  let index = 0;
  let spliced = false;

  while (index < words.length) {
    let word = words[index];

    for (let j = 0; j < word.length; j++) {
      if (!allowed.includes(word[j])) {
        words.splice(index, 1);
        spliced = true;
        break;
      }
      spliced = false;
    }
    if (!spliced) {
      index++;
    }
  }
  return words.length;
};

module.exports = countConsistentStrings;

/*
Success
 
Runtime: 124 ms, faster than 43.99% of JavaScript online submissions for Count the Number of Consistent Strings.
Memory Usage: 48.7 MB, less than 50.34% of JavaScript online submissions for Count the Number of Consistent Strings.

*/
