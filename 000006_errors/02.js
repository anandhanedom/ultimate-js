class AuthError extends Error {
  constructor(msg) {
    super(msg);

    this.name = 'AuthError';
    this.fav = 'Lemon';
  }
}

class DatabaseError extends Error {
  constructor(msg) {
    super(msg);

    this.name = 'DatabaseError';
    this.fav = 'Lemon';
  }
}

class PermissionError extends Error {
  constructor(msg) {
    super(msg);

    this.name = 'PermissionError';
    this.fav = 'Lemon';
  }
}

const a = new AuthError('Oops!');

console.log(a.message);
console.log(a.name);
