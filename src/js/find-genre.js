// ----- IMPORTS

import allGenres from './json/genres.json';

// ----- DECLARATIONS

const { genres } = allGenres;

// ----- FUNCTIONS | findGenresOfMovie

export function findGenresOfMovie(ids) {
  const arr = ids.flatMap(id => genres.filter(element => element.id === id));
  const movieGenres = arr.map(el => el.name);
  if (movieGenres.length > 2) {
    const removedGenres = movieGenres.splice(0, 2);
    removedGenres.push('Other');

    return removedGenres.join(', ');
  }
  return movieGenres.join(', ');
}
