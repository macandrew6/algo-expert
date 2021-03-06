/*
Sorted Squared Array

Write a function that takes in a non-empty array of integers that are sorted in ascending order and
returns a new array of the same length with the squares of the original integers also sorted in 
ascending order

example:
input:
array = [1, 2, 3, 5, 6, 8, 9]

output:
[1, 4, 9, 25, 36, 64, 81]
*/

// time: O(nlogn) | space: n
const sortedSquaredArray = (array) => {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    res.push(array[i] * array[i]);
  }
  return array[0] < 0 ? res.sort((a, b) => a - b) : res;
};

const sortedSquareArrayRefactor = (array) => {};

let array = [1, 2, 3, 5, 6, 8, 9];
console.log(sortedSquaredArray(array));
