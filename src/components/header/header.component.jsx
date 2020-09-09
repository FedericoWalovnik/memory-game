import React from 'react';

import './header.styles.scss';

const Header = ({ triesCount }) => {
  return (
    <div className="header">
      <nav className="header__nav">
        <h1 className="header__logo">Memory Game</h1>
        <p className="header__tries">Tries: {triesCount}</p>
      </nav>
      <button className="header__btn">restart</button>
    </div>
  );
};

export default Header;