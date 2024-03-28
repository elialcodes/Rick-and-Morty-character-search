import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import '../styles/components/CharacterDetail.scss';

function CharacterDetail({ characters }) {
  const { id } = useParams();
  const characterData = characters.find((character) => {
    return character.id === parseInt(id);
  });

  return (
    <div className="card">
      <img src={characterData.image} alt={characterData.name} />
      <div className="card__text">
        <h4>{`Name: ${characterData.name}`}</h4>
        <p>{`Specie: ${characterData.species}`}</p>
        <p>{`Origin: ${characterData.location}`}</p>
        <p>
          Status:
          {characterData.status === 'Dead' ? (
            <i className="fa-solid fa-skull"></i>
          ) : (
            characterData.status
          )}
        </p>
        <p>{`Number of episodes: ${characterData.episode.length}`}</p>
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {
  characters: PropTypes.array,
};

export default CharacterDetail;
