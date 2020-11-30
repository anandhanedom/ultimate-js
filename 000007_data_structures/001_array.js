//Store and iterate - best choice
const strings = ['a', 'b', 'c', 'd']; //4*4 = 16 bytes of memory

console.log(strings[2]);

//Push
strings.push('e');
strings.push('f');

//Pop
strings.pop();

//Unshift
strings.unshift('h');

//splice
strings.splice(strings.length / 2, 0, 'alien');

console.log(strings);
