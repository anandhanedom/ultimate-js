// HOF
const hof = () => () => 5;
hof()();

const hof1 = (fn) => fn(5);

// console.log(
//   hof1(function a(x) {
//     return x;
//   })
// );

//Closure
// const closure = function () {
//   let count = 0;

//   return function increment() {
//     return ++count;
//   };
// };

// const incrementor = closure();

// console.log(incrementor());
// console.log(incrementor());
// console.log(incrementor());
// console.log(incrementor());

//Pure
const closure = function () {
  let count = 44;

  return function getCount() {
    return count;
  };
};

const count = closure();

console.log(count());
console.log(count());
console.log(count());
console.log(count());
