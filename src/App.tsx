import React, { useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { BurgerMenu } from './components/BurgerMenu';
import { HomeSection } from './components/Sections/HomeSection';

export const App = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
    <div className="app">
      <Header menuActive={menuActive} setMenuActive={setMenuActive} />
      <BurgerMenu menuActive={menuActive} setMenuActive={setMenuActive} />
      <main className="container">
        <HomeSection />
      </main>
    </div>
  );
};
