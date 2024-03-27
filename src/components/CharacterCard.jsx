import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CharacterCard({ character }) {
  return (
    <li>
      <Link to={`/character/${character.id}`}>
        <div id={character.id}>
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
          <p>{character.species}</p>
        </div>
      </Link>
    </li>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
