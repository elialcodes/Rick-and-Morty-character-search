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
  const [filterName, setFilterName] = useState('');
  const [filterGender, setFilterGender] = useState('');

  useEffect(() => {
    getCharacters().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  const handleFilterName = (value) => {
    setFilterName(value);
  };

  const handleFilterGender = (value) => {
    setFilterGender(value);
  };

  const handleReset = () => {
    setFilterName('');
    setFilterGender('');
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      if (filterGender === '') {
        return characters;
      }
      if (filterGender === 'Female') {
        return character.gender === 'Female';
      }
      if (filterGender === 'Male') {
        return character.gender === 'Male';
      }
    });

  const notFoundCharacters = filteredCharacters.length === 0 ? 'Sorry, character not found' : '';

  return (
    <>
      <Header />
      <main>
        <h2 className="title">Search your favorite character</h2>
        <FilterName onChangeFilterName={handleFilterName} valueName={filterName} />
        <FilterGender onChangeFilterGender={handleFilterGender} valueGender={filterGender} />
        <button className="button__reset" onClick={handleReset}>
          Reset
        </button>
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
