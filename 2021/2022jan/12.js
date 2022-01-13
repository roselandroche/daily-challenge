/*
https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/submissions/

1252. Cells with Odd Values in a Matrix
Level: Easy

There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix.

For each location indices[i], do both of the following:

Increment all the cells on row ri.
Increment all the cells on column ci.
Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices.

@param {number} m
@param {number} n
@param {number[][]} indices
@return {number}
*/

var oddCells = function (m, n, indices) {
  let count = 0;
  let matrix = Array(m)
    .fill(0)
    .map((e) => new Array(n).fill(0));

  indices.forEach(([a, b]) => {
    matrix[a] = matrix[a].map((e) => e + 1);
    matrix.forEach((matrix) => matrix[b]++);
  });

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] % 2 !== 0) {
        count++;
      }
    }
  }

  return count;
};

module.exports = oddCells;

/*
NOTE: 
    I did not come up with this independently. I had coded what I thought would work, but the manipulating of array values
    was affecting all inner arrays at the same time (i.e. adding 1 to the first element of the first inner array added 1 to the 
    first element of all inner arrays). I think the issue was how I created the matrix to begin with but I was stuck. Therefore
    I'm treating this challenge as a learning moment - and hopefully I'll be that much better at the next one.

Success
 
Runtime: 103 ms, faster than 28.99% of JavaScript online submissions for Cells with Odd Values in a Matrix.
Memory Usage: 41.9 MB, less than 10.87% of JavaScript online submissions for Cells with Odd Values in a Matrix.
*/
