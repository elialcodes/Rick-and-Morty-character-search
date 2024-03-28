import PropTypes from 'prop-types';
import '../styles/components/FilterName.scss';

function FilterName({ onChangeFilterName, valueName }) {
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
          value={valueName}
          placeholder=" Name..."
          onChange={handleInputName}
        />
      </form>
    </>
  );
}

FilterName.propTypes = {
  onChangeFilterName: PropTypes.func,
  valueName: PropTypes.string,
};

export default FilterName;
