const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Stuff worked');
  } else {
    reject('Error, it broke');
  }
});

// promise
//   .then((res) => console.log(res + '!'))
//   .then((res1) => {
//     console.log(res1 + '?');
//   })
//   .then((res2) => console.log(res2 + '!'))
//   .catch((err) => console.log(err));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'hii');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'pookie');
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'is it me you are looking for?');
});

Promise.all([promise, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
