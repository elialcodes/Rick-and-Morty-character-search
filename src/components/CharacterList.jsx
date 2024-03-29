import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import '../styles/components/CharacterList.scss';

function CharacterList({ dataCharacters, notFoundCharacters }) {
  return (
    <section className="list">
      <ul className="list__characters">
        {dataCharacters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </ul>
      <h2 className="list__message-noFound">{notFoundCharacters}</h2>
    </section>
  );
}

CharacterList.propTypes = {
  dataCharacters: PropTypes.array,
  notFoundCharacters: PropTypes.string,
};

export default CharacterList;
