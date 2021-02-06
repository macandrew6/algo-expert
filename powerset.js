/*
Powerset 
Defined as the set of all subsets of another set

Wirte a function that takes in an array of unique integers and returns its powerset.

The powerset P(X) of a set X is the set of all subsets of X. For example, the powerset of 
[1, 2] is [[], [1], [2], [1, 2]]

Example:
let array = [1, 2, 3];
output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
*/

// iterative approach
// O (n * 2^n) time | O (n * 2^n) space
const powerset = (array) => {
  let subsets = [[]];
  for (let ele of array) {
    // for every element in the array
    let len = subsets.length;
    for (let i = 0; i < len; i++) {
      // we are doubling the amount of subsets
      // takes n time to generate and to store each subset
      let currentSubset = subsets[i];
      subsets.push(currentSubset.concat(ele));
    }
  }
  return subsets;
};

// recursive approach
const powersetRecur = (array) => {};
