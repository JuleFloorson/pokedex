import './app.scss';
import { createElement } from './lib/dom';
import { createHeadline } from './components/headline';
import { createSearch } from './components/search';
import pokeballImage from './pictures/pokeball.png';
import { pokemons } from './components/pokemons';

const allPokemons = ['Pikachu', 'Pichu', 'Mewto', 'Schiggy', 'Glumanda'];

export function app() {
  const header = createElement('header', { className: 'header' });
  const main = createElement('main', { className: 'main' });

  const headlineElement = createHeadline('Pokedex');
  const searchElement = createSearch();
  header.appendChild(headlineElement);
  main.appendChild(searchElement);
  let searchResults = pokemons(allPokemons);

  main.appendChild(searchResults);

  searchElement.addEventListener('input', event => {
    main.removeChild(searchResults);
    const searchValue = event.target.value;
    const filterPokemons = allPokemons.filter(pokemon => {
      return pokemon.startsWith(searchValue);
    });

    searchResults = pokemons(filterPokemons);

    main.appendChild(searchResults);
  });

  const myImage = createElement('img', {
    className: 'pokeimage',
    src: pokeballImage
  });

  header.appendChild(myImage);

  return [header, main]; // Array
}
