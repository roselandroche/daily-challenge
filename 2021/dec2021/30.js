/*
https://leetcode.com/problems/rings-and-rods/submissions/

2103. Rings and Rods
Level: Easy

There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.

You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where:

The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.

Return the number of rods that have all three colors of rings on them.

@param {string} rings
@return {number}
*/

var countPoints = function (rings) {
  if (rings.length < 3) {
    return 0;
  }

  let rods = [];
  let colors = ["B", "G", "R"];

  for (let i = rings.length - 1; i >= 0; i -= 2) {
    let currRod = rings[i];

    if (!rods.includes(currRod)) {
      let currColor = rings[i - 1];
      colors.splice(colors.indexOf(currColor), 1);

      for (let j = rings.length - 3; j >= 0; j -= 2) {
        if (rings[j] === currRod) {
          let nextColor = rings[j - 1];
          if (colors.includes(nextColor)) {
            colors.splice(colors.indexOf(nextColor), 1);
          }
        }
      }
      if (colors.length === 0) {
        rods.push(currRod);
      }
    }
    colors = ["B", "G", "R"];
  }
  return rods.length;
};

module.exports = countPoints;

/*
Success
 
Runtime: 127 ms, faster than 5.41% of JavaScript online submissions for Rings and Rods.
Memory Usage: 39.8 MB, less than 18.67% of JavaScript online submissions for Rings and Rods.
*/
