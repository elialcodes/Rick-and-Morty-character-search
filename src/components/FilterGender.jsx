import PropTypes from 'prop-types';
import '../styles/components/FilterGender.scss';

function FilterGender({ onChangeFilterGender, valueGender }) {
  const handleInputGender = (event) => {
    onChangeFilterGender(event.target.value);
  };

  return (
    <form className="form__gender">
      <span className="form__gender-title">Filter by gender: </span>
      <label className="form__gender-label" htmlFor="female">
        Female
      </label>
      <input
        className="form__gender-input"
        type="radio"
        name="gender"
        id="female"
        value="Female"
        checked={valueGender}
        onChange={handleInputGender}
      />
      <label className="form__gender-label" htmlFor="male">
        Male
      </label>
      <input
        className="form__gender-input"
        type="radio"
        name="gender"
        id="male"
        value="Male"
        onChange={handleInputGender}
      />
    </form>
  );
}

FilterGender.propTypes = {
  onChangeFilterGender: PropTypes.func,
  valueGender: PropTypes.string,
};

export default FilterGender;
