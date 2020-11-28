// Idempotence
function notGood(n) {
  console.log(n);
}

notGood(1);

//always does the same expected thing - predictable

Math.abs(Math.abs(-5)); //same thing
