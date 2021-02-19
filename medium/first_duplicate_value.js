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
  let hash = { [array[0]]: 0 };
  for (let i = 1; i < array.length; i++) {
    if (hash.hasOwnProperty(array[i])) {
      return array[i];
    } else {
      hash[array[i]] = i;
    }
  }
  return -1;
};
//                    V
let array = [2, 1, 5, 2, 3, 3, 4];
console.log(firstDuplicateValue(array));
