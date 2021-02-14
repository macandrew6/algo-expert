/*
Smallest Difference

Write a function that takes in two non-empty arrays of integers, finds the pair of
numbers (one from each array) whose absolute difference is closest to zero, and 
returns an array containing these two numbers, with the number from the first
array in the first position.

Note that the absolute difference of two integers is the distance between them on 
the real number line. For example, the absolute difference of -5 and 5 is 10, the 
absolute difference of -4 and -4 is 1.

You can assume that there will only be one pair of numbers with the smallest difference.

arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]
result = [28, 26]
*/

/*
(both sorted)
            V
[10, 20, 28] = x
[15, 17, 26, 134, 135] = y
              ^
init smallestDifference = 5 -> 3 -> 2
currentDifference = Math.abs(x[0] - y[0]) = 2
currentDiffernece < smallestDifference
x[i] < y[i] move x pointer
x[i] > y[i] move y pointer
*/

// time: O (n) => space: O (n)
const smallestDifference = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  // building this hash is O n space
  let hash = {};
  let smallestDifference = Math.abs(arrayOne[0] - arrayTwo[0]);
  let arrayOneIdx = 0;
  let arrayTwoIdx = 0;
  while (arrayOneIdx < arrayOne.length && arrayTwoIdx < arrayTwo.length) {
    let currentDifference = Math.abs(
      arrayOne[arrayOneIdx] - arrayTwo[arrayTwoIdx]
    );
    if (currentDifference < smallestDifference) {
      smallestDifference = currentDifference;
      hash[smallestDifference] = [arrayOne[arrayOneIdx], arrayTwo[arrayTwoIdx]];
    }
    if (arrayOne[arrayOneIdx] < arrayTwo[arrayTwoIdx]) {
      arrayOneIdx++;
    } else if (arrayOne[arrayOneIdx] > arrayTwo[arrayTwoIdx]) {
      arrayTwoIdx++;
    } else {
      return [arrayOne[arrayOneIdx], arrayTwo[arrayTwoIdx]];
    }
  }
  let smallestKey = Infinity;
  // for..in loop is an O(n) operation
  for (let key in hash) {
    if (key < smallestKey) {
      smallestKey = Number(key);
    }
  }
  return hash[smallestKey];
};

// better time and space complexity
// time: O (n(log(n)) + m(log(m))) => where n is the length of array one and m is the length of array two
// space: O (1)
const smallestDifferenceRefactor = (arrayOne, arrayTwo) => {
  // O (n(log(n)) operation
  arrayOne.sort((a, b) => a - b);
  // O (m(log(m)) operation
  arrayTwo.sort((a, b) => a - b);

  let smallestDiff = Math.abs(arrayOne[0] - arrayTwo[0]);
  let bestPair = [];
  let arrOneIdx = 0;
  let arrTwoIdx = 0;

  while (arrOneIdx < arrayOne.length && arrTwoIdx < arrayTwo.length) {
    let currentDiff = Math.abs(arrayOne[arrOneIdx] - arrayTwo[arrTwoIdx]);
    if (currentDiff < smallestDiff) {
      smallestDiff = currentDiff;
      bestPair = [arrayOne[arrOneIdx], arrayTwo[arrTwoIdx]];
    }
    if (arrayOne[arrOneIdx] < arrayTwo[arrTwoIdx]) {
      arrOneIdx++;
    } else if (arrayOne[arrOneIdx] > arrayTwo[arrTwoIdx]) {
      arrTwoIdx++;
    } else {
      return [arrayOne[arrOneIdx], arrayTwo[arrTwoIdx]];
    }
  }
  return bestPair;
};

let arrayOne = [-1, 5, 10, 20, 28, 3];
let arrayTwo = [26, 134, 135, 15, 17];

console.log(smallestDifference(arrayOne, arrayTwo));
