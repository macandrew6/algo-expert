/*
Number of Ways to Traverse Graph

You're given two positive integers representing the width and height of a grid-shaped, rectagular graph. Write a function that returns
the number of ways to reach the bottom right corner of the graph when starting at the top left corner. Each move you take must either
go down or right. In other words, you can never move up or left in the graph.

For example, given the graph illustrated below, wih width = 2 and height = 3, there are three ways to reach the bottom right
corner when starting at the top left corner:

 _ _
|_|_|
|_|_|
|_|_|

1. down, down, right
2. right, down, down
3. down, right, down

note: you may assume that width * height >= 2. In other words, the graph will never be a 1x1 grid.

example:
input:
width = 4
height = 3

 _ _ _ _
|_|_|_|_|
|_|_|_|_|
|_|_|_|_|

output:
10
*/

// recursive solution (brute force - may fail large enough test cases)
// time: O(2^(n + m))
// space: O(2^(n + m))
const numberOfWaysToTraverseGraphRecur = (width, height) => {
  // base case is if our width or our height === 1
  // width = 3 height = 2
  if (width === 1 || height === 1) return 1;

  return (
    numberOfWaysToTraverseGraphRecur(width - 1, height) +
    numberOfWaysToTraverseGraphRecur(width, height - 1)
  );
};

// dynamic programming solution
// time: O(n * m)
// space: O(n * m)
const numberOfWaysToTraverseGraphDynamic = (width, height) => {
  // store the values in a 2d array
  // two pointers
  let numberOfWays = [];
  for (let i = 0; i <= height; i++) {
    let row = [];
    for (let j = 0; j <= width; j++) {
      row.push(0);
    }
    numberOfWays.push(row);
  }
  for (let widthIdx = 1; widthIdx <= width; widthIdx++) {
    for (let heightIdx = 1; heightIdx <= height; heightIdx++) {
      if (widthIdx === 1 || heightIdx === 1) {
        numberOfWays[heightIdx][widthIdx] = 1;
      } else {
        let waysLeft = numberOfWays[heightIdx][widthIdx - 1];
        let waysUp = numberOfWays[heightIdx - 1][widthIdx];
        numberOfWays[heightIdx][widthIdx] = waysLeft + waysUp;
      }
    }
  }

  return numberOfWays[height][width];
};

// math trick
// time: O(n + m)
// space: O(1)
const numberOfWaysToTraverseGraphMath = (width, height) => {
  // right = 3 moves to reach the end
  let x = width - 1;
  // down = 2 moves to reach the end
  let y = height - 1;
  // (right + down)! / right! * down! math formula
  let numerator = factorial(x + y);
  let denominator = factorial(x) * factorial(y);
  return numerator / denominator;
};

const factorial = (num) => {
  result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};
let width = 4;
let height = 3;
console.log(numberOfWaysToTraverseGraphMath(width, height));
