import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function CharacterDetail({ characters }) {
  const { id } = useParams();
  const characterData = characters.find((character) => {
    return character.id === parseInt(id);
  });

  return (
    <div>
      <img src={characterData.image} alt={characterData.name} />
      <h4>{`Name: ${characterData.name}`}</h4>
      <p>{`Specie: ${characterData.species}`}</p>
      <p>{`Origin: ${characterData.location}`}</p>
      <p>{`Status: ${characterData.status}`}</p>
      <p>{`Number of episodes: ${characterData.episode.length}`}</p>
    </div>
  );
}

CharacterDetail.propTypes = {
  characters: PropTypes.array,
};

export default CharacterDetail;
