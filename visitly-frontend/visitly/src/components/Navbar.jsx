import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();  // Using Auth0 hooks

  return (
    <nav style={{ padding: '1rem', background: '#6200ea', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <Link to="/" style={{ color: '#fff', marginRight: '2rem' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff' }}>About</Link>
      </div>
      <div>
        {isAuthenticated ? (
          <div>
            <p style={{ color: '#fff' }}>Welcome, {user?.name}</p>  {/* Display user name */}
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              style={{ background: 'red', color: 'white', padding: '0.5rem', border: 'none', cursor: 'pointer' }}
            >
              Log Out
            </button>
          </div>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            style={{ background: 'green', color: 'white', padding: '0.5rem', border: 'none', cursor: 'pointer' }}
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
