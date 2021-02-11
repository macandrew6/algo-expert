/*
Deep Dup
Write a deep dup function that takes in a multidimensional array as input, and
makes a copy of the whole array including all the subarrays within the array.

example:
array = [1, 2, [3, 4, [5, 6]], 7]
output should be the exact same
*/

const deepDup = (array) => {
  // initiate dup array
  const dup = [];
  // iterate through each ele in arr
  array.forEach((el) => {
    console.log(dup);
    // check if the current ele is an Array
    if (Array.isArray(el)) {
      // if it is run deepDup on the subArray and push the result into our dup array
      dup.push(deepDup(el));
    } else if (typeof el === 'object') {
      copy.push(deepCopyObject(el));
    } else {
      // else we'll push the elements into our dup array
      dup.push(el);
    }
  });
  return dup;
  // return the dup array
};

const deepCopyObject = (obj) => {
  const objDup = {};
  for (let [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      objDup[key] = deepDup(value);
    } else if (typeof value === 'object') {
      objDup[key] = deepCopyObject(value);
    } else {
      objDup[key] = value;
    }
  }
  return objDup;
};

let array = [1, 2, [3, 4, [5, 6]], 7];
console.log(deepDup(array));
