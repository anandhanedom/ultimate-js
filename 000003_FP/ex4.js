//  Immutability
const obj = { name: 'Andrei' };

function clone(obj) {
  return { ...obj }; //this is pure
}

// obj.name = 'Kane'; //mutation

function updateName(obj) {
  const newObj = { ...obj };

  newObj.name = 'Harry Kane';

  return newObj;
}

const updatedObj = updateName(obj);

console.log(obj);
console.log(updatedObj);
