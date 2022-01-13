/*
https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

2011. Final Value of Variable After Performing Operations
Level: Easy

There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

@param {string[]} operations
@return {number}
 */
var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "--X":
        x--;
        break;
      case "X--":
        x--;
        break;
      case "++X":
        x++;
        break;
      case "X++":
        x++;
        break;
      default:
        console.log("Error");
    }
  }
  return x;
};

module.exports = finalValueAfterOperations;

/*
Success

Runtime: 64 ms, faster than 99.56% of JavaScript online submissions for Final Value of Variable After Performing Operations.
Memory Usage: 39.9 MB, less than 89.17% of JavaScript online submissions for Final Value of Variable After Performing Operations.

Notes:
This one was really simple and straightforward, so I decided to take the opportunity to remind myself of the syntax of switch statements!
*/
