/*
MySetTimeout

Write your own setTimeout f(n). Set time out takes in a callback as its first 
argument, and a time in ms as the second argument
*/

const mySetTimeout = (callback, time) => {
  let currentTime = new Date();
  let futureTime = new Date();
  futureTime.setMilliseconds(currentTime.getMilliseconds() + time);
  while (currentTime.getTime() !== futureTime.getTime()) {
    currentTime = new Date();
  }
  return callback;
};

let fn = (a, b) => a + b;
console.log(mySetTimeout(fn(5, 3), 5000));
