// // //Factory functions
// // const elfFunctions = {
// //   attack() {
// //     return 'attack with ' + this.weapon;
// //   },
// // };

// // function createElf(name, weapon) {
// //   const newElf = Object.create(elfFunctions);

// //   newElf.name = name;
// //   newElf.weapon = weapon;

// //   return newElf;
// // }

// // const peter = createElf('Peter', 'stones');
// // const sam = createElf('Sam', 'fire');

// // console.log(peter.attack());
// // console.log(sam.attack());

// // // Array.prototype.map = function () {
// // //   let arr = [];
// // //   for (var i = 0; i < this.length; i++) {
// // //     arr.push(this[i] + '!');
// // //   }

// // //   return arr;
// // // };

// // // console.log([1, 2, 3].map());

// function createElf(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
// }

// const peter = new createElf('Peter', 'stones');
// const sam = new createElf('Sam', 'fire');

// createElf.prototype.attack = function () {
//   return 'attack with ' + this.weapon;
// };

// createElf.prototype.build = function () {
//   building = () => {
//     console.log(this);
//     return this.name + ' builds a home';
//   };

//   return building;
// };

// // console.log(peter.attack());
// // console.log(sam.attack());

// console.log(sam.build()());
// console.log(peter.build()());

// const obj = {
//   name: 'Hitler',
//   speak() {
//     return () => {
//       console.log(this);
//       return `My name is ${this.name}`;
//     };
//   },
// };

// const sp = obj.speak();

// console.log(sp());

// let i = 1;

// if (true) {
//   let i = 2;
//   console.log('Inner i:', i);
// }

// console.log(('Outer i', i));
