/*
First Duplicate Value

Given an array ofintegers between 1 and n, inclusive, where n is the length of the array,
write a function that returns the first integer that appears more than once (when the array
is read from left to right).

In other words, out of all the integers that might occur more than once in the input array,
your function should return the one whose first duplicate value has the minimum index.

If no integer appears more than once, your function should return -1

Note you're allowed to mutate the input array.
*/

// time: O(n) | space: O(n)
const firstDuplicateValue = (array) => {
  let hash = {};
  for (let i = 0; i < array.length; i++) {
    if (hash.hasOwnProperty(array[i])) {
      return array[i];
    } else {
      hash[array[i]] = i;
    }
  }
  return -1;
};

// time: O(n) | space: O(1)
const firstDuplicateValueRefactor = (array) => {
  // map the value to indicies
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    // check to see if the index value is already negative
    if (array[Math.abs(value) - 1] < 0) {
      return Math.abs(value);
    }
    array[Math.abs(value) - 1] *= -1;
  }
  return -1;
};
//              V
// [5, 1, 3, 2, 5, 3]
// -5 -1 -3    -5
let array = [2, 1, 5, 3, 3, 2, 4];
console.log(firstDuplicateValueRefactor(array));
