import PropTypes from 'prop-types';
import '../styles/components/FilterGender.scss';

function FilterGender({ onChangeFilterGender, valueGender }) {
  const handleInputGender = (event) => {
    onChangeFilterGender(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="form__gender">
      <span className="form__gender-title">Filter by gender: </span>
      <div className="form__gender-input">
        <label className="form__gender-input-label" htmlFor="female">
          Female
        </label>
        <input
          className="form__gender-input1"
          type="radio"
          name="female"
          id="female"
          value="Female"
          checked={valueGender === 'Female'}
          onChange={handleInputGender}
        />
        <label className="form__gender-input-label" htmlFor="male">
          Male
        </label>
        <input
          className="form__gender-input2"
          type="radio"
          name="male"
          id="male"
          value="Male"
          checked={valueGender === 'Male'}
          onChange={handleInputGender}
        />
      </div>
    </div>
  );
}

FilterGender.propTypes = {
  onChangeFilterGender: PropTypes.func,
  valueGender: PropTypes.string,
};

export default FilterGender;
