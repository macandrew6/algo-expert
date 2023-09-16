/*
Number of Ways to Make Change

Given an array of distinct positive integers representing coin denominations and a single non-
negative integer n representing a target amount of money, write a functin that returns the number
of ways to make change for that target amount using the given coin denominations.

Note that an unlimited amount of coins is at your disposal.

example:
input:
n = 6
denoms = [1, 5]

output:
2 // 1x1 + 1x5 and 6x1
*/

/*
demon = 5
amount = 6
[1, 1, 1, 1, 1, 2, 2]   
    1, 2, 3, 4, 5, 6

*/
// time: O(n*d) | space: O(n)
const numberOfWaysToMakeChange = (n, denoms) => {
  let ways = new Array(n + 1).fill(0);
  ways[0] = 1;
  denoms.forEach((denom) => {
    for (let amount = 1; amount <= n; amount++) {
      if (denom <= amount) {
        ways[amount] += ways[amount - denom];
      }
    }
  });
  return ways[ways.length - 1];
};

let n = 6;
let denoms = [1, 5];
console.log(numberOfWaysToMakeChange(n, denoms));
