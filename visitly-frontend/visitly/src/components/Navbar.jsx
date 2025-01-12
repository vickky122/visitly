import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#6200ea', color: '#fff' }}>
    <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</Link>
    <Link to="/about" style={{ color: '#fff' }}>About</Link>
  </nav>
);

export default Navbar;
