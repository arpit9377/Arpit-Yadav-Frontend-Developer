// src/Components/Header.jsx

import React from 'react';
import './style.css';
import logoImage from '../Assets/logo.png';

const Header = () => {
  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoImage} alt="Logo" className="h-8 mr-2" />
          
        </div>
        <ul className="flex space-x-4 items-center">
          <li>
            <a href="/" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Home</a>
          </li>
          <li>
            <a href="/rockets" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Rockets</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
