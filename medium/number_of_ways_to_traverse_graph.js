/*
Number of Ways to Traverse Graph

You're given two positive integers representing the width and height of a grid-shaped, rectagular graph. Write a function that returns
the number of ways to reach the bottom right corner of the graph when starting at the top left corner. Each move you take must either
go down or right. In other words, you can never move up or left in the graph.

Gor example, given the graph illustrated below, wih width = 2 and height = 3, there are three ways to reach the bottom right
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
// space:
const numberOfWaysToTraverseGraphRecur = (width, height) => {
  // base case is if our width or our height === 1
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
};

// math trick
// time: O(n + m)
// space: O(1)
const numberOfWaysToTraverseGraphMath = (width, height) => {
  // right = 3 moves to reach the end
  // down = 2 moves to reach the end
  // (right + down)! / right! * down! math formula
};

let width = 4;
let height = 3;
console.log(numberOfWaysToTraverseGraph(width, height));
