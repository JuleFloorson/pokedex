import './app.scss';
import { createElement } from './lib/dom';
import { filterPokemons } from './lib/pokemons';
import { createSearch } from './components/search';
import pokemonImage from './pictures/pokemonlogo.png';
import { pokemons } from './components/pokemons';
import { appendContent } from './lib/dom';

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

  const searchElement = createSearch(sessionStorage.getItem('searchValue'));

  pokedexMain.appendChild(searchElement);

  const pokemImage = createElement('img', {
    className: 'pokeimage',
    src: pokemonImage
  });

  pokedexHead.appendChild(pokemImage);

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
    pokedexMain.removeChild(searchResults);
    setSearchResults();
    const searchValue = event.target.value;
    sessionStorage.setItem('searchElement', searchValue);
  });

  return [main];
}
