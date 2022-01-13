/*
https://leetcode.com/problems/flipping-an-image/submissions/

832. Flipping an Image
Level: Easy

Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0]

@param {number[][]} image
@return {number[][]}
*/

var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    let midInd = Math.floor(image.length / 2);

    image[i].forEach((item, index) => {
      let currentItem = item;

      if (index < midInd) {
        image[i][index] = image[i][image[i].length - 1 - index];
        image[i][image[i].length - 1 - index] = currentItem;
      }
    });

    image[i].forEach((item, index) => {
      if (item === 0) {
        image[i][index] = 1;
      } else {
        image[i][index] = 0;
      }
    });
  }

  return image;
};

module.exports = flipAndInvertImage;

/*
Success
 
Runtime: 88 ms, faster than 35.36% of JavaScript online submissions for Flipping an Image.
Memory Usage: 40.5 MB, less than 69.09% of JavaScript online submissions for Flipping an Image.
*/
