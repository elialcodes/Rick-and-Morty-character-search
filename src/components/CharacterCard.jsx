import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CharacterCard({ character }) {
  return (
    <li>
      <Link to={`/characterDetail/${character.id}`}>
        <div>
          <img src={character.image} alt={character.name} />
          <p>{`Name: ${character.name}`}</p>
          <p>{`Specie: ${character.species}`}</p>
        </div>
      </Link>
    </li>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
