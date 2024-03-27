import PropTypes from 'prop-types';
import '../styles/components/FilterName.scss';

function FilterName({ onChangeFilterName }) {
  const handleInputName = (event) => {
    onChangeFilterName(event.target.value);
  };

  return (
    <>
      <form className="form__name">
        <label htmlFor="name" className="form__name-label">
          Filter by name:
        </label>
        <input
          className="form__name-input"
          type="text"
          id="name"
          placeholder=" Name..."
          onChange={handleInputName}
        />
      </form>
    </>
  );
}

FilterName.propTypes = {
  onChangeFilterName: PropTypes.func,
};

export default FilterName;
