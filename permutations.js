/*
Permutations

Write a function that takes in an array of unique integers and returns an 
array of all permutations of those integers in no particular order.

If the input array is empty, the function should return an empty array

sample:
array = [1, 2, 3]
[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
*/

function getPermutations(array) {
  // Write your code here.
}

function helper(array, perm, perms) {
  let newArr;
  if (array.length === 0) {
    perms.push(perm);
  } else {
    for (let i = 0; i < array.length; i++) {
      newArr = removeNumFrom(array);
    }
  }
}

function removeNumFrom(arr) {
  
}