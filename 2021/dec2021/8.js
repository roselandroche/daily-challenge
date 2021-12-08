/*
https://leetcode.com/problems/concatenation-of-array/submissions/

1929. Concatenation of Array
Level: Easy

Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

@param {number[]} nums
@return {number[]}
*/
var getConcatenation = function (nums) {
  let ans = new Array(nums.length * 2);

  for (let i = 0; i < nums.length; i++) {
    ans.splice(i, 1, nums[i]);
    ans.splice(nums.length + i, 1, nums[i]);
  }

  return ans;
};

module.exports = getConcatenation;

/*
Success
 
Runtime: 146 ms, faster than 9.52% of JavaScript online submissions for Concatenation of Array.
Memory Usage: 43.1 MB, less than 5.88% of JavaScript online submissions for Concatenation of Array.
*/
