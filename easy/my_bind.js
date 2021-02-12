/*
My Bind

Write your own my bind f(n). My bind is a function methode that binds the "this" 
keyword to the provided value. Doesn't invoke.
*/

const myBind = (ctx) => {
  return () => this.apply(ctx);
};

// with args
const myBindWithArgs = (ctx, ...bindArgs) => {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  meow() {
    console.log(`${this.name} says meow!`);
  }
}

const curie = new Cat('Curie');
console.log(setTimeout(curie.meow.myBind(curie), 1000));
