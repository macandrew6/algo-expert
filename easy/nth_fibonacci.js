/*
Nth Fibonacci

The Fibonacci sequence is defined as follows: the first number of the
sequence is 0, the second number is 1, and the nth number is the sum
of the (n-1)th and (n-2)th numbers. Write a function that takes in an
integer n and returns the nth fibonacci number.

Important note: the Fibonacci sequence is often define with its first
two numbers as F0 = 0 and F1 = 1. For the purpose of this question, the 
first Fibonacci number is F0; therefore, genNthFib(1) is equal to f0, 
getNthFib(2) is equal to F1, etc...

example:
n = 2;
1 => 0, 1

n = 6;
5 => 0, 1, 1, 2, 3, 5
*/

/*
fib(n) = fib(n - 1) + fib(n - 2) for n > 2
getNthFib(4)
  getNthFib(3) => returns 1 + getNthFib(2) return => 1   1 + 1 = 2
   returns |
           V
    getNthFib(2) return => 1 + getNthFib(1) returns => 0
*/
// time O (2^n) | space O (n)
const getNthFib = (n) => {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
};

// time 0 (n) | space O (n)
const getNthFibMem = (n, memoize = { 1: 0, 2: 1 }) => {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = getNthFibMem(n - 1, memoize) + getNthFibMem(n - 2, memoize);
    console.log(memoize);
    return memoize[n];
  }
  // if n is in memoize
  // return memoize[n]
  // else
  // memoize[n] = fib(n - 1) + fib(n - 2)
  // return memoize[n]
};

// time O (n) | space O (1)
const getNthFibIter = (n) => {
  // init start = [0, 1]
  let lastTwo = [0, 1];
  // while counter isn't 0
  counter = 3;
  while (counter <= n) {
    let nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter += 1;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
  // next = start[i] + start[i + 1]
  // replace start[i] with start[i + 1]
  // start[i + 1] = next;
};

console.log(getNthFibIter(2));
