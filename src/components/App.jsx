import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/core/reset.scss';
import '../styles/App.scss';
import getCharacters from '../services/api';
import Header from './Header';
import FilterName from './FilterName';
import FilterGender from './FilterGender';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterCharacters, setFilterCharacters] = useState('');
  // const [notFoundCharacters, setNotFoundCharacters] = useState('');

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

  const notFoundCharacters = filteredCharacters.length === 0 ? 'Sorry, character not found' : '';

  return (
    <>
      <Header />
      <main>
        <h2 className="title">Search your favorite character</h2>
        <FilterName onChangeFilterName={handleFilterName} />
        <FilterGender />
        <Routes>
          <Route
            path="/"
            element={
              <CharacterList
                dataCharacters={filteredCharacters}
                notFoundCharacters={notFoundCharacters}
              />
            }
          />
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
