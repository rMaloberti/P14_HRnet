import { useEffect, useState } from 'react';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';
import './index.css';

export const Select = (props) => {
  const { placeholder, options, valueSetter, selected } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState(selected);

  const toggleSelectState = () => {
    setIsExpanded(!isExpanded);
  };

  const pickOption = (option) => {
    setValue(option);
    valueSetter(option);
    setIsExpanded(false);
  };

  useEffect(() => {
    setValue(selected);
  }, [selected]);

  return (
    <div className="select">
      <div
        className={`select__header${isExpanded ? ' select__header--expanded' : ''}`}
        onClick={toggleSelectState}
      >
        <p
          className={`select__header__selected${
            value !== '' ? '' : ' select__header__selected--placeholder'
          }`}
        >
          {value !== '' ? value : placeholder}
        </p>
        <div className="select__header__btn">
          <img
            className="select__header__btn__icn"
            alt="arrow button"
            src={isExpanded ? arrowUp : arrowDown}
          />
        </div>
      </div>
      <div className={`select__body${!isExpanded ? '' : ' select__body--expanded'}`}>
        {options.map((option, index) => {
          return option !== value ? (
            <div key={index} className="select__body__option" onClick={() => pickOption(option)}>
              <p className="select__body__option__text">{option}</p>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};
