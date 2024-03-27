import { useEffect, useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
import getCharacters from '../services/api';
import Filters from './Filters';
import CharacterList from './CharacterList';

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

  return (
    <main>
      <Filters onChangeFilterName={handleFilterName} />
      <CharacterList dataCharacters={filteredCharacters} />
    </main>
  );
};

export default App;
