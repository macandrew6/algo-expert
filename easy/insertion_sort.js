/*
Insertion Sort

Write a function that takes in an array of integers and returns a sorted version of
that array. Use the Insertion Sort algorithm to sort the array.

example:
array = [8, 5, 2, 9, 5, 6, 3]
output => [2, 3, 5, 5, 6, 8, 9]

not the most performant sorting algo,
but easy to understand and easy to implement
*/

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j--;
    }
  }
  return array;
};

const swap = (idx1, idx2, array) => {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
};
