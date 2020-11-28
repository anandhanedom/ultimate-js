//Memoization
function addTo80(n) {
  console.log('Long time');
  return n + 80;
}

// console.log(addTo80(5));
// console.log(addTo80(5));
// console.log(addTo80(5));

//Ran the calculation thrice

//Improving by caching and memoization
function memoizedAddTo80() {
  let cache = {};

  return function (n) {
    if (n in cache) {
      console.log('Cached value');
      return cache[n];
    } else {
      console.log('long time');
      cache[n] = 80 + n;
      return cache[n];
    }
  };
}

const memo = memoizedAddTo80();

console.log(memo(8));
console.log(memo(8));
