/*
https://leetcode.com/problems/count-items-matching-a-rule/submissions/

1773. Count Items Matching a Rule
Level: Easy

You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

@param {string[][]} items
@param {string} ruleKey
@param {string} ruleValue
@return {number}
*/

var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;

  for (let i = 0; i < items.length; i++) {
    switch (ruleKey) {
      case "type":
        if (ruleValue === items[i][0]) {
          count++;
        }
        break;
      case "color":
        if (ruleValue === items[i][1]) {
          count++;
        }
        break;
      case "name":
        if (ruleValue === items[i][2]) {
          count++;
        }
        break;
      default:
        break;
    }
  }

  return count;
};

module.exports = countMatches;

/*
Success
 
Runtime: 124 ms, faster than 14.03% of JavaScript online submissions for Count Items Matching a Rule.
Memory Usage: 42.2 MB, less than 90.94% of JavaScript online submissions for Count Items Matching a Rule.
*/
