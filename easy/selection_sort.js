/*
Selection Sort

Write a function that takes in an array of integers and returns a sorted
version of that array. Use the Selection Sort alorithm to sort the array.

array = [8, 5, 2, 9, 5, 6, 3]
[2, 3, 5, 5, 6, 8, 9]

not the most performant
happens in place in the array

iterate through the unsorted list numerous times
*/

// time = O (n^2) | space O (1)
// array = [8, 5, 2, 9, 5, 6, 3]
// smallIdx = 6
// currentIdx = 2
// i = 6
// array[i] = 9
//          |     |
//          V     V
// array = [2, 5, 8, 9, 5, 6, 3]
// array = [8, 3, 2, 9, 5, 6, 5]

const selectionSort = (array) => {
  let currentIdx = 0;
  while (currentIdx < array.length - 1) {
    let smallestIdx = currentIdx;
    for (let i = currentIdx + 1; i < array.length; i++) {
      if (array[i] < array[smallestIdx]) smallestIdx = i;
    }
    swap(smallestIdx, currentIdx, array);
    currentIdx += 1;
  }
  return array;
};

const swap = (idx1, idx2, array) => {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
};
