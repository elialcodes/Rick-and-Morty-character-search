import PropTypes from 'prop-types';
import localStorage from '../services/localStorage';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/components/CharacterDetail.scss';

function CharacterDetail({ characters }) {
  const { id } = useParams();

  const savedCharacter = localStorage.get('character');

  const characterData =
    savedCharacter && parseInt(savedCharacter.id) === parseInt(id)
      ? savedCharacter
      : characters.find((character) => character.id === parseInt(id));

  useEffect(() => {
    if (characterData && savedCharacter.id !== characterData.id) {
      localStorage.set('character', characterData);
    }
  }, [savedCharacter, characterData]);

  if (!characterData) {
    return (
      <div className="notFound">
        <Link to="/">
          <button className="detail__button">
            <i className="fa-solid fa-chevron-left"></i> Back
          </button>
        </Link>
        <p className="notFound__messagge">Sorry, character not found</p>
      </div>
    );
  }

  return (
    <div className="detail">
      <Link to="/">
        <button className="detail__button">
          <i className="fa-solid fa-chevron-left"></i> Back
        </button>
      </Link>
      <div className="detail__card">
        <img src={characterData.image} alt={characterData.name} />
        <div className="detail__card--text">
          <h3>
            <strong>{characterData.name}</strong>
          </h3>
          <p>
            Specie:{' '}
            {characterData.species === 'Alien' ? (
              <i className="fa-brands fa-reddit-alien"></i>
            ) : (
              characterData.species
            )}
          </p>
          <p>{`Origin: ${characterData.location}`}</p>
          <p>
            Status:{' '}
            {characterData.status === 'Dead' ? (
              <i className="fa-solid fa-skull"></i>
            ) : (
              characterData.status
            )}
          </p>
          <p>{`Number of episodes: ${characterData.episode.length}`}</p>
        </div>
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {
  characters: PropTypes.array,
};

export default CharacterDetail;
