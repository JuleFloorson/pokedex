import './search.scss';
import { createElement } from '../lib/dom';

export function createSearch(value) {
  const element = createElement('input', {
    className: 'search',
    type: 'search',
    placeholder: 'Pokemonname',
    value: value
  });
  return element;
}
