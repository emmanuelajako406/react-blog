import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">BLOG</Link>
      </div>
      <div className="navbar-social">
        <Link to="/">Home</Link>
      </div>
      <ProgressBar />
    </nav>
  );
};

export default Navbar;
