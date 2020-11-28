// currying
const multiply = (a, b) => {
  return a * b;
};

// console.log(multiply(3, 4));

const curriedMultiply = (a) => (b) => {
  return a * b; //access to a by closure
};

const curriedFive = curriedMultiply(5);

//10 years

console.log(curriedFive(3));
console.log(curriedFive(10));
console.log(curriedFive(11));
