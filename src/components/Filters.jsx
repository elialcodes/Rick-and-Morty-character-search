import PropTypes from 'prop-types';
import '../styles/components/Filters.scss';
function Filters({ onChangeFilterName }) {
  const handleInputName = (event) => {
    onChangeFilterName(event.target.value);
  };

  return (
    <form className="form">
      <div className="form__name">
        <label htmlFor="character">Search your favorite character</label>
        <input
          className="form__input"
          type="text"
          id="character"
          placeholder=" Name..."
          onChange={handleInputName}
        />
      </div>
    </form>
  );
}

Filters.propTypes = {
  onChangeFilterName: PropTypes.func,
};

export default Filters;
