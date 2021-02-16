/*
Monotonic Array

Write a function that takes in an array of integers and returns a boolean 
representing whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are entirely
non-increasing or entirely non-decreasing

Non-increasing elements aren't necessarily exclusively decreasing; they simply
don'tincrease. Similaly, non-decreasing elements aren't necessarily exclusively
increasing; they simply don't decrease.

Note that empty arrays and arrays of one element are monotonic.

example:
array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
                 V   V
[-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
direction = 1, 0, -1
currentDirection = el
next = el @ i + 1
*/

const isMonotonicRefactor = (array) => {
  if (array.length <= 2) {
    return true;
  }

  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    if (breaksDirection(direction, array[i - 1], array[i])) {
      return false;
    }
  }
  return true;
};

const breaksDirection = (direction, previousInt, currentInt) => {
  let difference = currentInt - previousInt;
  if (direction > 0) {
    return difference < 0;
  }
  return difference > 0;
};

//       P    C
// [-1, -5, -10, -1100, 1, -1101, -1102, -9001]
// curr = -10
// prev = -5
// time : O(n) | space O(1)
const isMonotonic = (array) => {
  let isNonDecreasing = true;
  let isNonIncreasing = true;

  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    let prev = array[i - 1];
    if (curr < prev) {
      isNonDecreasing = false;
    }
    if (curr > prev) {
      isNonIncreasing = false;
    }
  }

  return isNonDecreasing || isNonIncreasing;
};

let array = [-1, -5, -10, -1100, -100, -1101, -1102, -9001];
console.log(isMonotonic(array));
