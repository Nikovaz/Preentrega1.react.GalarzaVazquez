import React from 'react';
import '../styles/navbar.scss';
import CartWidget from './cartWidget';
import logo from '../assets/logoCharly.png';

const NavBar = () => {
  return (
    <ul>
      <li>
        <img src={logo} alt="Logo" />
      </li>
      <li><a className="active" href="#home">Home</a></li>
      <li><a href='#contact'>Estampados</a></li>
      <li><a href='#about'>Lisos</a></li>
      <CartWidget/>
    </ul>
  )
}

export default NavBar;