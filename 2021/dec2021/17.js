/*
https://leetcode.com/problems/find-center-of-star-graph/

1791. Find Center of Star Graph
Level: Easy

There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

@param {number[][]} edges
@return {number}
*/

var findCenter = function (edges) {
  let first = edges[0][0];
  let second = edges[0][1];

  if (first === edges[1][0] || first === edges[1][1]) {
    return first;
  } else {
    return second;
  }
};

module.exports = findCenter;

/*
Success
 
Runtime: 162 ms, faster than 33.26% of JavaScript online submissions for Find Center of Star Graph.
Memory Usage: 51.7 MB, less than 94.87% of JavaScript online submissions for Find Center of Star Graph.

Notes: the constraints dictate that edges will always have length and that each edge will always have length,
    because the center is the only node that will have a value in common we can return the first value that appears twice
*/
