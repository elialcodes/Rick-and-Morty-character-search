import PropTypes from 'prop-types';

function CharacterCard({ character }) {
  return (
    <li>
      <div>
        <img src={character.image} alt={character.name} />
        <p>{character.name}</p>
        <p>{character.species}</p>
      </div>
    </li>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object,
};

export default CharacterCard;
