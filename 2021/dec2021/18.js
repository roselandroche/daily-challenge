/*
https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/submissions/

2037. Minimum Number of Moves to Seat Everyone
Level: Easy

There are n seats and n students in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.

You may perform the following move any number of times:

Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

Note that there may be multiple seats or students in the same position at the beginning.

@param {number[]} seats
@param {number[]} students
@return {number}
*/

var minMovesToSeat = function (seats, students) {
  let result = 0;
  let index = students.length;

  while (index > 0) {
    let studMin = Math.min(...students);
    let seatsMin = Math.min(...seats);

    result += Math.abs(studMin - seatsMin);

    seats.splice(seats.indexOf(seatsMin), 1);
    students.splice(students.indexOf(studMin), 1);

    index--;
  }

  return result;
};

module.exports = minMovesToSeat;

/*
Success
 
Runtime: 80 ms, faster than 82.20% of JavaScript online submissions for Minimum Number of Moves to Seat Everyone.
Memory Usage: 40.5 MB, less than 44.81% of JavaScript online submissions for Minimum Number of Moves to Seat Everyone.
*/
