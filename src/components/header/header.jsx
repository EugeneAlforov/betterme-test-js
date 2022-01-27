import React  from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import menuButton from '../../assets/menu-button.svg';

export const Header = () => {

  return (
    <div className="header">
        <img src={logo} alt="Fasting" className="headerImage" />
        <img src={menuButton} alt="Menu" className="menuButtonImage" />
    </div>
  )
}

export default Header;
