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
[26, 134, 135]
[10, 20, 28, 300]
  ^
init smallestDifference to Infinity;

*/
