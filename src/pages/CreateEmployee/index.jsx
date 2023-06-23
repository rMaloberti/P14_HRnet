import { Header } from '../../components/Header';
import './index.css';

export const CreateEmployee = () => {
  const submitForm = (event) => {
    event.preventDefault();
  };
  return (
    <div className="page">
      <Header page="create-employee" />
      <h2 className="page__title">Create employee</h2>
      <form onSubmit={submitForm} className="page__form">
        <filedset className="page__form__block">
          <legend className="page__form__block__legend">Name</legend>
          <input
            className="page__form__block__input"
            id="first-name"
            type="text"
            placeholder="First name"
          />
          <input
            className="page__form__block__input"
            id="last-name"
            type="text"
            placeholder="Last name"
          />
        </filedset>
        <filedset className="page__form__block">
          <legend className="page__form__block__legend">Dates</legend>
          <input
            className="page__form__block__input"
            id="date-of-birth"
            type="text"
            placeholder="Date of birth"
          />
          <input
            className="page__form__block__input"
            id="start-date"
            type="text"
            placeholder="Start date"
          />
        </filedset>
        <filedset className="page__form__block">
          <legend className="page__form__block__legend">Address</legend>
          <input
            className="page__form__block__input"
            id="street"
            type="text"
            placeholder="Street"
          />
          <input className="page__form__block__input" id="city" type="text" placeholder="City" />
          <select className="page__form__block__select" name="state" id="state">
            <option>State</option>
          </select>
          <input
            className="page__form__block__input"
            id="zip-code"
            type="number"
            placeholder="Zip code"
          />
        </filedset>
        <filedset className="page__form__block">
          <select className="page__form__block__select" name="department" id="department">
            <option>Department</option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </filedset>
        <button className="page__form__submit" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};
