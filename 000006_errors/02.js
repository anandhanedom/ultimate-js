class authError extends Error {
  constructor(msg) {
    super(msg);

    this.name = 'authError';
    this.fav = 'Lemon';
  }
}

const a = new authError('Oops!');

console.log(a.message);
console.log(a.name);
