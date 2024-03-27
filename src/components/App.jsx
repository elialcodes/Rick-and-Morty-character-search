// Fichero src/components/App.jsx, componente principal de la web

import { useEffect, useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
import getCharacters from '../services/api'; // Importamos el servicio que acabamos de crear
import CharacterList from './CharacterList';
const App = () => {
  // Estados

  const [characters, setCharacters] = useState([]);

  // Llamar a la api con useEffect

  useEffect(() => {
    // Dentro de useEffect llamamos a la API que está en la carpeta services
    getCharacters().then((charactersData) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      setCharacters(charactersData);
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, []);

  return (
    <>
      <CharacterList dataCharacters={characters} />
    </>
  );
};

export default App;
