/*
MyThrottle

write your own throttle f(n). Throttle executes your call back and stops 
further execution until the end of the duration of the time input.
*/

Function.prototype.myThrottle = (interval) => {
  let tooSoon = false;
  return (...args) => {
    if (!tooSoon) {
      tooSoon = true;
      setTimeout(() => (tooSoon = false), interval);
      this(...args);
    }
  };
};

let fn = (a, b) => a + b;
console.log(fn.myThrottle(50000));
console.log(fn(1, 2));
console.log(fn(1, 2));
