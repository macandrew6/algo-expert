/*
Longest Peak

Write a function that takes in an array of integers and returns the length of the 
longest peak in the array.

A peak is defined as adjacent integers in the array that are strictly increasing
until they reach a tip (the highest value in the peak), at which point they become 
strictly decreasing. At least three integers are required to form a peak.

For example, the integers 1, 4, 10, 2 form a peak, but the integers
4, 0, 10 don't and neither do the integers 1, 2, 2, 0. Similarly, the integers
1, 2, 3 don't form a peak because there aren't any strictly decreasing integers after the 3.

array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
                     ^p     ^p
result = 6 =>  0 -> 10 -> 6 -> 5 -> -1 -> -3
*/

// time O (n) | space O (n)
const longestPeak = (array) => {
  // init 3 pointers startPeak, peak, endPeak
  let currentLongestPeak = 0;
  for (let i = 1; i < array.length - 1; i++) {
    let startPeak = array[i - 1];
    let peak = array[i];
    let endPeak = array[i + 1];
    if (startPeak < peak && endPeak < peak) {
      let peakLength = findPeakLength(array, i - 1, i + 1);
      currentLongestPeak = Math.max(peakLength, currentLongestPeak);
    }
  }
  return currentLongestPeak;
};

const findPeakLength = (array, leftIdx, rightIdx) => {
  let count = 3;
  while (leftIdx + 1 >= 0 && array[leftIdx - 1] < array[leftIdx]) {
    count++;
    leftIdx--;
  }
  while (
    rightIdx <= array.length - 1 &&
    array[rightIdx] > array[rightIdx + 1]
  ) {
    count++;
    rightIdx++;
  }
  // console.log(count);
  return count;
};

let array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];

console.log(longestPeak(array));
