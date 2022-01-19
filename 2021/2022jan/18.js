/**
 * https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/submissions/
 *
 * 1464. Maximum Product of Two Elements in an Array
 * Level: Easy
 *
 * Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const max = Math.max(...nums);
  nums.splice(nums.indexOf(max), 1);
  const nextMax = Math.max(...nums);

  return (max - 1) * (nextMax - 1);
};

module.exports = maxProduct;

/**
 * Success
 * Runtime: 111 ms, faster than 27.20% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
 * Memory Usage: 39.6 MB, less than 86.00% of JavaScript online submissions for Maximum Product of Two Elements in an Array.
 */
