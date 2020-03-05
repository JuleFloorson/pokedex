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

export function filterPokemons(searchValue) {
  const lowerCaseSearchValue = searchValue.toLowerCase();

  const filteredPokemons = allPokemons.filter(pokemon => {
    return pokemon.toLowerCase().startsWith(lowerCaseSearchValue);
  });
  return filteredPokemons;
}
