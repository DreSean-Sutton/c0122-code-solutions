import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button> Me!</button>;
}
const element = <CustomButton />;

ReactDOM.render(
  element,
  document.querySelector('#root')
);
