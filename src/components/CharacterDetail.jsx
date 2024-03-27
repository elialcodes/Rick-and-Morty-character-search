import PropTypes from 'prop-types';

function CharacterDetail({ dataCharacters }) {
  return (
    <div>
      <img src={dataCharacters.image} alt={dataCharacters.name} />
      <p>{dataCharacters.name}</p>
      <p>{dataCharacters.species}</p>
      <p>{dataCharacters.origin.name}</p>
      <p>{dataCharacters.status}</p>
      <p>{dataCharacters.episodes}</p>
    </div>
  );
}

CharacterDetail.propTypes = {
  dataCharacters: PropTypes.array,
};

export default CharacterDetail;
