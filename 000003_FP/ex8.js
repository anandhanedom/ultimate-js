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
let cache = {};

function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('long time');
    cache[n] = 80 + n;
    return cache[n];
  }
}

console.log(memoizedAddTo80(10));
console.log(memoizedAddTo80(10));
