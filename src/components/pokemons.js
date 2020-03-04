import './pokemons.scss';
import { createElement } from '../lib/dom';

export function pokemons(items) {
  const container = createElement('div', {
    className: 'pokemons'
  });

  items.forEach(item => {
    const element = createElement('div', {
      innerText: item,
      className: 'pokemon'
    });
    element.addEventListener('click', () => {
      const favourites = [item];
      localStorage.setItem('favourites', JSON.stringify(favourites));
    });
    container.appendChild(element);
  });

  return container;
}
