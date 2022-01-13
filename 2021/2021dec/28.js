/*
https://leetcode.com/problems/maximum-product-difference-between-two-pairs/submissions/

1913. Maximum Product Difference Between Two Pairs
Level: Easy

The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

Return the maximum such product difference.

@param {number[]} nums
@return {number}
*/

var maxProductDifference = function (nums) {
  const highest = Math.max(...nums);
  nums.splice(nums.indexOf(highest), 1);
  const nextHighest = Math.max(...nums);
  nums.splice(nums.indexOf(nextHighest), 1);

  const lowest = Math.min(...nums);
  nums.splice(nums.indexOf(lowest), 1);
  const nextLowest = Math.min(...nums);
  nums.splice(nums.indexOf(nextLowest), 1);

  return highest * nextHighest - lowest * nextLowest;
};

module.exports = maxProductDifference;

/*
Success
 
Runtime: 72 ms, faster than 98.01% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
Memory Usage: 41.9 MB, less than 35.61% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
*/
