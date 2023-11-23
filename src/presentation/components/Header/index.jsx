import React from 'react';
import './styles.scss';
import logo from '../../../assets/logo.png';

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header_nav">
        <button className="button-style">На главную</button>
        <button className="button-style">Тренировка</button>
        <button className="button-style">Как учить</button>
      </div>
    </div>
  );
}

export { Header };
