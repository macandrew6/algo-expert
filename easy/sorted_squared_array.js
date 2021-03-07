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

const sortedSquaredArrayRefactor = (array) => {
  let squaredOrderedValues = new Array(array.length).fill(0);
  let start = 0;
  let end = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (Math.abs(array[start]) >= Math.abs(array[end])) {
      squaredOrderedValues[i] = array[start] * array[start];
      start++ - 1;
    } else if (Math.abs(array[start]) < Math.abs(array[end])) {
      squaredOrderedValues[i] = array[end] * array[end];
      end--;
    }
  }
  return squaredOrderedValues;
};

let array = [-4, -2, 0, 1, 3];
console.log(sortedSquaredArrayRefactor(array));
