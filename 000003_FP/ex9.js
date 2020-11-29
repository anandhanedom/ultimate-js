//Compose
const makePositive = (n) => Math.abs(n);
const mulThree = (n) => n * 3;

const compose = (f, g) => (n) => f(g(n));

const mulAndAbsThree = compose(mulThree, makePositive);

console.log(mulAndAbsThree(-100));

//Pipe
const pipe = (f, g) => (n) => g(f(n));

// fn1(fn2(fn3(50)))
// compose(fn1, fn2, fn3)(50);
// pipe(fn3, fn2, fn1)(50);
