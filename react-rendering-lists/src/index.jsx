import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const pokemonUl = pokedex.map(pokemon =>
  <li key={pokemon.number}>{pokemon.name}</li>
);

const root =
ReactDOM.createRoot(
  document.querySelector('#root')
);

root.render(<ul>{pokemonUl}</ul>);
