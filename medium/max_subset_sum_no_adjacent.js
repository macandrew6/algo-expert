/*
Max Subset Sum No Adjacent

Write a function that takes in an array of positive integers and returns the maximum sum of non-
adjacent elements in the array.

If the input array is empty, the function should return 0.

example:
input:
array = [75, 105, 120, 75, 90, 135]

output:
330 // 75 + 120 + 135
*/

// time: O(n) | space: O(n)
const maxSubsetSumNoAdjacent = (array) => {
  if (array.length === 1) return array[0];
  let maxSums = new Array(array.length).fill(null);
  maxSums[0] = array[0];
  maxSums[1] = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
  }
  return maxSums[maxSums.length - 1] || 0;
};

// time: O(n) | space: O(1)
const maxSubsetSumNoAdjacentRefactor = (array) => {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  let first = Math.max(array[0], array[1]);
  let second = array[0];
  for (let i = 2; i < array.length; i++) {
    let current = Math.max(first, second + array[i]);
    second = first;
    first = current;
  }
  return first;
};

let array = [75, 105, 120, 75, 90, 135];
let array2 = [7, 10, 12, 7, 9, 14];
console.log(maxSubsetSumNoAdjacent(array2));
