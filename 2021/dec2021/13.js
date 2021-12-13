/*
https://leetcode.com/problems/find-target-indices-after-sorting-array/

2089. Find Target Indices After Sorting Array
Level: Easy

You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

@param {number[]} nums
@param {number} target
@return {number[]}
*/

var targetIndices = function (nums, target) {
  // if nums is empty skip the rest of the function
  if (nums.length === 0) {
    return [];
  }

  let result = [];
  let index = 0;

  // sort the array in place
  while (index < nums.length) {
    if (nums[index] !== Math.min(...nums.slice(index))) {
      let minNum = nums.lastIndexOf(Math.min(...nums.slice(index)));
      nums.splice(index, 0, nums[minNum]);
      nums.splice(minNum + 1, 1);
    }
    index++;
  }

  // add indices to results array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result.push(i);
    }
  }

  return result;
};

module.exports = targetIndices;

/*
Success
 
Runtime: 92 ms, faster than 20.32% of JavaScript online submissions for Find Target Indices After Sorting Array.
Memory Usage: 44.7 MB, less than 5.16% of JavaScript online submissions for Find Target Indices After Sorting Array.
*/
