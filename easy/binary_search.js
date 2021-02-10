/*
Binary Search

Write a function that take in a sorted array of integers as well as a target
integer. The function should use a Binary Search algorithm to determine if the 
target integer is contained in the array and should return its index if it is,
otherwise -1

Example:

array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73] (sorted)
target = 33
returns => 3 (index)
*/

// time O (log(n)) | space O(log(n))
const binarySearch = (array, target) => {
  return helper(array, target, 0, array.length - 1);
};

const helper = (array, target, left, right) => {
  if (left > right) {
    return -1;
  }
  let midPoint = Math.floor((right + left) / 2);
  let match = array[midPoint];
  if (target > match) {
    return helper(array, target, midPoint + 1, right);
  } else if (target < match) {
    return helper(array, target, left, midPoint - 1);
  } else {
    return midPoint;
  }
};

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));
