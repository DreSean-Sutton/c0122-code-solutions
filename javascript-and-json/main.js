/* eslint-disable comma-spacing */
/* eslint-disable key-spacing */
/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
/* eslint-disable quote-props */
var books = [
  {
    title: 'Cody is gone, but Jif still lives',
    author: 'God',
    isbn: '12345'
  },
  {
    title: 'Is This Kill Percent?',
    author: 'Side: B :)',
    isbn: '80'
  },
  {
    title: 'Something Else',
    author: 'Someone Else',
    isbn: '36912'
  }
];

for (let i = 0; i < books.length; i++) {
  console.log(`typeof books at index ${i}: `, typeof (books[i]));
}

var stringifiedBooks = JSON.stringify(books);

console.log('typeof stringifiedBooks result: ', typeof (stringifiedBooks));
console.log('stringifiedBooks result: ', (stringifiedBooks));

var studentString = '{"student":"Dre Sean","Number id":"5501"}';
console.log('studentString result: ', studentString);
console.log('typeof studentString result: ', typeof (studentString));

var parsedStudent = JSON.parse(studentString);
console.log('parsedStudent result: ', parsedStudent);
console.log('typeof parsedStudent result: ', typeof (parsedStudent));
