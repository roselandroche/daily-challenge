/*
https://leetcode.com/problems/goal-parser-interpretation/

1678. Goal Parser Interpretation
Level: Easy

You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

@param {string} command
@return {string}
*/

var interpret = function (command) {
  let result = "";
  let index = 0;

  while (index < command.length) {
    switch (command[index]) {
      case "G":
        result += "G";
        index++;
        break;
      case "(":
        if (command[index + 1] === ")") {
          result += "o";
          index += 2;
        } else {
          result += "al";
          index += 4;
        }
        break;
      default:
        index++;
        break;
    }
  }

  return result;
};

module.exports = interpret;

/*
Success
 
Runtime: 68 ms, faster than 88.91% of JavaScript online submissions for Goal Parser Interpretation.
Memory Usage: 38.9 MB, less than 45.45% of JavaScript online submissions for Goal Parser Interpretation.
*/
