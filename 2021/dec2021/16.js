/*
https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

2006. Count Number of Pairs With Absolute Difference K
Level: Easy

Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.

@param {number[]} nums
@param {number} k
@return {number}
*/

var countKDifference = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let first = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(first - nums[j]) === k) {
        count++;
      }
    }
  }

  return count;
};

module.exports = countKDifference;

/*
Success
 
Runtime: 98 ms, faster than 23.88% of JavaScript online submissions for Count Number of Pairs With Absolute Difference K.
Memory Usage: 39.8 MB, less than 94.61% of JavaScript online submissions for Count Number of Pairs With Absolute Difference K.
*/
