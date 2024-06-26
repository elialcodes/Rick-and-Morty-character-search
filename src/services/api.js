const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const charactersFromAppi = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          gender: character.gender,
          species: character.species,
          location: character.location.name,
          image: character.image,
          episode: character.episode,
        };
      });

      charactersFromAppi.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      return charactersFromAppi;
    });
};

export default getCharacters;
