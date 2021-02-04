/*
Permutations

Write a function that takes in an array of unique integers and returns an 
array of all permutations of those integers in no particular order.

If the input array is empty, the function should return an empty array

sample:
array = [1, 2, 3]
[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
*/

// time O (n! * n^2) | space O(n! * n)
function getPermutations(array) {
  // Write your code here.
}

// first solution

// function helper(array, perm, perms) {
//   let newArr;
//   let newPerm;
//   if (array.length === 0) {
//     perms.push(perm);
//   } else {
//     for (let i = 0; i < array.length; i++) {
//       let num = array[i];
//       newArr = removeNumFrom(array);
//       newPerm = perm + num;
//       helper(newArr, newPerm, perms)
//     }
//   }
// }

// function removeNumFrom(arr) {
//   arr.shift()
//   return arr;
// }

// second solution

/*
[1, 2, 3] -> [1, 3, 2] -> [1, 2, 3]* -> [2, 1, 3] -> [2, 3, 1] -> [2, 1, 3] -> [1, 2, 3]* ->
[3, 2, 1] -> [3, 1, 2] -> [1, 2, 3]*
swapping strategy
put a pointer at the first number
put a second pointer at the second number
put a third pointer at the third number

*/