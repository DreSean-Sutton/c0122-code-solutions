fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('fetch failed!', err));

fetch('https://pokeapi.co/api/v2/pokemon/5')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('fetch failed!', err));
