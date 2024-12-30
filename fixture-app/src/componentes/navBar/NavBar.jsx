
import logo from '../navBar/logo1.jpg';
import React, { useState } from 'react';
import './NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="logo" className="navbar-logo" />
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Inicio</a></li>
          <li><a href="#matches" onClick={toggleMenu}>Partidos</a></li>
          <li><a href="#teams" onClick={toggleMenu}>Equipos</a></li>
          <li><a href="#standings" onClick={toggleMenu}>Clasificaciones</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
