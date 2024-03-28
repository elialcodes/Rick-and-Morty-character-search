import PropTypes from 'prop-types';
import '../styles/components/CharacterList.scss';
import CharacterCard from './CharacterCard';

function CharacterList({ dataCharacters, notFoundCharacters }) {
  return (
    <section>
      <ul className="list">
        {dataCharacters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </ul>
      <h2 className="message__noFound">{notFoundCharacters}</h2>
    </section>
  );
}

CharacterList.propTypes = {
  dataCharacters: PropTypes.array,
};

export default CharacterList;
