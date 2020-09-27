function twoNumberSum(array, targetSum) {
  // brute force method
  // Write your code here.
  // init an empty array
  // iterate through the array with i
  // make sure not to count the first character iterate through the array again with j
  // with and if condition save values if i + j === targetSum
  // make sure there are no duplicates
  // efficient methods
  // iterate once through the array and hold key value pairs
  // if(pairs[targetSum - currentValue] !== null)
  // save [i, pairs[targetSum - currentValue]]
  // else
  // save {i : targetSum - currentValue}
}

let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

twoNumberSum(array, targetSum);

//result = [11, -1] numbers can be in reverse order
