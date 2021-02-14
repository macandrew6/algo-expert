/*
Three Number Sum

Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. The function should find all triplets in the array
that sum up to the target sum and return a two-dimensional array of all these
triplets. The numers in each triplet should be ordered in ascending order, and
the triplets themselves should be ordered in ascending order with respect to the
numbers they hold.

If no three numbers sum up to the target sum, the function should return an empty array.

let array = [12, 3, 1, 2, -6, 5, -8, 6] (no repeats)
let targetSum = 0
result => [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
*/

/*
[12, 3, 1, 2, -6, 5, -8, 6]  targetSum = 0 result => [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
              
            V  
[-8, -6, 1, 2, 3, 5, 6, 12]
                     ^
sub = [-8, 2, 6]
*/

// time = O (n^2) | space = O (n)
const threeNumberSum = (array, targetSum) => {
  let result = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    let current = array[i];
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let currentSum = sum(current, array[left], array[right]);
      if (targetSum > currentSum) {
        left++;
      } else if (targetSum < currentSum) {
        right--;
      } else {
        result.push([current, array[left], array[right]]);
        left++;
        right--;
      }
    }
  }
  return result;
};

const sum = (a, b, c) => a + b + c;

let array = [12, 3, 1, 2, -6, 5, -8, 6];
let targetSum = 0;

console.log(threeNumberSum(array, targetSum));
