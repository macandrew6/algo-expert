/*
MySetTimeout

Write your own setTimeout f(n). Set time out takes in a callback as its first 
argument, and a time in ms as the second argument
*/

const mySetTimeout = (callback, time) => {
  return setTimeout(callback(), time);
};
