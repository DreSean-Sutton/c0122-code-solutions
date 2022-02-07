/* eslint-disable no-unused-vars */
console.log('hello, world');

var $h1Element = document.querySelector('h1');
console.log('$h1Element result:', $h1Element);
console.dir($h1Element);

var $explanation = document.querySelector('#explanation');
console.log('$explanation result:', $explanation);
console.dir($explanation);

var $hint = document.querySelector('.hint');
console.log('$hint result:', $hint);
console.dir($hint);

var $allPElements = document.querySelectorAll('p');
console.log('$allPElements result:', $allPElements);

var $allExampleLinks = document.querySelectorAll('.example-link');
console.log('$allExampleLinks result:', $allExampleLinks);
