/*
https://leetcode.com/problems/richest-customer-wealth/

1672. Richest Customer Wealth
Level: Easy

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

@param {number[][]} accounts
@return {number}
 */
var maximumWealth = function (accounts) {
  let result = 0;

  for (let i = 0; i < accounts.length; i++) {
    let current = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      current += accounts[i][j];
    }
    if (current > result) {
      result = current;
    }
  }

  return result;
};

module.exports = maximumWealth;

/*
Success

Runtime: 76 ms, faster than 59.85% of JavaScript online submissions for Richest Customer Wealth.
Memory Usage: 38.6 MB, less than 90.84% of JavaScript online submissions for Richest Customer Wealth.
*/
