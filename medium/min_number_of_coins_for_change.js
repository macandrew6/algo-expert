/*
Min Number of Coins for Change

Goven an array of positive inteers representing coin denominations and a single non-negative
integer n representing a target amount of money, write a function that returns the smallest
number of coins needed to make change for (to sum up to) that target amount using the given coin denominations.

Note that you have access to an unlimited amount of coins. In other words, if the denominations are
[1, 5, 10], you have access to an unlimited amount of 1s, 5s, 10s.

If it's impossible to make change for the target amount, return -1.

example:
input:
n = 7
denoms = [1, 5, 10]

output:
3 // 2x1 + 1x5
*/

/*
n = 6
denoms = [1, 2, 4] => 2 // 2 + 4 = 6
             * 
[0, 1, 1, 2, 1, 2, 2]
 0  1  2  3  4  5  6
 5 - 4 = 1
*/

// time: O(n*d) where d is the denominations | space: O(n)
const minNumberOfCoinsForChange = (n, denoms) => {
  // if denom <= amount
  // update nums[amount] = min(nums[amount], 1 + nums[amount - denom])
  let nums = new Array(n + 1).fill(0);
  denoms.forEach((denom) => {
    for (let amount = 1; amount <= nums; amount++) {
      if (denom <= amount) {
        nums[amount] = Math.min(nums[amount], 1 + nums[amount - denom]);
      }
    }
  });
  return nums[nums.length - 1];
};

let n = 7;
let denoms = [1, 5, 10];
console.log(minNumberOfCoinsForChange(n, denoms));
