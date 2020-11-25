//Iterator example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    },
  };
}

//Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];

//Init the iterator and pass in the the namesArr
const names = nameIterator(namesArr);

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
