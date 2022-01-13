/*
https://leetcode.com/problems/determine-if-string-halves-are-alike/

1704. Determine if String Halves Are Alike
Level: Easy

You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

@param {string} s
@return {boolean}
*/

var halvesAreAlike = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;

  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.includes(s.slice(0, s.length / 2)[i])) {
      count++;
    }
    if (vowels.includes(s.slice(s.length / 2)[i])) {
      count--;
    }
  }

  if (count === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = halvesAreAlike;

/*
Success
 
Runtime: 137 ms, faster than 13.71% of JavaScript online submissions for Determine if String Halves Are Alike.
Memory Usage: 40.9 MB, less than 21.71% of JavaScript online submissions for Determine if String Halves Are Alike.
*/
