import React from 'react';
import '../components/styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#best">Best</a></li>
        <li className="nav-item"><a href="#popular">Popular</a></li>
        <li className="nav-item"><a href="#immediate">Immediate</a></li>
        <li className="nav-item"><a href="#new-profit">New </a></li>
        <li className="nav-item"><a href="#immediate">Profit</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
