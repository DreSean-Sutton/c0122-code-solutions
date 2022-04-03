import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const imageArray = [
  { name: 'bulbasaur', id: '001', circleId: '001', url: '../dist/images/001.png' },
  { name: 'charmander', id: '004', circleId: '004', url: '../dist/images/004.png' },
  { name: 'squirtle', id: '007', circleId: '007', url: '../dist/images/007.png' },
  { name: 'pikachu', id: '025', circleId: '025', url: '../dist/images/025.png' },
  { name: 'jigglypuff', id: '039', circleId: '039', url: '../dist/images/039.png' }
];

const root =
ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Carousel imageArray={imageArray} />);
