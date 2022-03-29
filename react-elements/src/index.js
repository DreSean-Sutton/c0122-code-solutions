import React from 'react';
import ReactDOM from 'react-dom';
const $root = document.querySelector('#root');

ReactDOM.render(
  React.createElement('h1', null, 'Hello, React'),
  $root
);
