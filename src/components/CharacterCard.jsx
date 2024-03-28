import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/components/CharacterCard.scss';

function CharacterCard({ character }) {
  // const iconOrigin = (character) => {
  //   if (character.species === 'Alien') {
  //     return '👽';
  //   } else {
  //     return character.species;
  //   }
  // };
  // // <i class="fa-brands fa-reddit-alien"></i>

  return (
    <li className="card">
      <Link to={`/characterDetail/${character.id}`}>
        <div>
          <figure>
            <img src={character.image} alt={character.name} />
          </figure>
          <div className="card__text">
            <p>{`Name: ${character.name}`}</p>
            <p>
              Specie:{' '}
              {character.species === 'Alien' ? (
                <i class="fa-brands fa-reddit-alien"></i>
              ) : (
                character.species
              )}
            </p>
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
