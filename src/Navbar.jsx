// Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">BLOG</Link>
      </div>
      <div className="navbar-social">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;
