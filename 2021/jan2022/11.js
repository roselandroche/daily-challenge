/*
https://leetcode.com/problems/find-greatest-common-divisor-of-array/submissions/

1979. Find Greatest Common Divisor of Array
Level: Easy

Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

@param {number[]} nums
@return {number}
*/

var findGCD = function (nums) {
  const max = Math.max(...nums);
  const min = Math.min(...nums);

  for (let i = min; i > 0; i--) {
    let current = i;

    if (Number.isInteger(min / current) && Number.isInteger(max / current)) {
      return current;
    }
  }
};

module.exports = findGCD;

/*
Success
 
Runtime: 132 ms, faster than 8.79% of JavaScript online submissions for Find Greatest Common Divisor of Array.
Memory Usage: 39.6 MB, less than 97.39% of JavaScript online submissions for Find Greatest Common Divisor of Array.
*/
