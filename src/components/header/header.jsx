import React, { useState } from 'react';
import '../../styles/header/styles.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/icons/logo1-1.png';
import { IoMenu } from 'react-icons/io5';
import { FaMap, FaPlayCircle } from 'react-icons/fa';
export const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      toggleMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={logo} alt="Logo" className="logo" />

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <Link to="/" onClick={handleLinkClick}>
              <li className="play">
                <button>
                  <FaPlayCircle size={24} className="mr-2" />
                  Juega
                </button>
              </li>
            </Link>
            <Link to="/mapa" onClick={handleLinkClick}>
              <li className="play">
                <button>
                  <FaMap size={24} className="mr-2" />
                  Descubre
                </button>
              </li>
            </Link>
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <IoMenu size={50} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
