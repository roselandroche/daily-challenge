/*
https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/

1725. Number Of Rectangles That Can Form The Largest Square
Level: Easy

You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.

You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.

Return the number of rectangles that can make a square with a side length of maxLen.

@param {number[][]} rectangles
@return {number}
*/

var countGoodRectangles = function (rectangles) {
  let highestLow;
  let count = 0;

  for (let i = 0; i < rectangles.length; i++) {
    if (highestLow === undefined || Math.min(...rectangles[i]) > highestLow) {
      highestLow = Math.min(...rectangles[i]);
    }
  }

  for (let i = 0; i < rectangles.length; i++) {
    if (
      rectangles[i].includes(highestLow) &&
      Math.min(...rectangles[i]) >= highestLow
    ) {
      count++;
    }
  }

  return count;
};

module.exports = countGoodRectangles;

/*
Success
 
Runtime: 129 ms, faster than 19.85% of JavaScript online submissions for Number Of Rectangles That Can Form The Largest Square.
Memory Usage: 41.2 MB, less than 90.44% of JavaScript online submissions for Number Of Rectangles That Can Form The Largest Square.
*/
