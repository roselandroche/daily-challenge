/*
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
167. Two Sum II - Input Array Is Sorted
Level: Easy

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

@param {number[]} numbers
@param {number} target 
@return {number[]}
*/

var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let firstInd = i + 1;
    let second = target - numbers[i];
    if (numbers.includes(second, i + 1)) {
      return [firstInd, numbers.lastIndexOf(second) + 1];
    }
  }
};

module.exports = twoSum;

/*
Success

Runtime: 320 ms, faster than 9.73% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 39.3 MB, less than 37.33% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
*/
