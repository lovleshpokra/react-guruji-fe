import React from 'react';
import avatar from '../../assets/avatar.png';
import arrowDown from '../../assets/arrow-down.png';
import wallet from '../../assets/wallet.png';
import './Header.scss';

export const Header = () => (
  <div className="with-padding">
    <header className="header">
      <div className="header__left">
        <div className="header__left--logo">
          <a href="/">GURUJI</a>
        </div>
        <div className="header__left--nav">
          <a href="/about">Talk with astrologers</a>
        </div>
      </div>
      <div className="header__right">
        <div className="header__right--language">
          English
          <img src={arrowDown} />
        </div>
        <div className="header__right--wallet">
          <img src={wallet} /> 200
        </div>
        <div className="header__right--user">
          <img src={avatar} />
        </div>
      </div>
    </header>
  </div>
);
