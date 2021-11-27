/*
https://leetcode.com/problems/valid-parentheses/

Title: Valid Parentheses
Level: Easy

Description: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // s must have an even length to possibly return true
  if (s.length % 2 === 0) {
    // brackets must occur in correct sequence
    let toMatch = [];
    for (let i = 0; i < s.length; i++) {
      if (
        toMatch.length === 0 ||
        s[i] === "(" ||
        s[i] === "[" ||
        s[i] === "{"
      ) {
        toMatch.push(s[i]);
      }
      if (s[i] === ")") {
        if (toMatch[toMatch.length - 1] === "(") {
          toMatch.pop();
        } else {
          return false;
        }
      } else if (s[i] === "]") {
        if (toMatch[toMatch.length - 1] === "[") {
          toMatch.pop();
        } else {
          return false;
        }
      } else if (s[i] === "}") {
        if (toMatch[toMatch.length - 1] === "{") {
          toMatch.pop();
        } else {
          return false;
        }
      }
    }
    if (toMatch.length > 0) {
      return false;
    }
  } else {
    return false;
  }
  return true;
};

module.exports = isValid;
