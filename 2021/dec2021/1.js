/*
28. Implement strStr()
Level: Easy

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 @param {string} haystack
 @param {string} needle
 @return {number}
*/
var strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  } else if (haystack === "") {
    return -1;
  } else {
    let index = 0;
    while (haystack[index + needle.length - 1]) {
      if (haystack.slice(index, index + needle.length) === needle) {
        return index;
      }
      index++;
    }
  }
  return -1;
};

module.exports = strStr;

/* 
Runtime: 84 ms, faster than 62.18% of JavaScript online submissions for Implement strStr().
Memory Usage: 40.7 MB, less than 34.26% of JavaScript online submissions for Implement strStr().

Notes:

*/
