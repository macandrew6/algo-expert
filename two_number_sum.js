// solution to optimize time
function twoNumberSum(array, targetSum) {
  //  efficient methods
  let prevValues = {};
  let answer = [];
  // iterate once through the array and hold key value pairs
  array.forEach((curr) => {
    let neededVal = targetSum - curr;
    let secondVal = prevValues[neededVal];
    if (secondVal !== undefined) {
      answer = [curr, neededVal];
    } else {
      prevValues[curr] = true;
    }
  });
  return answer;
}

// alternative solution to optimize space
// function twoNumberSum(array, targetSum) {
//   array.sort((a, b) => a - b);
//   console.log(array.sort((a, b) => a - b));
//   let left = 0;
//   let right = array.length - 1;
//   while (left < right) {
//     currentSum = array[left] + array[right];
//     if (currentSum === targetSum) {
//       return [array[left], array[right]];
//     } else if (currentSum < targetSum) {
//       left += 1;
//     } else if (currentSum > targetSum) {
//       right -= 1;
//     }
//   }
//   return [];
// }

let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

console.log(twoNumberSum(array, targetSum));

//result = [11, -1] numbers can be in reverse order
