import './app.scss';
import { createElement } from './lib/dom';
//import { createHeadline } from './components/headline';
import { createSearch } from './components/search';
import pokemonImage from './pictures/pokemonlogo.png';
// import pokeballImage from './pictures/pokeball.png';
import { pokemons } from './components/pokemons';
import { appendContent } from './lib/dom';

//
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

//
function filterPokemons(searchValue) {
  const lowerCaseSearchValue = searchValue.toLowerCase();

  const filteredPokemons = allPokemons.filter(pokemon => {
    return pokemon.toLowerCase().startsWith(lowerCaseSearchValue);
  });
  return filteredPokemons;
}
//
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

  //const headlineElement = createHeadline('Pokedex');
  const searchElement = createSearch(sessionStorage.getItem('searchValue'));
  //pokedexHead.appendChild(headlineElement);
  pokedexMain.appendChild(searchElement);

  const pokemImage = createElement('img', {
    className: 'pokeimage',
    src: pokemonImage
  });
  // const pokebImage = createElement('img', {
  //   className: 'pokeballimage',
  //   src: pokeballImage
  // });

  //

  pokedexHead.appendChild(pokemImage);
  // pokedexHead.appendChild(pokebImage);
  //ende create elements
  //
  let searchResults = null;
  function setSearchResults() {
    const filteredPokemons = filterPokemons(searchElement.value);
    searchResults = pokemons(filteredPokemons);
    appendContent(pokedexMain, searchResults);
  }
  //
  setSearchResults();

  pokedexMain.appendChild(searchResults);

  //eventlistenerfunktion
  searchElement.addEventListener('input', event => {
    main.removeChild(pokemons);
    setSearchResults();
    const searchValue = event.target.value;
    sessionStorage.setItem('searchElement', searchValue);
  });

  return [main];
}
