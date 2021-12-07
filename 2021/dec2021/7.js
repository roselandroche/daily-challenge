/*
https://leetcode.com/problems/build-array-from-permutation/submissions/

1920. Build Array from Permutation
Level: Easy

Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

@param {number[]} nums
@return {number[]}
*/
var buildArray = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(nums[nums[i]]);
  }

  return result;
};

module.exports = buildArray;

/*
Success
 
Runtime: 121 ms, faster than 22.31% of JavaScript online submissions for Build Array from Permutation.
Memory Usage: 43.1 MB, less than 48.82% of JavaScript online submissions for Build Array from Permutation.
*/
