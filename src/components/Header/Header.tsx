import { RxHamburgerMenu } from 'react-icons/rx';

import './Header.scss';
import { navLinks } from '../../utilits/navlinks';

type Props = {
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header: React.FC<Props> = ({ menuActive, setMenuActive }) => {
  return (
    <header className="header">
      <div className="header__container container">
        <button className="header__burger" onClick={() => setMenuActive(!menuActive)}>
          <RxHamburgerMenu />
        </button>

        <a href="#/">
          <img
            src={require('./../../assets/logo/vertical-logo.png')}
            alt="logo"
            className="header__logo"
          />
        </a>

        <nav className="header__nav">
          <ul className="header__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.path} className="header__link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="/" className="header__donate-link">
          <span className="header__donate-text">Задонатити</span>

          <span className="header__donate-icon">
            <img src="/images/header/donate2.svg" alt="donate-icon" />
          </span>
        </a>
      </div>
    </header>
  );
};
