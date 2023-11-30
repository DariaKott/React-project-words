import React from 'react';
import './styles.scss';
import logo from '../../../assets/logo2.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header_nav">
        <button className="button-style">
          <Link to="/">На главную</Link>
        </button>
        <button className="button-style">
          <Link to="/training">Тренировка</Link>
        </button>
        <button className="button-style">
          <Link to="/how-to-learn">Как учить</Link>
        </button>
      </div>
    </div>
  );
}

export { Header };
