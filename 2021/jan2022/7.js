/*
https://leetcode.com/problems/find-the-highest-altitude/

1732. Find the Highest Altitude
Level: Easy

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

@param {number[]} gain
@return {number}
*/

var largestAltitude = function (gain) {
  let highest = 0;
  let newAlt = 0;

  for (let i = 0; i < gain.length; i++) {
    newAlt += gain[i];

    if (newAlt > highest) {
      highest = newAlt;
    }
  }

  return highest;
};

module.exports = largestAltitude;

/*
Success
 
Runtime: 130 ms, faster than 5.09% of JavaScript online submissions for Find the Highest Altitude.
Memory Usage: 38.7 MB, less than 72.36% of JavaScript online submissions for Find the Highest Altitude.
*/
