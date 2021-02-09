/*
Find Three LargestNumbers

Write a function that takes in an array of at least three integers and, 
without sorting the input array, returns the sorted array of the three 
largest integers in the input array

example:
array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
output => [18, 141, 541]
*/

// time O (n) | space O (1)
const findThreeLargestNumbers = (array) => {
  //init result = [null, null, null];
  //keep track and store the three largest numbers
  //update backwards from the result array
  const threeLargest = [null, null, null];
  array.forEach((num) => {
    updateLargest(threeLargest, num);
  });
  return threeLargest;
};

const updateLargest = (threeLargest, num) => {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftAndUpdate(); // todo
  }
};

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);
