import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav style={{ padding: '1rem', background: '#6200ea', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <Link to="/" style={{ color: '#fff', marginRight: '2rem' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff' }}>About</Link>
      </div>
      <div>
        {isAuthenticated ? (
          <button onClick={handleLogout} style={{ background: 'red', color: 'white', padding: '0.5rem', border: 'none', cursor: 'pointer' }}>
            Logout
          </button>
        ) : (
          <button onClick={handleLogin} style={{ background: 'green', color: 'white', padding: '0.5rem', border: 'none', cursor: 'pointer' }}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
