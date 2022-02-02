/* eslint-disable no-unused-vars */

// MATH OBJECT SECTION

var one = 5;
var five = 9;
var seventeen = 4;
var maximumValue = Math.max(one, five, seventeen);

console.log('value of max number: ', (maximumValue));

var heroes = ['Flash', 'Cyclops', 'Batman', 'Spiderman'];

var randomNumber = heroes.length * Math.random();

console.log('value of randomNumber: ', randomNumber);

var randomIndex = Math.floor(randomNumber);

var randomHero = heroes[randomIndex];

console.log('value of randomHero: ', randomHero);

// ARRAY METHODS SECTION

var library = [
  {
    title: 'Something',
    author: 'Someone'
  },
  {
    title: 'SomethingElse',
    author: 'Someone Else'
  },
  {
    title: 'It\'s Pronounced JIF not GIF',
    author: 'Literally God Himself'
  }
];

var lastBook = library.pop();
console.log('value of lastBook: ', lastBook);

var firstBook = library.shift();
console.log('value of firstBook: ', firstBook);

var js = {
  title: 'YOU CAN\'T SILENCE ME',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'It\'s Still pronounced JIF',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library: ', library);

var fullName = 'Dre Sean Sutton';
var firstFirstAndLastName = fullName.split(' ');
console.log('value of firstFirstAndLastName: ', firstFirstAndLastName);

var halfOfFirstName = firstFirstAndLastName[0];
var sayMyName = halfOfFirstName.toUpperCase();

console.log('value of sayMyName: ', sayMyName);
