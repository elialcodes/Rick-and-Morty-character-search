import PropTypes from 'prop-types';
import '../styles/components/FilterGender.scss';

function FilterGender({ onChangeFilterGender, valueGender }) {
  const handleInputGender = (event) => {
    onChangeFilterGender(event.target.value);
    console.log(event.target.value);
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
        name="female"
        id="female"
        value="Female"
        checked={valueGender === 'Female'}
        onChange={handleInputGender}
      />
      <label className="form__gender-label" htmlFor="male">
        Male
      </label>
      <input
        className="form__gender-input"
        type="radio"
        name="male"
        id="male"
        value="Male"
        checked={valueGender === 'Male'}
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