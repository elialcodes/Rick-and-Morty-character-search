import PropTypes from 'prop-types';
function Filters({ onChangeFilterName }) {
  const handleInputName = (event) => {
    onChangeFilterName(event.target.value);
  };

  return (
    <form>
      <label htmlFor="character">Busca tu personaje favorito</label>
      <input type="text" id="character" placeholder=" Nombre..." onChange={handleInputName} />
    </form>
  );
}

Filters.propTypes = {
  onChangeFilterName: PropTypes.func,
};

export default Filters;
