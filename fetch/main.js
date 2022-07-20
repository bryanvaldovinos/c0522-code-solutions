fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => console.log('List of users:', users));

fetch('https://pokeapi.co/api/v2/pokemon/58')
  .then(response => response.json())
  .then(description => console.log('Growlithe Description:', description));
