import './headline.scss';
import { createElement } from '../lib/dom';

export function headline() {
  const headlineAttributes = {
    innerText: 'Pokedex',
    className: 'headline'
  };
  const element = createElement('h1', headlineAttributes);
  //verschiedene Schreibweisen
  //   const element = document.createElement('h1');
  //   element.innerText = 'Pokedex';
  //   element.className = 'headline';
  return element;
}
