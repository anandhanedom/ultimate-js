// let view;

// function initialize() {
//   let i = 0;
//   return () => {
//     if (i > 0) {
//       return;
//     } else {
//       view = 'Hills';
//       i++;
//       console.log('view has been set!');
//     }
//   };
// }

// const callit = initialize();
// callit();

// const array = [1, 2, 3, 4];

// const array = [1, 2, 3, 4];
// for (let i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log('I am at index ' + i);
//   }, 3000);
// }

// Date.prototype.lastYear = function () {
//   return this.getFullYear() - 1;
// };

// const prevYear = new Date('1900-10-10').lastYear();

// console.log(prevYear);

Array.prototype.map = function () {
  let arr = [];
  const burger = '🍔';

  for (var i = 0; i < this.length; i++) {
    arr.push(this[i] + burger);
  }

  return arr;
};

console.log([1, 2, 3].map());
