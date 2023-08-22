import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import './index.css';

export const Header = (props) => {
  const { page } = props;

  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo__thumbnail">
          <img className="header__logo__thumbnail__img" alt="Wealth Health logo" src={logo} />
        </div>
        <h1 className="header__logo__title">HRnet</h1>
      </div>
      <nav className="header__nav">
        {page === 'current-employees' ? (
          <Link to="/">Create employee</Link>
        ) : (
          <Link to="/list">View current employees</Link>
        )}
      </nav>
    </header>
  );
};
