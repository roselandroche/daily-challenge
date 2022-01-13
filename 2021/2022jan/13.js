/* 
https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/submissions/

1827. Minimum Operations to Make the Array Increasing
Level: Easy

You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1.

For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].
Return the minimum number of operations needed to make nums strictly increasing.

An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.

@param {number[]} nums
@return {number}
*/

var minOperations = function (nums) {
  let steps = 0;
  let index = 1;

  while (index < nums.length) {
    if (nums[index] <= nums[index - 1]) {
      nums[index]++;
      steps++;
    } else if (nums[index] > nums[index - 1]) {
      index++;
    }
  }

  return steps;
};

module.exports = minOperations;

/*
Success
 
Runtime: 728 ms, faster than 13.47% of JavaScript online submissions for Minimum Operations to Make the Array Increasing.
Memory Usage: 41.2 MB, less than 19.69% of JavaScript online submissions for Minimum Operations to Make the Array Increasing.
*/
