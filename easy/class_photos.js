/*
Class Photos

It's photo day at the local school, and you're the photographer assigned to 
take class photos. The class that you'll be photographing has an even number 
of students, and all these students are wearing red or blue shirts. In face,
exactly half of the class is wearing red shirts, and the other half is wearing 
blue shirts. You're responsible for arranging the students into rows before taking
the photo. Each row should contain the same number of students and should adhere to
the folllowing guidlines:

  * All students wearing red shirts must be in the same row.
  * All students wearing blue shirts must be in the same row.
  * Each student in the back row must be strictly taller than the student directly in
    front of them in the front row.

You're given two input array: one containing the heights of all the students with 
red shirts and another one containing the heights of all the students with blue
shirts. These arrays will always have the same length, and each height will be a 
positive integer. Write a function that returns whether or not a class photo that
follows the stated guidlines can be taken.

Note: you can assume that each class has at least 2 students.

Example:
redShirtHeights = [5, 8, 1, 3, 4];
blueShirtHeights = [6, 9, 2, 4, 5];
output: true
*/

// [1, 3, 4, 5, 8]
// [2, 4, 5, 6, 9]
const classPhotos = (redShirtHeights, blueShirtHeights) => {
  // strat 1
  // sort both arrays
  let sortedRedShirtsHeights = redShirtHeights.sort();
  let sortedBlueShirtsHeights = blueShirtHeights.sort();
  // compare them element by element
  for (let i = 0; i < redShirtHeights.length; i++) {
    // if the 1st element of the first array is greater than the first element of the second array
    if (sortedRedShirtsHeights[0] >= sortedBlueShirtsHeights[0]) {
      // check to see if each element of the first array is greater than element of the other array
      if (
        sortedRedShirtsHeights[i] < sortedBlueShirtsHeights[i] ||
        sortedRedShirtsHeights[i] === sortedBlueShirtsHeights[i]
      ) {
        return false;
      }
    } else if (sortedRedShirtsHeights[0] <= sortedBlueShirtsHeights[0]) {
      // if the 1st element of the first array is less than the first element of the second array
      if (
        sortedRedShirtsHeights[i] > sortedBlueShirtsHeights[i] ||
        sortedRedShirtsHeights[i] === sortedBlueShirtsHeights[i]
      ) {
        // check to see if each element of the first array is less than element of the other array
        return false;
      }
    }
  }
  return true;
};

let redShirtHeights = [5, 8, 1, 3, 4];
let blueShirtHeights = [6, 9, 2, 4, 5];
console.log(classPhotos(redShirtHeights, blueShirtHeights));
