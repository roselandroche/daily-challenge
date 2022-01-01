/*
https://leetcode.com/problems/replace-all-digits-with-characters/

1844. Replace All Digits with Characters
Level: Easy

You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

@param {string} s
@return {string}
*/

var replaceDigits = function (s) {
  let alph = "abcdefghijklmnopqrstuvwxyz";
  let sCopy = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      sCopy += s[i];
    } else {
      sCopy += alph[alph.indexOf(s[i - 1]) + Number(s[i])];
    }
  }

  return sCopy;
};

module.exports = replaceDigits;

/*
Success
 
Runtime: 76 ms, faster than 55.03% of JavaScript online submissions for Replace All Digits with Characters.
Memory Usage: 38.8 MB, less than 88.89% of JavaScript online submissions for Replace All Digits with Characters.
*/
