import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/components/CharacterCard.scss';

function CharacterCard({ character }) {
  const icon = (character) => {
    if (character.species === 'Alien') {
      return '👽';
    } else {
      return character.species;
    }
  };

  // const icon = character.species === 'Alien' ? '👽' : character.species;

  return (
    <li className="card">
      <Link to={`/characterDetail/${character.id}`}>
        <div>
          <figure>
            <img src={character.image} alt={character.name} />
          </figure>
          <div className="card__text">
            <p>{`Name: ${character.name}`}</p>
            <p>Specie: {icon(character)}</p>
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
