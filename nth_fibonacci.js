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

const getNthFib = (n) => {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
};
/*
fib(n) = fib(n - 1) + fib(n - 2) for n > 2
getNthFib(6)
  getNthFib(5) + getNthFib(4)
    getNthFib(4) return + getNthFib(3) return => 2
      getNthFib(3) return => 2 + getNthFib(2) return => 1
        getNthFib(2) return => 1 + getNthFib(1) return => 0
          getNthFib(1) return => 0 + getNthFib(0) return => 0
*/
