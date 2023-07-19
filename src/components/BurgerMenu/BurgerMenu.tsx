import classNames from 'classnames';
import { useRef } from 'react';
import { navLinks } from '../../utilits/navlinks';

import './BurgerMenu.scss';

type Props = {
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BurgerMenu: React.FC<Props> = ({ menuActive, setMenuActive }) => {
  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const listener = (event: any) => {
  //     if (!ref.current || ref.current.contains(event.target)) {
  //       return;
  //     }

  //     setIsOpen(false);
  //   };

  //   document.addEventListener("mousedown", listener);
  //   document.addEventListener("touchstart", listener);
  //   return () => {
  //     document.removeEventListener("mousedown", listener);
  //     document.removeEventListener("touchstart", listener);
  //   };
  // },[ref, setIsOpen]);

  return (
    <div
      className={menuActive ? 'burger-menu active' : 'burger-menu'}
      onClick={() => setMenuActive(false)}
    >
      <div
        className={classNames('burger-menu__blur', {
          'bg-opacity-70 backdrop-blur-[2px]': menuActive
        })}
      />
      <div
        className={menuActive ? 'burger-menu__content active' : 'burger-menu__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="burger-menu__title ">Меню</h4>
        <nav ref={ref} className="burger-menu__nav">
          <ul className="burger-menu__list">
            {navLinks.map((link) => (
              <li key={link.id} className="burger-menu__item">
                <span className="burger-menu__icon">{link.icon}</span>
                <a href={link.path} className="burger-menu__link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
