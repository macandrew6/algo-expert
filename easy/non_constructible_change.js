/*
Non-Constructible Change

Given an array of positive integers representing the values of coins in your possession, 
write a function that returns the minimum amount of change (the minimum sum of money) 
that you cannot create. The given coins can have any positive integer value and aren't
necessarily unique (i.e., you can have multiple coins of the same value)

For example, if you're given coins = [1, 2, 5], the minimum amount of change that you 
can't creatre is 4. If you're given no coins, the minimum amount of change that you can't
create is 1.

example:
change
coins = [5, 7, 1, 1, 2, 3, 22]
        [1, 1, 2, 3, 5, 7, 22]
            ^

output = 20
*/

// time O (n (log(n))) | space O(1)
const nonConstructibleChange = (coins) => {
  // sort the list
  coins.sort((a, b) => (a < b ? -1 : 1)); // n
  let change = 0;
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    if (change + 1 < coin) {
      return change + 1;
    } else {
      change += coin;
    }
  }
  return change + 1;
};

// genius test case
let arr1 = [1, 1, 2]; // <- edge case
// change = 2 value = 2 i = 1
// is value > change + 1
let arr2 = [1, 1, 3];
let arr3 = [5, 7, 1, 1, 2, 3, 22];
let arr4 = [1, 1, 1, 1, 1];

console.log(nonConstructibleChange([88]));
