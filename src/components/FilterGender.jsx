import '../styles/components/FilterGender.scss';

function FilterGender() {
  return (
    <form className="form__gender">
      <span className="form__gender-title">Filter by gender: </span>
      <label className="form__gender-label" htmlFor="gender">
        Female
      </label>
      <input className="form__gender-input" type="radio" id="gender" value="Male" />
      <label className="form__gender-label" htmlFor="gender">
        Male
      </label>
      <input className="form__gender-input" type="radio" id="gender" value="Female" />
    </form>
  );
}

export default FilterGender;
