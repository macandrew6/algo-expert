/*
Move Element To End

You're given an array of integers and an integer. Write a function that moves all instances of 
that integer in the array to the end of the array and returns the array

The function should perorm this in place (i.e., it should mutate the input array) and doesn't 
need to maintain the order of the other integers.

example:
array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2
*/

/*
[4, 3, 2, 1, 2]
       V  
[1, 4, 3, 2, 2] target = 2
          ^
frontPointer
backPointer
while frontPointer < backPointer
array[frontPointer] === target
  swap
  frontPointer++
  backPointer--
*/

// time O(n(log(n))) | space O(1)
const moveElementToEnd = (array, toMove) => {
  array.sort((a, b) => a - b);
  let front = 0;
  let back = array.length - 1;
  while (front < back) {
    if (array[front] === toMove) {
      swap(array, front, back);
      front++;
      back--;
    } else {
      front++;
    }
  }
  return array;
};

const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};

let array = [2, 2, 2, 1, 2];
let toMove = 2;

console.log(moveElementToEnd(array, toMove));
