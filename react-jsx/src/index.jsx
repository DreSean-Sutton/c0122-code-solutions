import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, JSX!</h1>;
const anotherElement = <ul>
  <li>No</li>
  <li>Way</li>
  <li>This</li>
  <li>Works</li>
  <li>With</li>
  <li>Emmet</li>
  <li>uwu</li>
</ul>;
ReactDOM.render(
  element,
  document.querySelector('#root')
);

ReactDOM.render(
  anotherElement,
  document.querySelector('#sibling-root')
);
