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

// time : O(n) | space : O(n) n <= is the number of elements in the input
const arrayOfProducts = (array) => {
  let result = new Array(array.length).fill(1);
  // init left running product
  // init right running product
  let leftProducts = new Array(array.length).fill(1);
  let rightProducts = new Array(array.length).fill(1);
  let leftRunningProduct = 1;
  let rightRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    leftProducts[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }
  for (let j = array.length - 1; j >= 0; j--) {
    rightProducts[j] = rightRunningProduct;
    rightRunningProduct *= array[j];
  }
  return result.map((el, idx) => {
    console.log(leftProducts[idx], rightProducts[idx]);
    return leftProducts[idx] * rightProducts[idx];
  });
};

// time : O(n) | space : O(n)
const arrayOfProductsRefactor = (array) => {
  let result = new Array(array.length).fill(1);
  let leftRunningProduct = 1;
  let rightRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    result[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }
  for (let j = array.length - 1; j >= 0; j--) {
    result[j] *= rightRunningProduct;
    rightRunningProduct *= array[j];
  }
};

let array = [5, 1, 4, 2];
console.log(arrayOfProducts(array));
