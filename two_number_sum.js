function twoNumberSum(array, targetSum) {
  // brute force method
  // Write your code here.
  // init an empty array
  // iterate through the array with i
  // make sure not to count the first character iterate through the array again with j
  // with and if condition save values if i + j === targetSum
  // make sure there are no duplicates
  //  efficient methods
  let prevValues = {};
  // iterate once through the array and hold key value pairs
  array.forEach((curr, i) => {
    // if(pairs[targetSum - currentValue] !== null)
    let neededVal = targetSum - curr;
    let secondVal = prevValues[neededVal];
    if (secondVal !== null) {
      // save [i, pairs[targetSum - currentValue]]
      return [curr, secondVal];
    } else {
      // save {i : targetSum - currentValue}
      prevValues[secondVal] = curr;
    }
  });
}

let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

console.log(twoNumberSum(array, targetSum));

//result = [11, -1] numbers can be in reverse order
