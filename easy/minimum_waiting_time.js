/*
Minimum Waiting Time

You're given a non-empty array of positive integers representing the amounts of time
that specific queries take to execute. Only one query can be executed at a time, but
the queries can be executed in any order.

A query's waiting time is defined as the amount of time that it must wait before its
execution starts. In other words, if a query is executed second, then its waiting time 
time is the duration of the first query; if a query is executed third, then its waiting
time is the sum of the durations of the first two queries.

Write a function that returns the minimum amount of total waiting time for all of the
queries. For example, if you're given the queries of durations [1, 4, 5], then the total
waiting time if the queries were executed in the order of [5, 1, 4] would be 
(0) + (5) + (5 + 1) = 11. The first query of duration 5 would be executed immediately, 
so its waiting time would be 0, the second query of duration 1 would have to wait 5
seconds (the duration of the first query) to be executed, and the last query would have 
to wait the duration of the first two queries before being executed.

note: you are allowed to mutate the input array

exmaple:
queries = [3, 2, 1, 2, 6] => [6, 1, 2, 2, 3]
                              (0) + (6) + (7) + (9) + (11)
output = 17
*/

// time = O(n(log(n))) | space = O (1)
const minimumWaitingTime = (queries) => {
  // Write your code here.
  let minWaitTime = 0; // 4 + 6 + 4 + 3
  // weird stuff man.. so queries.sort() doesn't work in all cases because
  // it defaults to lexographical ordering which means that the sort converts
  // the elements into strings first and orders according to their value on the lex chart
  queries.sort((a, b) => (a < b ? -1 : 1));
  for (let i = 0; i < queries.length; i++) {
    let queriesLeft = queries.length - (i + 1); // 5 - 5 = 0
    minWaitTime += queries[i] * queriesLeft; // 6 * 0 = 0
  }
  return minWaitTime;
};

let queries = [3, 2, 1, 2, 6];
console.log(minimumWaitingTime(queries));
