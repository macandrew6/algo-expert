/*
 Given an input array, return a new array that maps each initial value with its corresponding ordered index (ascending)
*/

function transform(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const hash = {};
  const result = [];

  // [1, 2, 3, 5, 5]

  sorted.forEach((el, i) => {
    if (hash[el]) {
      hash[el].push(i);
    } else {
      hash[el] = [i];
    }
  });

  // hash = {1: [0], 2: [1], 3: [2], 5: [3, 4]}

  arr.forEach((el) => {
    result.push(hash[el].pop());
  });

  return result;
}

/* [5, 10, 15, 20, 35] */

console.log(transform([20, 10, 15, 35, 5])); // (Array)  [3, 1, 2, 4, 0]
console.log(transform([1, 2, 3, 5, 4])); // (Array)  [0, 1, 2, 4, 3]
console.log(transform([1, 2, 3, 5, 5])); // edgecase lives here
