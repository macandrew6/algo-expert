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

const isMonotonic = (array) => {
  let direction = 0;
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let next = array[i + 1];
  }
};

let array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
console.log(isMonotonic(array));
