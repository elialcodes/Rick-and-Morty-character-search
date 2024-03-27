import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, matchPath } from 'react-router-dom';
import getCharacters from '../services/api';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterCharacters, setFilterCharacters] = useState('');

  useEffect(() => {
    // Dentro de useEffect llamamos a la API que está en la carpeta services
    getCharacters().then((charactersData) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      setCharacters(charactersData);
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, []);

  const handleFilterName = (value) => {
    setFilterCharacters(value);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterCharacters.toLowerCase());
  });

  const { pathname } = useLocation();
  const characterDetailRoute = matchPath('/character/:idCharacter', pathname);
  const idCharacter = characterDetailRoute ? characterDetailRoute.params.idCharacter : null;
  const characterDetailData = characters.find((character) => character.id === idCharacter);

  return (
    <main>
      <Filters onChangeFilterName={handleFilterName} />
      <CharacterList dataCharacters={filteredCharacters} />
      <Routes>
        <Route
          path="/character/:idCharacter"
          element={<CharacterDetail dataCharacters={characterDetailData} />}
        />
      </Routes>
    </main>
  );
};

export default App;
