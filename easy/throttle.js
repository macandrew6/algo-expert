/*
MyThrottle

write your own throttle f(n). Throttle executes your call back and stops 
further execution until the end of the duration of the time input.
*/

Function.prototype.myThrottle = (interval) => {
  let flag = false;
  // the function only get invoded if tooSoon is false
  // it sets tooSoon to true, and uses setTimeout to set it back to
  // false after interval ms
  // any invocation within this interval will skip the if statement
  // and do nothing
  return (...arrs) => {
    if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
      }, interval);
      this(...arrs);
    }
  };
};

let fn = (a, b) => a + b;
console.log(fn.myThrottle(50000));
console.log(fn(1, 2));
console.log(fn(1, 2));
