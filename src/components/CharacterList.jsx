import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

function CharacterList({ dataCharacters }) {
  return (
    <section>
      <ul>
        {dataCharacters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </ul>
    </section>
  );
}

CharacterList.propTypes = {
  dataCharacters: PropTypes.array,
};

export default CharacterList;
