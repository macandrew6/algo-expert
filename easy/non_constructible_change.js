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

const nonConstructibleChange = (coins) => {
  // sort the list
  coins.sort((a, b) => (a < b ? -1 : 1));
  // init change variable
  let change = coins[0];
  if (coins.length === 1) {
    return 1;
  }
  for (let i = 1; i < coins.length; i++) {
    if (change + 1 < coins[i]) {
      return change + 1;
    } else {
      change += coins[i];
    }
  }
};

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
