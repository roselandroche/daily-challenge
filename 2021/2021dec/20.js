/*
https://leetcode.com/problems/count-of-matches-in-tournament/submissions/

1688. Count of Matches in Tournament
Level: Easy

You are given an integer n, the number of teams in a tournament that has strange rules:

If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
Return the number of matches played in the tournament until a winner is decided.

@param {number} n
@return {number}
*/

var numberOfMatches = function (n) {
  let teams = n;
  let matches = 0;

  while (teams > 1) {
    if (teams % 2 === 0) {
      matches += teams / 2;
      teams = teams / 2;
    } else {
      matches += Math.floor(teams / 2);
      teams = Math.ceil(teams / 2);
    }
  }

  return matches;
};

module.exports = numberOfMatches;

/*
Success
 
Runtime: 80 ms, faster than 35.66% of JavaScript online submissions for Count of Matches in Tournament.
Memory Usage: 39 MB, less than 51.23% of JavaScript online submissions for Count of Matches in Tournament.
*/
