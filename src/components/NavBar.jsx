import React from 'react';
import './NavBar.css'; // Import your CSS file for styling

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;