/*
https://leetcode.com/problems/remove-outermost-parentheses/

1021. Remove Outermost Parentheses
Level: Easy

A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

@param {string} s
@return {string}
*/

var removeOuterParentheses = function (s) {
  let newS = "";
  let count = 0;
  let startInd = 0;

  for (let i = 0; i <= s.length; i++) {
    if (i !== 0 && count === 0) {
      newS += s.slice(startInd + 1, i - 1);
      startInd = i;
    }
    if (s[i] === "(") {
      count++;
    } else if (s[i] === ")") {
      count--;
    }
  }
  return newS;
};

module.exports = removeOuterParentheses;

/*
Success
 
Runtime: 117 ms, faster than 18.39% of JavaScript online submissions for Remove Outermost Parentheses.
Memory Usage: 40.1 MB, less than 96.55% of JavaScript online submissions for Remove Outermost Parentheses.
*/
