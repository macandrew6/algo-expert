/*
Validate Subsequence

Given two non-empty arrays of integers, write a function that determines whether
the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in
the array but that are in the same order as they appear in the array. For instance,
the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and do so do the
numbers [2, 4]. Note that a single number in an array and the array itself are both 
valid subsequences of the array.

example:
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
returns true;

note:
sequence = [1] => returns true
sequence = [5, 1, 22, 25, 6, -1, 8, 10] returns true
*/

/*
    |
    V
[5, 1, 22, 25, 6, -1, 8, 10]  
               |
               V
sequence = [1, 6, -1, 10]
check our array to see if the first element of our sequence is in the list
if true, then we can move onto the next element of our sequence
if it reaches the end of the list and there are still elements in the sequence return false
if we are at the end of our sequence return true
*/
const isValidSubsequence = (array, sequence) => {
  let sequenceIndex = 0;
  for (let i = 0; i < array.length; i++) {
    let current = array[i]; // 7
    let currentSequence = sequence[sequenceIndex]; // 3
    if (current === currentSequence) {
      sequenceIndex++;
    }
    if (sequenceIndex === sequence.length) {
      return true;
    }
  }
  return false;
};

const isValidSubsequenceRefactor = (array, sequence) => {
  let arrayIdx = 0;
  let sequenceIdx = 0;
  while (arrayIdx < array.length && sequenceIdx < sequence.length) {
    if (array[arrayIdx] === sequence[sequenceIdx]) {
      sequenceIdx++;
    }
    arrayIdx++;
  }
  return sequenceIdx === sequence.length;
};

let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, 25, 10];

console.log(isValidSubsequence(array, sequence));
