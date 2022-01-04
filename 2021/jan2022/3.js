/*
https://leetcode.com/problems/unique-morse-code-words/

804. Unique Morse Code Words
Level: Easy

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

'a' maps to ".-",
'b' maps to "-...",
'c' maps to "-.-.", and so on.
For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have.

@param {string[]} words
@return {number}
*/

var uniqueMorseRepresentations = function (words) {
  let morseAlph = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let alph = "abcdefghijklmnopqrstuvwxyz";
  let results = [];
  let morseWord = "";

  for (let i = 0; i < words.length; i++) {
    let currentString = words[i];

    for (let j = 0; j < currentString.length; j++) {
      let currentLetter = currentString[j];
      morseWord += morseAlph[alph.indexOf(currentLetter)];
    }

    if (!results.includes(morseWord)) {
      results.push(morseWord);
    }

    morseWord = "";
  }

  return results.length;
};

module.exports = uniqueMorseRepresentations;

/*
Success

Runtime: 76 ms, faster than 77.61% of JavaScript online submissions for Unique Morse Code Words.
Memory Usage: 40.3 MB, less than 72.39% of JavaScript online submissions for Unique Morse Code Words.
*/
