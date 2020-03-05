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
      const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
      console.log(favourites);
      if (!favourites.includes(item)) {
        favourites.push(item);
      } else {
        const itemIndex = favourites.indexOf(item);
        favourites.splice(itemIndex, 1);
      }

      if (favourites.length === 6) {
        alert('maximum erreicht');
      }

      const favouritesJSON = JSON.stringify(favourites);
      localStorage.setItem('favourites', favouritesJSON);
    });
    container.appendChild(element);
  });

  return container;
}
