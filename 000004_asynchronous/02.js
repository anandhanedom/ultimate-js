const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

const getData = async (urls) => {
  const promiseArrays = urls.map((url) => fetch(url));

  for await (let res of promiseArrays) {
    const data = await res.json();
    console.log(data);
  }
};

getData(urls);
