import './search.scss';
import { createElement } from '../lib/dom';

export function createSearch() {
  const element = createElement('input', {
    className: 'search',
    type: 'search',
    placeholder: 'Pokemonname'
  });
  return element;
}
