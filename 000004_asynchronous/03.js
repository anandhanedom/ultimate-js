//Asynchronous code
// Parallel
// Sequential
// Race

const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

// console.log(a(), b(), c());

//PARALLEL
const parallel = async () => {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);

  return `Parallel is done: ${output1} ${output2} ${output3}`;
};

// parallel().then(console.log);

//RACE
const race = async () => {
  const promises = [a(), b(), c()];
  const output = await Promise.race(promises);

  return `Race is done: ${output}`;
};

// race().then(console.log);

//SEQUENCE
const sequence = async () => {
  const op1 = await a();
  const op2 = await b();
  const op3 = await c();

  return `Sequence is done: ${op1} ${op2} ${op3}`;
};

sequence().then(console.log);
parallel().then(console.log);
race().then(console.log);
