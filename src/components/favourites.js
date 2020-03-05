import './favourites.scss';
import { createElement } from '../lib/dom';

export function favouritePokemons() {
  const container = createElement('div', {
    className: 'favouritepokes'
  });
  return container;
}
