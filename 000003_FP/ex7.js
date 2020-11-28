const multiply = (a, b, c) => {
  return a * b * c;
};

//Curried version
const curriedMultiply = (a) => (b) => (c) => a * b * c;

// console.log(curriedMultiply(3)(4)(10));

//Partial application version
const partialMultiplyBy5 = multiply.bind(null, 5);
console.log(partialMultiplyBy5(10, 10));
