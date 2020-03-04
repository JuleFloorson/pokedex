import './app.scss';
import { createElement } from './lib/dom';
import { createHeadline } from './components/headline';
import { createSearch } from './components/search';
import pokeballImage from './pictures/pokeball.png';
import { pokemons } from './components/pokemons';

const allPokemons = [
  'Bisasam',
  'Bisaknosp',
  'Bisaflor',
  'Glumanda',
  'Glutexo',
  'Glurak',
  'Schiggi',
  'Schillok',
  'Turtok',
  'Raupy',
  'Safcon',
  'Smettbo',
  'Hornilu',
  'Korkuna',
  'Bibor',
  'Taubsi',
  'Tauboga',
  'Tauboss',
  'Rattfratz',
  'Rattikarl',
  'Habitak',
  'Ibitak',
  'Rettan',
  'Arbok',
  'Pikachu',
  'Raichu',
  'Sandan',
  'Sandamer',
  'Nidoran',
  'Nidorina',
  'Nidoqueen',
  'Nidoran',
  'Nidorino',
  'Nidoking',
  'Piepi',
  'Pixi'
];

export function app() {
  //create elements header main container
  const main = createElement('main', { className: 'main' });
  const pokedexContainer = createElement('div', {
    className: 'pokedexcontainer'
  });
  const pokedexHead = createElement('div', { className: 'pokehead' });
  const pokedexMain = createElement('div', { className: 'pokemain' });
  main.appendChild(pokedexContainer);
  pokedexContainer.appendChild(pokedexHead);
  pokedexContainer.appendChild(pokedexMain);

  const headlineElement = createHeadline('Pokedex');
  const searchElement = createSearch();
  pokedexHead.appendChild(headlineElement);
  pokedexMain.appendChild(searchElement);

  let searchResults = pokemons(allPokemons);

  pokedexMain.appendChild(searchResults);

  searchElement.addEventListener('input', event => {
    pokedexMain.removeChild(searchResults);
    const searchValue = event.target.value;
    const filterPokemons = allPokemons.filter(pokemon => {
      return pokemon.toLowerCase().startsWith(searchValue.toLowerCase());
    });

    searchResults = pokemons(filterPokemons);

    pokedexMain.appendChild(searchResults);
  });

  const myImage = createElement('img', {
    className: 'pokeimage',
    src: pokeballImage
  });

  pokedexHead.appendChild(myImage);

  return [main]; // Array
}
