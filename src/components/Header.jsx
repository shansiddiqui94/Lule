import React from 'react';
import PlantCard from './PlantCard';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <nav className="header"> {/* Replace "navbar" with "header" */}
      <h1 className="logo">LULe</h1>
      <PlantCard />
    </nav>
  );
}

export default Header;