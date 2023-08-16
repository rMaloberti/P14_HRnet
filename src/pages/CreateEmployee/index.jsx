import { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Header } from '../../components/Header';
import './index.css';
import { Select } from '../../components/Select';
import { FeedbackModal } from '../../components/FeedbackModal';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../../features/employees';

export const CreateEmployee = () => {
  const stateOptions = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District Of Columbia',
    'Federated States Of Micronesia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Islands',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  const departmentOptions = ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];

  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);
  const streetInput = useRef(null);
  const cityInput = useRef(null);
  const zipCodeInput = useRef(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedbackSuccess, setFeedbackSucces] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const dispatch = useDispatch();

  const validateForm = () => {
    if (birthDate === null || startDate === null || state === '' || department === '') {
      setFeedbackSucces(false);
      setFeedbackMessage('Data is missing, please make sure you filled every input.');
    } else {
      setFeedbackSucces(true);
      setFeedbackMessage('The new employee has been successfully created.');
    }

    dispatch(
      createEmployee({
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: birthDate.toString(),
        startDate: startDate.toString(),
        department: department,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
      })
    );
  };

  const submitForm = (event) => {
    event.preventDefault();
    validateForm();
    setIsModalOpen(true);
  };

  const resetForm = () => {
    firstNameInput.current.value = '';
    lastNameInput.current.value = '';
    setBirthDate(null);
    setStartDate(null);
    streetInput.current.value = '';
    cityInput.current.value = '';
    setState('');
    zipCodeInput.current.value = '';
    setDepartment('');
  };

  return (
    <div className="page">
      <FeedbackModal
        success={feedbackSuccess}
        message={feedbackMessage}
        modalController={{ getter: isModalOpen, setter: setIsModalOpen }}
        resetForm={resetForm}
      />
      <Header page="create-employee" />
      <h2 className="page__title">Create employee</h2>
      <form onSubmit={submitForm} className="page__form">
        <fieldset className="page__form__block">
          <legend className="page__form__block__legend">Name</legend>
          <input
            ref={firstNameInput}
            className="page__form__block__input"
            id="first-name"
            type="text"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            ref={lastNameInput}
            className="page__form__block__input"
            id="last-name"
            type="text"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </fieldset>
        <fieldset className="page__form__block">
          <legend className="page__form__block__legend">Dates</legend>
          <DatePicker
            className="page__form__block__input"
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
            placeholderText="Date of birth"
          />
          <DatePicker
            className="page__form__block__input"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Start date"
          />
        </fieldset>
        <fieldset className="page__form__block">
          <legend className="page__form__block__legend">Address</legend>
          <input
            ref={streetInput}
            className="page__form__block__input"
            id="street"
            type="text"
            placeholder="Street"
            onChange={(e) => setStreet(e.target.value)}
            required
          />
          <input
            ref={cityInput}
            className="page__form__block__input"
            id="city"
            type="text"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <Select
            placeholder="State"
            options={stateOptions}
            valueSetter={setState}
            selected={state}
          />
          <input
            ref={zipCodeInput}
            className="page__form__block__input"
            id="zip-code"
            type="number"
            placeholder="Zip code"
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </fieldset>
        <fieldset className="page__form__block">
          <Select
            placeholder="Department"
            options={departmentOptions}
            valueSetter={setDepartment}
            selected={department}
          />
        </fieldset>
        <button className="page__form__submit" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};
