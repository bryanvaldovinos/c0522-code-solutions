var books = [
  {
    isbn: '1234-56789',
    title: 'Hatchet',
    author: 'Gary Paulson'
  },
  {
    isbn: '9876-54321',
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    isbn: '2468-12161',
    title: 'Farenheit 451',
    author: 'Ray Bradburry'
  }
];

var jString = JSON.stringify(books);
console.log('typeof jString:', typeof jString, jString);
console.log('typeof book:', books, typeof books);

var studentString = '{"id":"1357-9111", "name": "Free Willy"}';
console.log('typeof studentString:', typeof studentString, studentString);

var parse = JSON.parse(studentString);
console.log('typeof parse:', typeof parse, parse);
