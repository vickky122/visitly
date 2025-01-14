import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/home');
  };

  // const handleLogout = () => {
  //   setIsAuthenticated(false);
  //   navigate('/');
  // };

  return (
    <nav style={{ padding: '1rem', background: '#6200ea', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', marginRight: '5rem' }}>Home</Link>
      <Link to="/about" style={{ color: '#fff', marginRight: '5rem' }}>About</Link>
      {/* {isAuthenticated ? (
        <button onClick={handleLogout} style={{ background: 'red', color: 'white', padding: '0.5rem' }}>
          Logout
        </button>
      ) : (
        <button onClick={handleLogin} style={{ background: 'green', color: 'white', padding: '0.5rem' }}>
          Login
        </button>
      )} */}
    </nav>
  );
};

export default Navbar;
