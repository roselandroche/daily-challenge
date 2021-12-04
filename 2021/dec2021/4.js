/*
https://leetcode.com/problems/move-zeroes/
283. Move Zeroes
Level: Easy

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

@param {number[]} nums
@return {void} Do not return anything, modify nums in-place instead.
*/
var moveZeroes = function (nums) {
  let index = 0;
  let count = 0;
  while (index < nums.length) {
    if (nums[index] === 0) {
      nums.splice(index, 1);
      count++;
    } else {
      index++;
    }
  }
  for (let i = 0; i < count; i++) {
    nums.push(0);
  }
};

module.exports = moveZeroes;

/* 
Success

Runtime: 120 ms, faster than 41.37% of JavaScript online submissions for Move Zeroes.
Memory Usage: 43.6 MB, less than 44.69% of JavaScript online submissions for Move Zeroes.

Notes: 
This was basically the same as a different challenge I did recently, but I did not have to reference that to solve this one.
I feel that I am improving!
*/
