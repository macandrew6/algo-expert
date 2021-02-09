/*
Bubble Sort

Write a function that take in an array of integers and returns a sorted version 
of that array. Use the Bubble Sort algorithm to sort the array.

If you're unfamiliar with Bubble Sor, we recommend watching the Conceptual overview
section of this question's video explanation before starting to code.

example:
[8, 5, 2, 9, 5, 6, 3]
 <->
[5, 8, 2, 9, 5, 6, 3]
    <->
[5, 2, 8, 9, 5, 6, 3]
....
*/

// time O (n^2) | space O (1)
const bubbleSort = (array) => {
  // traverse the array
  let isSorted = false;
  counter = 0;
  // if el1 is greater than el2
  // we swap them
  // check to see if there were any swaps stop running if there are no swaps
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] >= array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter += 1;
  }
  return array;
};

const swap = (idx1, idx2, array) => {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
};
