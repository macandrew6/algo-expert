/*
Kadane's Algrithm (solves the maximum subarray problem)

Write a function that takes in a non-empty array of integers and returns the maximum sum
that can be obtained by summing up all of the integers in a non-empty sunarray of the input
array. A subarray must only contain adjacent numbers (numbers next to each other in the 
input array).

example:
input:
array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]

output:
19 // [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1]

scratchpad:
[3, -10, 4] => 4 // [4]
[3, -2, 4] => 5 // [3, -2, 4]

*/

// time: O(n)
// space: O(1)
const kadanesAlgorithm = (array) => {
  // formula: max(sum + curr , curr)
  let maxEnding = array[0];
  let maxSoFar = array[0];
  for (let i = 1; i < array.length; i++) {
    let num = array[i];
    maxEnding = Math.max(num, maxEnding + num);
    maxSoFar = Math.max(maxSoFar, maxEnding);
  }
  return maxSoFar;
};

let array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
console.log(kadanesAlgorithm(array));
