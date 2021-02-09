/*
Product Sum

Write a function that take in a "special" array and returns its product sum.

A "special" array is a non-empty array that contains either integers or other
special arrays. the product sum of a "special" array is the sum of its elements
where "special" arrays inside it are summed themselves and them multiplied by 
their level of depth.

The depth of a "special" array is how far nested it is. For instance, the depth
of [] is 1; the depth of the inner array in [[]] is 2; the depth of the inner most
array in [[[]]] is 3.

Therefore, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is 
x + 2 * (y + z); the product sum of [x, [y, [z]]] is x + 2 * (y + 3z)

example:
array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]] (22 - 10) = 12
outputs => 12
*/

// time O (n) | space O (D) => where D is the depth of the subarrays
const productSum = (array, multiplier = 1) => {
  // initialize a multiplier variable
  // initialize a sum variable
  const sum = 0;
  // for each call stack that we enter, we will increase the multiplier
  array.forEach((el) => {
    if (Array.isArray(el)) {
      sum += productSum(el, multiplier + 1);
    } else {
      sum += el;
    }
  });
  return sum;
};

console.log(productSum);
