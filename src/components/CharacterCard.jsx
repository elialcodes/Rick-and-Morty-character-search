import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/components/CharacterCard.scss';

function CharacterCard({ character }) {
  return (
    <li>
      <Link to={`/characterDetail/${character.id}`}>
        <div className="card">
          <img src={character.image} alt={character.name} />
          <div className="card__text">
            <p>{`Name: ${character.name}`}</p>
            <p>{`Specie: ${character.species}`}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
