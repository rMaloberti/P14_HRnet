import logo from '../../assets/logo.jpg';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo__thumbnail">
          <img className="header__logo__thumbnail__img" alt="Wealth Health logo" src={logo} />
        </div>
        <h1 className="header__logo__title">HRnet</h1>
      </div>
    </header>
  );
};
