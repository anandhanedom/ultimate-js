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

const array = [1, 2, 3, 4];

const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log('I am at index ' + i);
  }, 3000);
}