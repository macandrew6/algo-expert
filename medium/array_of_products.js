/*
Array of Products

Write a function that takes in a non-empty array of integers and returns an array
of the same length, where each element in the output array is equal to the product
of every other number in the input array.

In other words, the value at output[i] is equal to the product of every number
in the inputarray other than input[i]

Note that you're expected to solve this problem without using division.

let array = [5, 1, 4, 2]
result = [8, 40, 10, 20]
       V
[5, 1, 4, 2]
 ^            
result = [8]
*/

const arrayOfProducts = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let left = i - 1;
    let right = i + 1;
    let product = 1;
    while (left >= 0 || right < array.length) {
      if (array[right] && right <= array.length) {
        product *= array[right];
      }
      if (left >= 0 && array[left]) {
        product *= array[left];
      }

      left--;
      right++;
    }
    result.push(product);
    product = 1;
  }
  return result;
};

let array = [5, 1, 4, 0];
console.log(arrayOfProducts(array));
