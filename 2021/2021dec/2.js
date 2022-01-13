/*
https://leetcode.com/problems/search-insert-position/
35. Search Insert Position
Level: Easy

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 @param {number[]} nums
 @param {number} target
 @return {number}
*/

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (target > nums[i - 1] && target < nums[i]) {
      return i;
    } else if (target > nums[i] && i === nums.length - 1) {
      return nums.length;
    } else if (target < nums[i] && i === 0) {
      return 0;
    }
  }
};

module.exports = searchInsert;

/*
Runtime: 80 ms, faster than 40.10% of JavaScript online submissions for Search Insert Position.
Memory Usage: 40.3 MB, less than 6.94% of JavaScript online submissions for Search Insert Position.

I don't think this has O(log n) so I need to refactor. Also I don't like how much memory I'm using here, there is a way
to get it more efficient
*/
