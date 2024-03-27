import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/core/reset.scss';
import '../styles/App.scss';
import getCharacters from '../services/api';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterCharacters, setFilterCharacters] = useState('');

  useEffect(() => {
    getCharacters().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  const handleFilterName = (value) => {
    setFilterCharacters(value);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterCharacters.toLowerCase());
  });

  return (
    <>
      <Header />
      <main className="main">
        <Filters onChangeFilterName={handleFilterName} />
        <Routes>
          <Route path="/" element={<CharacterList dataCharacters={filteredCharacters} />} />
          <Route
            path="/characterDetail/:id"
            element={<CharacterDetail characters={characters} />}
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
