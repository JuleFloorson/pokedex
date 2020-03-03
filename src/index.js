import './index.scss';
import { app } from './app';

const elements = app();
elements.forEach(element => {
  document.body.appendChild(element);
});
/* Der Variable 'elements' wird der Wert der Funktion 'app()' zugewiesen. Diese Funktion 
  setzt die erstellen Elemente in den Body.*/
// elements.forEach(document.body.appendChild);
