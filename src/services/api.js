// Fichero src/services/api.js

const getCharacters = () => {
  // Llamamos a la API
  return fetch(
    'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
  )
    .then((response) => response.json())
    .then((data) => {
      // Cuando responde la API podemos limpiar los datos aquí, aunque no es obligatorio
      const charactersFromAppi = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          origin: character.origin.name,
          image: character.image,
          episodes: character.episodes,
        };
      });
      return charactersFromAppi;
    });
};

export default getCharacters;
